<template>
    <section class="container">
        <div class="uk-container uk-width-1-2@l">
            <div class="uk-position-top-left uk-padding-small">
                <nuxt-link to="/" v-if="!show_new_request_form">
                    <vk-icon icon="chevron-left" href="#" ratio="1.5" class="uk-icon-button"></vk-icon>
                </nuxt-link>
                <vk-icon v-if="show_new_request_form" icon="chevron-left" href="#" ratio="1.5" class="uk-icon-button" @click="backToCreateRequest"></vk-icon>
            </div>
            <div v-if="!show_new_request_form" class="middleview">
                <div class="uk-text-center uk-padding uk-padding-remove-top">
                    <h1 class="title-heading">Create Request</h1>
                </div>
                <vk-grid gutter="medium" id="add-new-request" class="uk-child-width-1-4@l uk-child-width-1-2@s uk-flex-center uk-text-center uk-text-uppercase">
                    <div v-for="(item, index) in request_types" :key="index" @click="showNewRequestForm(item.type)">
                        <vk-icon :icon="item.icon" ratio="1.5"></vk-icon>
                        <div>{{item.label}}</div>
                    </div>
                </vk-grid>
            </div>

            <div v-if="show_new_request_form" class="topview">
                <RequestForm :category="new_request" v-on:close-form="closeForm"/>
                <div class="uk-position-top-right uk-padding-small">
                    <nuxt-link to="/">
                        <vk-icon icon="close" href="#" ratio="1.5" class="uk-icon-button"></vk-icon>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import RequestForm from '~/components/RequestForm.vue'

export default {
    middleware: 'auth',
    components: {
        RequestForm
    },
    layout: 'fullview',
    transition: 'slide-right',
    data() {
        return {
            show_new_request_form: false,
            new_request: 'document',
            request_types: [
                {
                    type: 'document',
                    label: 'Document',
                    icon: 'file'
                },
                {
                    type: 'equipment',
                    label: 'Equipment',
                    icon: 'laptop'
                },
                {
                    type: 'credit',
                    label: 'Credit',
                    icon: 'credit-card'
                },
               // {
               //     type: 'leave',
               //     label: 'Leave',
               //     icon: 'calendar'
               // },
                {
                    type: 'payment',
                    label: 'Payment',
                    icon: 'tag'
                },
                // {
                //     type: 'other',
                //     label: 'Other',
                //     icon: 'tag'
                // },
            ]
        }
    },
    computed: {
    },
    methods: {
        showNewRequestForm (new_request) {
            this.show_new_request_form = true
            this.new_request = new_request
        },
        closeForm () {

        },
        backToCreateRequest() {
            this.show_new_request_form = false
        }
    }
}
</script>
