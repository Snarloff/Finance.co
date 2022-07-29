<template>
  <div class="layout-wrapper layout-content-navbar">
    <div class="layout-container">

      <!-- Menu -->
      <Menu />
      <!-- / Menu -->

      <!-- Layout container -->
      <div class="layout-page">

        <!-- Navbar -->
        <Navbar />
        <!-- / Navbar -->

        <!-- Content wrapper -->
        <div class="content-wrapper">

          <!-- Content -->
          <Nuxt />
          <!-- / Content -->

          <!-- Footer -->
          <Footer />
          <!-- / Footer -->

          <div class="content-backdrop fade"></div>
        </div>
        <!-- Content wrapper -->
      </div>
      <!-- / Layout page -->
    </div>

    <!-- Overlay -->
    <div class="layout-overlay layout-menu-toggle"></div>
  </div>
</template>
<!-- 
<script>
export default {
  head: {
    script: [
      { src: '/vendor/js/helpers.js', body: false },
      { src: '/js/config.js', body: false },
      { src: '/vendor/libs/jquery/jquery.js', body: true },
      { src: '/vendor/libs/popper/popper.js', body: true },
      { src: '/vendor/js/bootstrap.js', body: true },
      { src: '/vendor/libs/perfect-scrollbar/perfect-scrollbar.js', body: true },
      { src: '/vendor/js/menu.js', body: true, },
      { src: '/js/main.js', body: true },
      { src: '/js/dashboards-analytics.js', body: true },
    ]
  }
}
</script> -->

<style src="@/assets/vendor/css/core.css">
</style>
<style src="@/assets/vendor/css/theme-default.css">
</style>
<style src="@/assets/css/demo.css">
</style>
