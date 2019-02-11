<template>
<div class="uk-margin">
    <label class="uk-form-label">{{ label }}</label>
    <div class="uk-form-controls">
        <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
            <label v-for="option in options" :key="option.key">
            <input
              class="uk-radio"
              type="checkbox"
              v-bind:checked="checked"
              v-on:change="$emit('change', $event.target.checked)"
            >
            {{ option.value }}
          </label>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'k-checkbox',
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        label: {
            type: String,
            required: true,
        },
        options: {
            type: Array,
            required: true,
        }
    },
}
</script>

<style scoped>

</style>
