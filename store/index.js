export const getters = {
  isAuth(state) {
    return state.auth.loggedIn
  },

  authUser(state) {
    return state.auth.user
  }
}
