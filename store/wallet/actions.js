export default {

  getWallets(context, filter = {}) {
    return this.$axios.get(`/wallet/index/${this.$auth.user.id}`, {
      params: { ...filter }
    })
  },

  createWallet(context, data) {
    data = { ...data, accountId: this.$auth.user.id } // Add accountId to data
    return this.$axios.post('/wallet/create', data)
  },

  updateWallet(context, data) {
    return this.$axios.put('/wallet/edit/', data) // Contains the walletId inside data
  },

  deleteWallet(context, id) {
    return this.$axios.delete(`/wallet/delete/${id}`)
  },

}