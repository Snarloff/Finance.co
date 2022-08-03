export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn // true or false
  },

  loggedInUser(state) {
    return state.auth.user // object with user info
  }
}