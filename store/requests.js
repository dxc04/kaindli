import merge from "lodash.merge";
import assign from 'lodash.assign';

export const state = () => ({
    list: [],
    request: {},
});

export const getters = {
    tag_options: (state, getters) => {
        return {
            tag: '',
            autocompleteItems: [
                {text: 'Urgent'},
                {text: 'Important'},
            ],
        }
    },
    request_defaults: (state, getters) => {
        return {
            title: '',
            category: '',
            needed_by: new Date(),
            fields: {},
            notes: '',
            tags: []
        }
    }
}

export const mutations = {
  set(state, requests) {
    state.list = requests
  },
  add(state, item) {
    state.list.push(item)
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
  create({commit, dispatch, state}, params) {
      this.$axios.post(`/request`, params)
        .then((response) => {
            dispatch('add', response.data)
        })
  },
  update({commit}, params) {
    return this.$axios.put(`/request/${params.id}`, {request: params})
  },
  delete({commit}, params) {
    return this.$axios.delete(`/request/${params.id}`)
  }
};
