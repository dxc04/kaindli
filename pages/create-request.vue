<template>
<section class="container">
    <div class="uk-container uk-width-1-2@l">
        <div class="uk-position-top-left uk-padding-small">
            <nuxt-link to="/">
                <vk-icon icon="chevron-left" href="#" ratio="1.5" class="uk-icon-button"></vk-icon>
            </nuxt-link>
        </div>
        <div class="topview">
            <div class="uk-padding uk-padding-remove-top uk-margin-remove-top">
                <div v-if="!hasSelectedARequestType && !hasInReselect">
                    <h2 class="title-heading">{{ this.current_intro }}</h2>
                    <h4>Start with selecting a request</h4>
                </div>
                <div class="uk-flex-inline">
                    <div class="uk-search uk-search-large" ref="boundary">
                        <input ref="searchRequestType" class="uk-flex-auto uk-search-input title-heading" type="search"
                               placeholder="Select request..." v-model="filter" :disabled="hasSelectedARequestType">
                        <vk-dropdown ref="dropdown_types" mode="click" position="bottom-justify" boundary="boundary"
                                     boundary-align animation="slide-top-small" :duration="500">
                            <vk-nav-dropdown class="uk-nav-primary">
                                <span v-for="(types, category) in filteredRequestTypes">
                                    <vk-nav-item-header :title="category"></vk-nav-item-header>
                                    <vk-nav-item v-for="type in types" :title="type.value" @click="selectRequestType(type)"></vk-nav-item>
                                </span>
                            </vk-nav-dropdown>
                        </vk-dropdown>
                    </div>
                    <vk-icon v-if="hasSelectedARequestType" class="uk-flex-left uk-text-muted" icon="pencil" ratio="1.5" @click="reselectRequestType()"></vk-icon>
                </div>

                <div v-if="hasSelectedARequestType" class="uk-flex uk-margin-medium-top">
                    <request-form :request-type-selected="snakeCase(filter)"></request-form>
                </div>

            </div>
        </div>

        <div class="topview">
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
import { mapGetters} from 'vuex'
import RequestForm from '~/components/requests/RequestForm.vue'

export default {
    middleware: 'auth',
    layout: 'fullview',
    transition: 'slide-right',
    components: {
        RequestForm,
    },
    created: function () {
        let intros = this.newRequestIntro
        this.current_intro =  intros[Math.floor(Math.random() * intros.length)]
    },
    data() {
        return {
            current_intro: null,
            filter: null,
            hasSelectedARequestType: false,
            hasInReselect: false,
            request_types: {
                'document' : [
                    {
                        key: 'certificate_of_employment',
                        value: 'Certificate of Employment'
                    },
                    {
                        key: 'payslip',
                        value: 'Payslip'
                    }
                ],
                'equipment' : [
                    {
                        key: 'equipment_repair',
                        value: 'Equipment Repair'
                    },
                    {
                        key: 'new_equipment',
                        value: 'New Equipment'
                    }
                ],
                'credit' : [
                    {
                        key: 'cash_advance',
                        value: 'Cash Advance'
                    },
                    {
                        key: 'loan',
                        value: 'Loan'
                    }
                ],
                'payment' : [
                    {
                        key: 'word_rendered',
                        value: 'Work Rendered'
                    },
                    {
                        key: 'reimbursement',
                        value: 'Reimbursement'
                    }
                ]
            },
        }
    },
    computed: {
        ...mapGetters(['authUser']),
        newRequestIntro() {
            let current_user = this.authUser.first_name
            return [
                `Hi ${current_user}, what do you want to request today?`,
                "Hello there, it appears you're planning for a new request, tell us what it is.",
                "Good day! Looks like you'll be making a new request. Let us know what you have in mind.",
                `Hello ${current_user}, it's a nice day to hear a new request. What is it about?`
            ]
        },
        filteredRequestTypes: function() {
            if (this.filter) {
                const filter = this.filter.toLowerCase()
                const all_filter_types = {}

                for(let cat in this.request_types) {
                    let types = this.request_types[cat]
                    if (cat.toLowerCase().includes(filter)) {
                        all_filter_types[cat] = types
                    }
                    else {
                        let filter_types = types.filter(function(type) {
                            return type.value.toLowerCase().includes(filter)
                        })

                        if (filter_types.length) {
                            all_filter_types[cat] = filter_types
                        }
                    }
                }
                return all_filter_types
            }
            return this.request_types
        },
    },
    methods: {
        selectRequestType(type) {
            Promise.resolve(this.$refs.dropdown_types.hide())
                .then(new Promise(resolve => setTimeout(resolve, 500)))
                .then(() => {
                    this.filter = type.value
                    this.hasSelectedARequestType = true
                })
        },
        reselectRequestType() {
            this.hasInReselect = true
            this.hasSelectedARequestType = false
            this.filter = ''
            this.$nextTick(() => this.$refs.searchRequestType.click())
        },
        snakeCase(str) {
            const invalidChars = /[^a-zA-Z0-9:]+/g
            return str
                .replace(/([a-z])([A-Z])/g, match => match[0] + '_' + match[1])
                .replace(invalidChars, '_')
                .toLowerCase()
        }
    },
}
</script>

<style>
.uk-search-input {
    font-size: 26px !important;
    height: 35px !important;
}
</style>
