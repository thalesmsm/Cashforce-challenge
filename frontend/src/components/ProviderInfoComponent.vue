<template>
  <div class="d-flex justify-content-between">
    <NavComp />
    <MobileNav class="d-lg-none"/>
    <section class="d-flex flex-column p-5">
      <div class="d-flex justify-content-between text-start">
        <div>
          <h1 class="fs-3"><i class="fa"></i> Dados do cedente</h1>
          <h6 class="">Aqui estão os dados do Cedente.</h6>
        </div>
        <RouterLink to="/nfs">
          <button
            type="button"
            class="cd-button rounded-pill px-4 py-1 mt-2"
          >
          Voltar
        </button>
        </RouterLink>
      </div>
      <div>
        <p v-if="errored">Desculpe! Impossível carregar os dados</p>
        <p v-else-if="loading">Carregando...</p>
        <p v-else-if="!providerInfos">Nenhuma nota fiscal cadastrada!</p>
        <div v-else class="d-flex justify-content-center">
          <ul class="pv-tbody d-flex flex-column border rounded p-3">
            <li class="pv-th list-group-item">NOME</li>
            <li class="pv-td list-group-item text-start px-2 border rounded">
              {{ providerInfos.name }}</li>
            <li class="pv-th list-group-item">RAZÃO SOCIAL</li>
            <li class="pv-td list-group-item text-start px-2 border rounded">
              {{ providerInfos.tradingName }}</li>
            <li class="pv-th list-group-item">CNPJ</li>
            <li class="pv-td list-group-item text-start px-2 border rounded">
              {{ providerInfos.cnpj.cnpj }}</li>
            <li class="pv-th list-group-item">TIPO DA EMPRESA</li>
            <li class="pv-td list-group-item text-start px-2 border rounded">
              {{ providerInfos.cnpj.companyType }}</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import MobileNav from './MobileNav.vue';
import NavComp from './NavComp.vue';

export default {
	name: 'ProviderInfoComponent',
	data() {
		return {
			providerInfos: {},
			loading: true,
			errored: false
		};
	},
	mounted() {
		axios
			.get(`http://localhost:3001/providers/${this.$route.params.providerId}`)
			.then((response) => {
				this.providerInfos = response.data;
			})
			.catch((error) => {
				console.log(error);
				this.errored = true;
			})
			.finally(() => this.loading = false);
	},
	components: { NavComp, MobileNav }
};
</script>

<style>
.pv-tbody {
  width: 60%;
}

.pv-th {
  color: #A1A8B9;
}

.pv-th, .pv-td {
  width: 100%;
}

@media (max-width: 990px)
  {
    .pv-tbody {
      width: 90%;
    }
  }

</style>