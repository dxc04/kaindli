<template>
    <form class="uk-form-stacked" @submit.prevent="handleSubmit">

        <div class="uk-margin">
            <label class="uk-form-label" for="document-request">Request for</label>
            <div class="uk-form-controls">
                <select class="uk-select uk-form-width-large" id="document-request" v-model="request.fields.document">
                    <option>Certificate of Employment</option>
                    <option>Payslip</option>
                </select>
            </div>
        </div>

        <div class="uk-margin">
            <label class="uk-form-label" for="number-of-copies">Number of Copies</label>
            <div class="uk-form-controls">
                <input class="uk-input uk-form-width-xsmall" id="number-of-copies" type="number" min="0" v-model="request.fields.number_of_copies">
            </div>
        </div>

        <div class="uk-margin">
            <div class="uk-form-label">Needed by</div>
            <div class="uk-form-controls">
                <no-ssr>
                    <vue-datepicker-local v-model="request.needed_by" :local="localDatepicker"></vue-datepicker-local>
                </no-ssr>
            </div>
        </div>

        <div class="uk-margin">
            <div class="uk-form-label">Notes</div>
            <div class="uk-form-controls">
                <textarea class="uk-textarea uk-form-width-large" rows="5" columns="3" v-model="request.notes"></textarea>
            </div>
        </div>

        <div class="uk-margin">
            <div class="uk-form-label">Mark request as</div>
            <div class="uk-form-controls">
                <no-ssr>
                    <vue-tags-input
                        v-model="tag"
                        placeholder="Add tag"
                        :tags="tags"
                        :autocomplete-items="filteredTagOptions"
                        @tags-changed="newTags => tags = newTags">
                    </vue-tags-input>
                </no-ssr>
            </div>
        </div>

        <vk-button class="uk-margin-small-right" @click="$emit('close-form')">Cancel</vk-button>
        <button class="uk-button uk-button-primary" type="submit">Save</button>
    </form>
</template>

<script>

export default {
    name: 'request-document',
    data() {
        return {
            tag: '',
            tags: [],
            autocompleteItems: [
                {text: 'Urgent'},
                {text: 'Important'},
            ],
            request: {
                title: '',
                category: 'Document',
                needed_by: new Date(),
                fields: {
                    document: '',
                    number_of_copies: 1
                },
                notes: '',
                tags: []
            }
        }
    },
    computed: {
        filteredTagOptions() {
            return this.autocompleteItems.filter(i => new RegExp(this.tag, 'i').test(i.text))
        },
    },
    methods: {
        handleSubmit() {
            this.request.title = this.request.fields.document
            this.request.tags = this.tags
            this.request.requestor = this.$auth.user

            this.$store.dispatch('requests/create', this.request)
            this.$toast.success('You have successfully added a request.')
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
</style>
