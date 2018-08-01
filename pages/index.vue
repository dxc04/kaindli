<template>
  <section class="container">
      <div class="uk-container">
          <vk-grid v-vk-height-match="{ target: '> div > .uk-card' }" class="uk-child-width-1-2@s uk-child-width-1-2@m uk-child-width-1-4@l">
              <div id="new-request-placeholder" class="uk-placeholder uk-text-center uk-padding-remove-bottom">
                  <div class="uk-card">
                      <vk-icon icon="plus-circle" ratio="1.2"></vk-icon><span class="uk-text-large"> new request...</span>
                      <div class="uk-margin-small uk-text-muted create-icon">
                          <vk-icon @click="showNewRequestForm('document')" icon="file" ratio="1.2" class="uk-padding-small" v-vk-tooltip.bottom="'Document'"></vk-icon>
                          <vk-icon @click="showNewRequestForm('equipment')" icon="laptop" ratio="1.2" class="uk-padding-small" v-vk-tooltip.bottom="'Equipment'"></vk-icon>
                          <vk-icon @click="showNewRequestForm('credit')" href="#" icon="credit-card" ratio="1.2" class="uk-padding-small" v-vk-tooltip.bottom="'Credit'"></vk-icon>
                          <vk-icon @click="showNewRequestForm('leave')" href="#" icon="calendar" ratio="1.2" class="uk-padding-small" v-vk-tooltip.bottom="'Vacation Leave'"></vk-icon>
                      </div>
                  </div>
              </div>
              <RequestCard v-for="(item, index) in requests" :key="index" :item=item />
          </vk-grid>
      </div>

      <RequestForm :category="new_request" :show_new_request_form="show_new_request_form" v-on:close-form="closeForm"/>
  </section>
</template>

<style>
.content-container {
    background: #f9f9f9 !important;
}
</style>

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
            show_new_request_form: false,
            new_request: 'document',
        };
    },
    methods: {
        showNewRequestForm (new_request) {
            this.show_new_request_form = true
            this.new_request = new_request
        },
        closeForm () {
           this.show_new_request_form = false;
        }
    }
}
</script>
