<template>
  <section class="container">
      <div class="uk-container">
          <vk-grid v-vk-height-match="{ target: '> div > .uk-card' }" class="uk-child-width-1-2@s uk-child-width-1-2@m uk-child-width-1-4@l">
              <div class="uk-placeholder uk-text-center uk-padding-remove-bottom">
                  <div class="uk-visible-toggle">
                      <vk-icon icon="plus-circle" ratio="1.6"></vk-icon><span class="uk-text-large uk-padding-remove-bottom"> new request...</span>
                      <div class="uk-invisible-hover uk-align-bottom uk-margin-small create-icon">
                          <nuxt-link to="/new-request"><vk-icon icon="file" ratio="2" class="uk-padding-small" v-vk-tooltip.bottom="'Document'"></vk-icon></nuxt-link>
                          <vk-icon @click="showNewRequestForm('equipment')" icon="laptop" ratio="2" class="uk-padding-small" v-vk-tooltip.bottom="'Equipment'"></vk-icon>
                          <vk-icon @click="showNewRequestForm('loan')" href="#" icon="credit-card" ratio="2" class="uk-padding-small" v-vk-tooltip.bottom="'Loan'"></vk-icon>
                          <vk-icon @click="showNewRequestForm('leave')" href="#" icon="calendar" ratio="2" class="uk-padding-small" v-vk-tooltip.bottom="'Vacation Leave'"></vk-icon>
                      </div>
                  </div>
              </div>
              <RequestCard v-for="(item, index) in requests" :key="index" :item=item />
          </vk-grid>
      </div>

      <RequestForm :category="new_request" v-bind:show_new_request_form="show_new_request_form" v-on:close-form="closeForm"/>
  </section>
</template>

<script>
import RequestCard from '~/components/RequestCard.vue'
import RequestForm from '~/components/RequestForm.vue'

export default {
    components: {
        RequestCard,
        RequestForm
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
                }
            ],
            show_new_request_form: false,
            new_request: 'document'
        };
    },
    methods: {
        showNewRequestForm (new_request) {
            this.show_new_request_form = true
            this.new_request = new_request
        },
        closeForm (show_new_request_form) {
           this.show_new_request_form = false;
        }
    }
}
</script>

<style>
</style>
