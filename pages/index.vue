<template>
  <section class="container uk-padding-remove-top">
      <vk-grid gutter="medium" v-vk-height-match="{ target: '> div > .uk-card' }" class="uk-child-width-1-2@s uk-child-width-1-2@m uk-child-width-1-4@l">
          <RequestCard v-for="(item, index) in requests" :key="index" :item=item />
      </vk-grid>


      <div class="uk-position-bottom-right uk-padding-small">
          <nuxt-link to="/new-request" class="add-button"><vk-icon icon="plus-circle" ratio="2" class="show-add-modal"></vk-icon></nuxt-link>
      </div>

  </section>
</template>

<style>
.content-container {
    background: #f9f9f9 !important;
}
</style>

<script>
import RequestCard from '~/components/RequestCard.vue'

export default {
    layout: 'default',
    components: {
        RequestCard,
    },
    data () {
        return {
            requests: [
                {
                    request_type: 'document',
                    title: 'Certificate of Employment',
                    context: '',
                    created_at: 'July 04, 2018',
                    requestor: 'Dixie Atay',
                    due_at: 'July 28, 2018',
                    status: 'In Progress'
                },
                {
                    request_type: 'equipment',
                    title: 'Keyboard',
                    context: '',
                    created_at: 'July 04, 2018',
                    requestor: 'Dixie Atay',
                    due_at: 'July 28, 2018',
                    status: 'In Progress'
                },
                {
                    request_type: 'credit',
                    title: 'Cash Advance',
                    context: '',
                    created_at: 'July 04, 2018',
                    requestor: 'Dixie Atay',
                    due_at: 'July 28, 2018',
                    status: 'Open'
                },
                {
                    request_type: 'credit',
                    title: 'Cash Advance',
                    context: '',
                    created_at: 'July 04, 2018',
                    requestor: 'Dixie Atay',
                    due_at: 'July 28, 2018',
                    status: 'Open'
                },
            ],
            show_add_modal: false,
        };
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
