export default {
  createAccount(context, data) {
    return this.$axios.post('/account/register', data)
  }
}