<template>
    <form class="uk-form-stacked">

        <div class="uk-margin">
            <label class="uk-form-label" for="document-request">Request for</label>
            <div class="uk-form-controls">
                <select class="uk-select uk-form-width-large" id="document-request">
                    <option>Certificate of Employment</option>
                    <option>Payslip</option>
                </select>
            </div>
        </div>

        <div class="uk-margin">
            <label class="uk-form-label" for="number-of-copies">Number of Copies</label>
            <div class="uk-form-controls">
                <input class="uk-input uk-form-width-xsmall" id="number-of-copies" type="number" min="0" value="1">
            </div>
        </div>

        <div class="uk-margin">
            <div class="uk-form-label">Needed by</div>
            <div class="uk-form-controls">
                <no-ssr>
                    <vue-datepicker-local v-model="needed_by" :local="localDatepicker"></vue-datepicker-local>
                </no-ssr>
            </div>
        </div>

    </form>
</template>

<script>
    export default {
        name: 'request-document',
        data() {
            return {
                needed_by: new Date(),    
            }    
        }
    }
</script>
