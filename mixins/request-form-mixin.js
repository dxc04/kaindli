export default {
    data () {
        return {
            tag_options: {
                tag: '',
                autocompleteItems: [
                    {text: 'Urgent'},
                    {text: 'Important'},
                ],
            },
            request: {
                category: 'Document',
                title: '',
                needed_by: new Date(),
                fields: {},
                notes: '',
                tags: []
            }
        }
    },
    computed: {
        filteredTagOptions: function() {
            return this.tag_options.autocompleteItems.filter(i => new RegExp(this.tag_options.tag, 'i').test(i.text))
        },
    },
    methods: {
        formSubmit: function() {
            this.request.requestor = this.$auth.user

            this.$store.dispatch('requests/create', this.request)
            this.$toast.success('You have successfully added a new request.')
            this.$router.push('/')
        }
    }
}