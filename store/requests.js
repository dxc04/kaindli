import merge from "lodash.merge";
import assign from 'lodash.assign';

export const state = () => ({
  list: [],
  request: {},
});

export const mutations = {
  set(state, request) {
    state.list = request
  },
  add(state, value) {
    merge(state.list, value)
  },
  remove(state, {request}) {
    state.list.filter(c => request.id !== c.id)
  },
  mergeRequests(state, form) {
    assign(state.request, form)
  },
  setRequests(state, form) {
    state.request = form
  }
};

export const actions = {
  async get({commit}) {
    await this.$axios.get(`/request`)
      .then((res) => {
        if (res.status === 200) {
          commit('set', res.data)
        }
      })
  },
  async show({commit}, params) {
    await this.$axios.get(`/request/${params.request_id}`)
      .then((res) => {
        if (res.status === 200) {
          commit('mergeRequest', res.data)
        }
      })
  },
  async set({commit}, requests) {
    await commit('set', requests)
  },
  async form({commit}, form) {
    await commit('mergeRequest', form)
  },
  async add({commit}, request) {
    await commit('add', request)
  },
  create({commit}, params) {
    return this.$axios.post(`/request`, {request: params})
  },
  update({commit}, params) {
    return this.$axios.put(`/request/${params.id}`, {request: params})
  },
  delete({commit}, params) {
    return this.$axios.delete(`/request/${params.id}`)
  }
};
