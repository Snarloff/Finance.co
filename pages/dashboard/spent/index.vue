<template>
  <div class="container-xxl flex-grow-1 container-p-y">

    <div class="row d-flex justify-content-between">

      <Spent :categories="categories" />
      <Category :categories="categories" />

    </div>

  </div>
</template>

<script>
export default {

  middleware: 'auth',

  data() {
    return {
    }
  },

  async asyncData({ store }) {
    const categories = await store.dispatch('category/getCategories')
    return { categories: categories.data.response || [] }
  },

}

</script>