export default {
  getWallets(context, filter = {}) {
    return this.$axios.get(`/wallet/index/${this.$auth.user.id}`, {
      params: { ...filter }
    })
  },

  createWallet(context, data) {
  	data = { ...data, accountId: this.$auth.user.id }
  	return this.$axios.post('/wallet/create', data )
  },

  deleteWallet(context, id) {
  	return this.$axios.delete(`/wallet/delete/${id}`)
  }
}