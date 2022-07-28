export default {
	getWallets(context, data) {
		return this.$axios.get(`/wallet/index/${this.$auth.user.id}`)
	}
}