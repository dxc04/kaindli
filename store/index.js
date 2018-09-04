
export const getters = {
    isAuthenticated(state) {
        return state.auth.loggedIn
    },

    authUser(state) {
        return state.auth.user
    }
}
