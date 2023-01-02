<template>
  <nav class="d-flex flex-column d-none d-lg-block" style="width: 18%">
    <a href="https://cashforce.com.br" target="_blank">
      <img
        src="
        https://cashforce.com.br/wp-content/themes/cashforce/assets/images/logo-cashforce.svg
        "
        alt="Cashforce logo"
        class="px-3"
        />
    </a>
    <a href="/nfs" class="nf-button d-flex align-items-center">
      <i class="fa m-2"></i>
      Notas fiscais
    </a>
  </nav>
</template>

<script>
export default {
	name: 'NavComp',
}
</script>

<style>
  .nf-button {
    border-left: 4px solid #00AD8C;
    color: #00AD8C;
    cursor: pointer;
    height: 48px;
    text-decoration: none;
  }

  .nf-button:hover {
    background-color: #f5f7fa;
    color: #00AD8C;
  }

  nav {
    background-color: #FBFDFE;
    box-shadow: inset -10px 0px 10px #f5f7fa;
    height: 100vh;
    text-align: start;
  }

  nav a img {
    height: 30px;
    margin: 30px 0  30px 10px;
  }
</style>