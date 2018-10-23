<template>
    <div>
        <h1 class="title-heading">{{ formTitle }}</h1>
        <p>
            <RequestDocument v-if="category == 'document'" />
            <RequestEquipment v-else-if="category == 'equipment'" />
            <RequestCredit v-else-if="category == 'credit'" />
            <RequestLeave v-else-if="category == 'leave'" />
            <RequestPayment v-else-if="category == 'payment'" />
        </p>

    </div>
</template>

<script>
import RequestDocument from '~/components/requests/RequestDocument.vue'
import RequestEquipment from '~/components/requests/RequestEquipment.vue'
import RequestCredit from '~/components/requests/RequestCredit.vue'
import RequestLeave from '~/components/requests/RequestLeave.vue'
import RequestPayment from '~/components/requests/RequestPayment.vue'

export default {
    name: 'request-form',
    components: {
        RequestDocument,
        RequestEquipment,
        RequestCredit,
        RequestLeave,
        RequestPayment
    },
    props: ['category'],
    computed: {
        formTitle: function() {
            return  _.startCase(this.category) + ' Request'
        },
    },
    methods: {
        closeForm () {
           this.show_add_modal = false
        },
    }

}
</script>
