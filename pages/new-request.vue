<template>
<section class="container">
    <div class="uk-container uk-width-1-2@l fullview">
        <div class="uk-position-top-left uk-padding-small">
            <nuxt-link to="/" v-if="!show_new_request_form">
                <vk-icon icon="chevron-left" href="#" ratio="1.5" class="uk-icon-button"></vk-icon>
            </nuxt-link>
            <vk-icon v-if="show_new_request_form" icon="chevron-left" href="#" ratio="1.5" class="uk-icon-button" @click="backToCreateRequest"></vk-icon>
        </div>
        <div v-if="!show_new_request_form">
            <div class="uk-text-center uk-padding uk-padding-remove-top">
                <h1 class="title-heading">Create Request</h1>
            </div>
            <vk-grid gutter="medium" id="add-new-request" class="uk-child-width-1-4@l uk-child-width-1-2@s uk-flex-center uk-text-center uk-text-uppercase">
                <div @click="showNewRequestForm('document')">
                    <vk-icon icon="file" ratio="1.5"></vk-icon>
                    <div>Document</div>
                </div>
                <div @click="showNewRequestForm('equipment')">
                    <vk-icon icon="laptop" ratio="1.5"></vk-icon>
                    <div>Equipment</div>
                </div>
                <div @click="showNewRequestForm('credit')">
                    <vk-icon icon="credit-card" ratio="1.5"></vk-icon>
                    <div>Credit</div>
                </div>
                <div @click="showNewRequestForm('leave')">
                    <vk-icon icon="calendar" ratio="1.5"></vk-icon>
                    <div>Leave</div>
                </div>
            </vk-grid>
        </div>
        
        <div v-if="show_new_request_form">
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
    components: {
        RequestForm
    },
    layout: 'fullview',
    transition: 'slide-right',
    data() {
        return {
            show_new_request_form: false,
            new_request: 'document',
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
           this.show_add_modal = false
        },
        backToCreateRequest() {
            this.show_new_request_form = false
        }
    }
}
</script>
