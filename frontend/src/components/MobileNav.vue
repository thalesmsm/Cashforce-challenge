<template>
  <nav class="nav-mob">
    <a href="https://cashforce.com.br">
      <img
        src="
        https://cashforce.com.br/wp-content/themes/cashforce/assets/images/logo-cashforce.svg
        "
        alt="Cashforce logo"
        class="px-3"
        />
    </a>
    <a href="/nfs" class="nf-button-mob d-flex align-items-center">
      <i class="fa m-2"></i>
      Notas fiscais
    </a>
  </nav>
</template>

<script>
export default {
	name: 'MobileNav',
}
</script>

<style>
  .nav-mob {
    align-items: center;
    display: flex;
    height: 60px;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    background-color: #FBFDFE;
    box-shadow: inset 0px -10px 10px #f5f7fa;
  }

  .nf-button-mob {
    border-right: 4px solid #00AD8C;
    color: #00AD8C;
    cursor: pointer;
    height: 48px;
    padding-right: 8px;
    text-decoration: none;
  }
</style>
