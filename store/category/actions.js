export default {

  createCategory(context, data) {
    return this.$axios.post('/category/create', data)
  },

  getCategories(context) {
    return this.$axios.get(`/category/index/${this.$auth.user.id}`)
  },

  deleteCategory(context, id) {
    return this.$axios.delete(`/category/delete/${id}`)
  },

  updateCategory(context, data) {
    return this.$axios.put('/category/edit', data)
  }

}