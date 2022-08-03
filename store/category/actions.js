export default {

  createCategory(context, data) {
    return this.$axios.post('/category/create', data)
  },

  getCategories(context) {
    return this.$axios.get(`/category/index/${this.$auth.user.id}`)
  }

}