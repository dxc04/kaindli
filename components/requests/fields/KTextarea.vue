<template>
    <div class="uk-margin">
      <div class="uk-form-label">Notes</div>
      <div class="uk-form-controls">
        <textarea
          class="uk-textarea uk-form-width-large"
          rows="5"
          columns="3"
          :id="textareaName"
          :value="value"
          @input="$emit('input', $event.target.value)"
        ></textarea>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'k-textarea',
        props: {
            name: String,
            label: {
                type: String,
                required: true,
            },
            value: String,
        },
        computed: {
            textareaName() {
                return this.name ? this.name + '-textarea' : this.label + '-textarea'
            }
        },
    }
</script>

<style scoped>

</style>