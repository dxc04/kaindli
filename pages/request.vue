<template>

</template>
import RequestForm from '~/components/RequestForm.vue'

<script>
    export default {
        name: "request",
        middleware: 'auth',
        components: {
          RequestForm
        },
        layout: 'fullview',
        transition: 'slide-right',
    }
</script>

<style scoped>

</style>
