<template>
    <form class="uk-form-stacked">

        <div class="uk-margin">
            <label class="uk-form-label" for="">Request for</label>
            <div class="uk-form-controls">
                <select class="uk-select uk-form-width-large" id="">
                    <option>New</option>
                    <option>Repair</option>
                </select>
            </div>
        </div>

        <div class="uk-margin">
            <label class="uk-form-label" for="">Equipment</label>
            <div class="uk-form-controls">
                 <input class="uk-input uk-form-width-large" type="text">
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

        <div class="uk-margin">
            <div class="uk-form-label">Notes</div>
            <div class="uk-form-controls">
                <textarea class="uk-textarea uk-form-width-large" rows="5" columns="3"></textarea>
            </div>
        </div> 

        <div class="uk-margin">
            <div class="uk-form-label">Mark request as</div>
            <div class="uk-form-controls">
                <no-ssr>
                    <vue-tags-input
                        v-model="tag"
                        placeholder="Add tag"
                        :tags="tags"
                        :autocomplete-items="filteredTagOptions"
                        @tags-changed="newTags => tags = newTags">
                    </vue-tags-input>
                </no-ssr>
            </div>
        </div> 

    </form>
</template>

<script>
export default {
}
</script>
