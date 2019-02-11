<template>
<div class="uk-margin">
    <label class="uk-form-label">{{ label }}</label>
    <div class="uk-form-controls">
        <input
          class="uk-input uk-form-width-small"
          type="text"
          width="400"
          :id="inputTextName"
          :value="value"
          @input="$emit('input', $event.target.value)"
        >
      </div>
    </div>
</template>

<script>
export default {
    name: 'k-text-input',
    props: {
        name: String,
        label: {
            type: String,
            required: true,
        },
        value: String,
    },
    computed: {
        inputTextName() {
            return this.name ? this.name + '-text-input' : this.label + '-text-input'
        }
    },
}
</script>

<style scoped>

</style>
