<template>

  <div :show.sync="show_new_request_form">
    <h1>{{ formTitle }}</h1>
    <p>
        <RequestDocument v-if="category == 'document'" />
        <RequestEquipment v-else-if="category == 'equipment'" />
        <RequestLoan v-else-if="category == 'credit'" />
        <RequestLeave v-else-if="category == 'leave'" />
    </p>
        <vk-button class="uk-margin-small-right" @click="$emit('close-form')">Cancel</vk-button>
        <vk-button type="primary">Save</vk-button>
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
