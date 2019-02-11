<template>
    <form class="uk-form-stacked" @submit.prevent="handleSubmit">

        <div v-for="field in selectedRequestTypeFields.fields">
            <k-checkbox v-if="field.type == 'checkbox'" :label="field.label" :options="field.options" v-model="field.value"></k-checkbox>
            <k-radio v-if="field.type == 'radio'" :label="field.label" :options="field.options" v-model="field.value"></k-radio>
            <k-dropdown-select v-if="field.type == 'dropdown-select'" :label="field.label" :options="field.options" v-model="field.value"></k-dropdown-select>
            <k-number-input v-if="field.type == 'number-input'" :label="field.label" v-model="field.value"></k-number-input>
            <k-text-input v-if="field.type == 'text-input'" :label="field.label" v-model="field.value"></k-text-input>
            <k-textarea v-if="field.type == 'textarea'" :label="field.label" v-model="field.value"></k-textarea>
            <div v-if="field.type == 'datepicker'" class="uk-margin">
                <div class="uk-form-label">{{ field.label }}</div>
                <div class="uk-form-controls">
                    <no-ssr>
                        <vue-datepicker-local v-model="field.value" :local="localDatepicker"></vue-datepicker-local>
                    </no-ssr>
                </div>
            </div>
            <div v-if="field.type == 'tags'" class="uk-margin">
                <div class="uk-form-label">{{ field.label }}</div>
                <div class="uk-form-controls">
                    <no-ssr>
                        <vue-tags-input
                            v-model="tag_options.tag"
                            placeholder="Add tag"
                            :tags="field.tags"
                            :autocomplete-items="filteredTagOptions"
                            @tags-changed="newTags => tags = newTags"
                        ></vue-tags-input>
                    </no-ssr>
                </div>
            </div>
        </div>

        <vk-button class="uk-margin-small-right" @click="$emit('close-form')">Cancel</vk-button>
        <button class="uk-button uk-button-primary" type="submit">Save</button>
    </form>
</template>

<script>
    import requestMixin from '~/mixins/request-form-mixin.js'
    import KCheckbox from '~/components/requests/fields/KCheckbox'
    import KDropdownSelect from '~/components/requests/fields/KDropdownSelect'
    import KNumberInput from '~/components/requests/fields/KNumberInput'
    import KRadio from '~/components/requests/fields/KRadio'
    import KTextarea from '~/components/requests/fields/KTextarea'
    import KTextInput from '~/components/requests/fields/KTextInput'

    export default {
        name: 'request-form',
        components: {
            KCheckbox,
            KDropdownSelect,
            KNumberInput,
            KRadio,
            KTextarea,
            KTextInput
        },
        mixins: [requestMixin],
        props: {
            requestTypeSelected: {
                type: String
            },
        },
        data() {
            return {
                requestFields: [
                    {
                        type: 'cash_advance',
                        fields: [
                            {
                                type: 'tags',
                                label: 'Recipient',
                                tags: [],
                            },
                            {
                                type: 'datepicker',
                                label: 'Needed by',
                                value: null,

                            },
                            {
                                type: 'number-input',
                                label: 'Amount',
                                default: null
                            },
                            {
                                type: 'textarea',
                                label: 'Notes',
                                default: null,
                            },
                            {
                                type: 'tags',
                                label: 'Tag as',
                                tags: []
                            },
                        ]
                    },

                ]
            }
        },
        computed: {
            selectedRequestTypeFields() {
                let s = this.requestFields.find( request => request.type == this.requestTypeSelected )
                console.log(this.requestTypeSelected)
                return s
            }
        },
    }
</script>

<style scoped>

</style>