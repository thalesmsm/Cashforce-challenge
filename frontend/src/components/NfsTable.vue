<template>
  <p v-if="errored">Desculpe! Impossível carregar os dados</p>
  <p v-else-if="loading">Carregando...</p>
  <p v-else-if="nfsInfos.length === 0">Nenhuma nota fiscal cadastrada!</p>
  <div v-else>
    <div>
      <ul class="thead d-flex">
        <li class="th list-group-item text-start">NOTA FISCAL</li>
        <li class="th list-group-item text-start">SACADO</li>
        <li class="th list-group-item text-start">CEDENTE</li>
        <li class="th list-group-item text-start">EMISSÃO</li>
        <li class="th list-group-item text-start">VALOR</li>
        <li class="th list-group-item text-start" style="width: 200px">STATUS</li>
        <li class="th list-group-item text-start" style="width: 200px"></li>
      </ul>

      <ul
        v-for="nfs in nfsInfos" v-bind:key="nfs.id"
        class="tbody d-flex align-items-center rounded py-2"
        >
        <li class="td list-group-item text-start"> {{ nfs.nNf }} </li>
        <li class="td list-group-item text-start"> {{ nfs.buyer.name }} </li>
        <li class="td list-group-item text-start"> {{ nfs.provider.name }} </li>
        <li class="td list-group-item text-start"> 
          {{ nfs.emissionDate.slice(0, 10).split('-').reverse().join('/') }} 
        </li>
        <li class="td list-group-item text-start" style="color: #00AD8C;"> {{ 
          Intl.NumberFormat('BRL', {style: 'currency', currency: 'BRL'})
            .format(Number(nfs.value))
        }} </li>
        <li
          class="td list-group-item text-start"
          style="width: 200px; color: #00AD8C; text-transform: uppercase;"> 
          {{ orderStatusBuyerArr[nfs.orderStatusBuyer] }} 
        </li>
        <li class="td list-group-item " style="width: 200px">
          <button
          type="button"
          class="cd-button rounded-pill px-4 py-1"
          v-on:click="openProvider(nfs.provider.id)"
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
	name: 'NfsTable',
	data() {
		return {
			nfsInfos: [],
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
				this.nfsInfos = response.data;
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
  li {
    font-size: 0.8rem;
    font-weight: 500;
    width: 150px;
  }
  
  .thead .th {
    color: #A1A8B9;
  }

  .tbody {
    border: 1px solid #E0E2EB;
  }

  .tbody .td {
    color: #4D5567;
  }

  .cd-button {
    background-color: transparent;
    border: 1px solid #E0E2EB;
    color: #727D94;
    font-size: 0.7rem;
    font-weight: 500;
  }
</style>
