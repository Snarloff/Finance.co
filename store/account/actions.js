export default {
  createAccount(context, data) {
    return this.$axios.post('/account/register', data)
  },
  editAccount(context, data) {
    data = { ...data, id: this.$auth.user.id }
    return this.$axios.post('/account/edit', data)
  },
  uploadAvatar(context, data) {
    return this.$axios.post(`/account/avatar/${this.$auth.user.id}`, data)
  }
}