<template>
    <form class="uk-form-stacked" @submit.prevent="handleSubmit">

        <div class="uk-margin">
            <label class="uk-form-label" for="equipment-request">Request for</label>
            <div class="uk-form-controls">
                <select class="uk-select uk-form-width-large" id="equipment-request" v-model="request.fields.request_for">
                    <option>New</option>
                    <option>Repair</option>
                </select>
            </div>
        </div>

        <div class="uk-margin">
            <label class="uk-form-label" for="">Equipment</label>
            <div class="uk-form-controls">
                 <input class="uk-input uk-form-width-large" type="text" v-model="request.fields.equipment">
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
                            v-model="tag_options.tag"
                            placeholder="Add tag"
                            :tags="request.tags"
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
import { mapState, mapGetters } from 'vuex';

export default {
    name: 'request-equipment',
    data () {
        return {
            category: 'Equipment',
        }
    },
    computed: {
        ...mapGetters({
            request: 'requests/request_defaults',
            tag_options: 'requests/tag_options'
        }),
        filteredTagOptions() {
            return this.tag_options.autocompleteItems.filter(i => new RegExp(this.tag_options.tag, 'i').test(i.text))
        },
    },
    methods: {
        handleSubmit() {
            this.request.category = this.category
            this.request.title = this.request.fields.request_for + ' ' + this.request.fields.equipment
            this.request.requestor = this.$auth.user

            this.$store.dispatch('requests/create', this.request)
            this.$toast.success('You have successfully added a new request.')
            this.$router.push('/')
        }
    }
}
</script>
