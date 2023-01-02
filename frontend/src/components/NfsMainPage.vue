<template>
    <div class="d-flex justify-content-between">
    <Navcomp />
    <MobileNav class="d-lg-none"/>
    <section class="d-flex flex-column p-5">
      <div class="text-start">
        <h1 class="fs-3"><i class="fa"></i> Notas fiscais</h1>
        <h6 class="">Visualize as notas fiscais que você tem.</h6>
      </div>
      <NfsTable class="d-none d-lg-block"/>
      <MobileComponent class="d-lg-none"/>
    </section>
  </div>
</template>

<script>
import MobileComponent from './MobileNfsTable.vue';
import NfsTable from './NfsTable';
import MobileNav from './MobileNav.vue';
import Navcomp from './NavComp.vue';

export default {
	name: 'InfosSection',
	components: {
		NfsTable,
		MobileComponent,
		MobileNav,
		Navcomp,
	}
};
</script>

<style>

section {
    border-top: 1px solid #E0E2EB;
    margin-top: 60px;
    width: 82%;
  }

  section div h1 {
    color: #021B51;
    font-weight: 600;
    margin-bottom: 5px;
  }

  section div h6 {
    color: #727D94;
    margin-bottom: 1rem;
  }

  @media (max-width: 990px)
  {
    section {
      width: 100%;
    }
  }
</style>