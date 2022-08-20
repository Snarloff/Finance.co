export default {

  getSpents(context, filter) {
    return this.$axios.get('/spent/index', {
      params: { ...filter }
    })
  },

  createSpent(context, data) {
    return this.$axios.post('/spent/create', data)
  },

  updateSpent(context, data) {
    return this.$axios.put('/spent/edit/', data)
  },

  deleteSpent(context, id) {
    return this.$axios.delete(`/spent/delete/${id}`)
  }

}