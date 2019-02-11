<template>
<div class="uk-margin">
    <label class="uk-form-label">{{ label }}</label>
    <div class="uk-form-controls">
        <input
          class="uk-input uk-form-width-small"
          type="text"
          width="200"
          :min="min"
          :max="max"
          :id="inputTextName"
          :value="value"
          @input="$emit('change', $event.target.value)"
        >
      </div>
    </div>
</template>

<script>
export default {
    name: 'k-number-input',
    props: {
        name: String,
        label: {
            type: String,
            required: true,
        },
        value: Number,
        min: Number,
        max: Number,
    },
    computed: {
        inputTextName() {
            return this.name ? this.name + '-number-input' : this.label + '-number-input'
        }
    },
}
</script>

<style scoped>

</style>
