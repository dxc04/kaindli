<template>
<div class="uk-margin">
    <label class="uk-form-label" :for="selectName">{{ label }}</label>
    <div class="uk-form-controls">
        <select class="uk-select uk-form-width-large" :id="selectName" :value="value" @change="$emit('input', $event.target.value)">
                <option v-for="option in options" :key="option.key" :value="option.key">
                    {{ option.value }}
                </option>
            </select>
    </div>
</div>
</template>

<script>
export default {
    name: 'k-dropdown-select',
    props: {
        name: {
            type: String,
        },
        value: {
            type: String
        },
        label: {
            type: String,
            required: true,
        },
        options: {
            type: Array,
            required: true,
        }
    },
    computed: {
        selectName() {
            return this.name ? this.name + '-select' : this.label + '-select'
        }
    },

}
</script>

<style scoped>

</style>
