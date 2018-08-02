<template>
  <div>
      <vk-offcanvas-content class="uk-hidden@m">
          <vk-offcanvas flipped stuck :show.sync="show_new_request_form" class="create-new-form">
              <h3>{{ formTitle }}</h3>
              <vk-offcanvas-close @click="$emit('close-form', false)"></vk-offcanvas-close>

              <RequestDocument v-if="category == 'document'" />
              <RequestEquipment v-else-if="category == 'equipment'" />
              <RequestLoan v-else-if="category == 'credit'" />
              <RequestLeave v-else-if="category == 'leave'" />

          </vk-offcanvas>
      </vk-offcanvas-content>

      <vk-modal class="uk-visible@l" :show.sync="show_new_request_form" stuck>
          <vk-modal-title slot="header">{{ formTitle }}</vk-modal-title>
          <p>
              <RequestDocument v-if="category == 'document'" />
              <RequestEquipment v-else-if="category == 'equipment'" />
              <RequestLoan v-else-if="category == 'credit'" />
              <RequestLeave v-else-if="category == 'leave'" />
          </p>
          <div slot="footer" class="uk-text-right">
              <vk-button class="uk-margin-small-right" @click="$emit('close-form')">Cancel</vk-button>
              <vk-button type="primary">Save</vk-button>
          </div>
      </vk-modal>
  </div>
</template>

<script>
import RequestDocument from '~/components/requests/RequestDocument.vue'
import RequestEquipment from '~/components/requests/RequestEquipment.vue'
import RequestCredit from '~/components/requests/RequestCredit.vue'
import RequestLeave from '~/components/requests/RequestLeave.vue'

export default {
    name: 'request-form',
    components: {
        RequestDocument,  
        RequestEquipment,  
        RequestCredit,  
        RequestLeave,  
    },
    props: ['category', 'show_new_request_form'],
    computed: {
        formTitle: function() {
            return  _.startCase(this.category) + ' Request'
        },
    },
    methods: {
    }
}
</script>
