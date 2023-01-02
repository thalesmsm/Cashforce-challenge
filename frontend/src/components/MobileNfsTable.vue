<template>
  <p v-if="errored">Desculpe! Impossível carregar os dados</p>
  <p v-else-if="loading">Carregando...</p>
  <p v-else-if="info.length === 0">Nenhuma nota fiscal cadastrada!</p>
  <div v-else>
    <div>
      <ul
        v-for="item in info" v-bind:key="item.id"
        class="tbody d-flex flex-column border rounded p-3"
        >
        <li class="mb-th list-group-item">NOTA FISCAL</li>
        <li class="mb-td list-group-item text-start px-2 border rounded"> 
          {{ item.nNf }} 
        </li>
        <li class="mb-th list-group-item">SACADO</li>
        <li class="mb-td list-group-item text-start px-2 border rounded">
          {{ item.buyer.name }}
        </li>
        <li class="mb-th list-group-item">CEDENTE</li>
        <li class="mb-td list-group-item text-start px-2 border rounded">
          {{ item.provider.name }}
        </li>
        <li class="mb-th list-group-item">EMISSÃO</li>
        <li class="mb-td list-group-item text-start px-2 border rounded">
          {{ item.emissionDate.slice(0, 10).split('-').reverse().join('/') }}
        </li>
        <li class="mb-th list-group-item">VALOR</li>
        <li 
          class="mb-td list-group-item text-start px-2 border rounded"
          style=" color: #00AD8C;">
          {{
            Intl.NumberFormat('BRL', {style: 'currency', currency: 'BRL'})
            .format(Number(item.value))
          }}
        </li>
        <li class="mb-th list-group-item">STATUS</li>
        <li
          class="mb-td list-group-item text-start px-2 border rounded"
          style=" color: #00AD8C; text-transform: uppercase;">
          {{ orderStatusBuyerArr[item.orderStatusBuyer] }}
        </li>
        <li class="mb-td list-group-item" >
          <button
            type="button"
            class="cd-button rounded-pill px-4 py-1 mt-2"
            v-on:click="openProvider(item.provider.id)"
          >
            Dados do cedente
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
	name: 'MobileComponent',
	data () {
		return {
			info: undefined,
			loading: true,
			errored: false,
			orderStatusBuyerArr: [
				'Pendente de confirmação',
				'Pedido confirmado',
				'Não reconhece o pedido',
				'Mercadoria não recebida',
				'Recebida com avaria',
				'Devolvida',
				'Recebida com devolução parcial',
				'Recebida e confirmada',
				'Pagamento Autorizado'
			],
		};
	},
	mounted() {
		axios
			.get('http://localhost:3001/orders')
			.then((response) => {
				this.info = response.data;
			})
			.catch((error) => {
				console.log(error);
				this.errored = true;
			})
			.finally(() => this.loading = false);
	},
	methods: {
		openProvider(provider) {
			this.$router.push({
				path: `provider/${provider}`
			})
		}
	}
};
</script>

<style>
  .mb-td, .mb-th {
    width: 100%;
  }

  .mb-th {
    color: #A1A8B9
  }
</style>
