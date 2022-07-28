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

<style src="@/assets/vendor/css/core.css"></style>
<style src="@/assets/vendor/css/theme-default.css"></style>
<style src="@/assets/css/demo.css"></style>
