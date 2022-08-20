<template>
  <div class="container-xxl flex-grow-1 container-p-y">
    <Profile />
  </div>
</template>

<script>
export default {

  middleware: 'auth',

  data() {
    return {
    }
  }

}
</script>