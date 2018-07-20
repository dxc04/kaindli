<template>
  <vk-offcanvas-content>
      <vk-offcanvas flipped overlay mode="push" :show.sync="show_new_request_form" class="create-new-form">
          <h3>{{ formTitle }}</h3>
          <vk-offcanvas-close v-on:click="$emit('close-form', false)"></vk-offcanvas-close>
      </vk-offcanvas>
  </vk-offcanvas-content>
</template>

<script>
export default {
    name: 'request-form',
    components: {
    
    },
    props: ['category', 'show_new_request_form'],
    data () {
        return {
        };
    },
    computed: {
        formTitle: function() {
            return 'New ' +  _.startCase(this.category)
        }       
    },
    methods: {
    }
}
</script>
