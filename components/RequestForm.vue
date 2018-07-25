<template>
  <vk-offcanvas-content>
      <vk-offcanvas flipped stuck :show.sync="show_new_request_form" class="create-new-form">
          <h3>{{ formTitle }}</h3>
          <vk-offcanvas-close @click="$emit('close-form', false)"></vk-offcanvas-close>

          <RequestDocument v-if="category == 'document'" />
          <RequestEquipment v-else-if="category == 'equipment'" />
          <RequestLoan v-else-if="category == 'loan'" />
          <RequestLeave v-else-if="category == 'leave'" />

      </vk-offcanvas>
  </vk-offcanvas-content>
</template>

<script>
import RequestDocument from '~/components/requests/RequestDocument.vue'
import RequestEquipment from '~/components/requests/RequestEquipment.vue'
import RequestLoan from '~/components/requests/RequestLoan.vue'
import RequestLeave from '~/components/requests/RequestLeave.vue'

export default {
    name: 'request-form',
    components: {
        RequestDocument,  
        RequestEquipment,  
        RequestLoan,  
        RequestLeave,  
    },
    props: ['category', 'show_new_request_form'],
    computed: {
        formTitle: function() {
            return 'New ' +  _.startCase(this.category)
        },
    },
    methods: {
    }
}
</script>
