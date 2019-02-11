<template>
  <section class="container uk-padding-remove-top">
      <vk-grid gutter="medium" v-vk-height-match="{ target: '> div > .uk-card' }" class="uk-child-width-1-2@s uk-child-width-1-2@m uk-child-width-1-4@l">
          <RequestCard v-for="(item, index) in list" :key="index" :item=item />
      </vk-grid>


      <div class="uk-position-bottom-right uk-position-fixed uk-padding-small">
          <nuxt-link to="/new-request" class="add-button"><vk-icon icon="plus-circle" ratio="3" class="show-add-modal"></vk-icon></nuxt-link>
      </div>

  </section>
</template>

<script>
  import {mapState} from 'vuex';
  import RequestCard from '~/components/RequestCard.vue'

  export default {
      name: 'index',
      layout: 'default',
      middleware: 'auth',
      components: {
          RequestCard,
      },
      async fetch({store}) {    
        await store.dispatch('requests/get')
      },
      data () {
          return {
              show_add_modal: false,
          };
      },
      computed: {
        ...mapState({
          list: state => {
            return state.requests.list
          }
        })
      },
      methods: {
          showAddModal () {
              this.show_add_modal = true
          },
          showNewRequestForm (new_request) {
              this.show_new_request_form = true
              this.new_request = new_request
          },
          closeForm () {
             this.show_add_modal = false
          },
      }
  }
</script>

