<template>
  <form class="uk-form-stacked" @submit.prevent="handleSubmit">
    <div class="uk-margin">
      <label class="uk-form-label">Request for</label>
      <div class="uk-form-controls">
        <select class="uk-select uk-form-width-large" v-model="request.fields.request_for">
          <option>Cash Advance</option>
          <option>Loan</option>
        </select>
      </div>
    </div>

    <div class="uk-margin">
      <label class="uk-form-label">Amount</label>
      <div class="uk-form-controls">
        <input
          class="uk-input uk-form-width-small"
          type="number"
          min="0"
          width="200"
          v-model="request.fields.amount"
        >
      </div>
    </div>

    <div class="uk-margin" v-if="request.fields.request_for == 'Loan'">
      <label class="uk-form-label">Payment Terms</label>
      <div class="uk-form-controls">
        <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
          <label>
            <input
              class="uk-radio"
              type="radio"
              name="payment_terms"
              v-model="request.fields.payment_terms"
            >
            Yearly
          </label>
          <label>
            <input
              class="uk-radio"
              type="radio"
              name="payment_terms"
              v-model="request.fields.payment_terms"
            >
            Semi-Annually
          </label>
          <label>
            <input
              class="uk-radio"
              type="radio"
              name="payment_terms"
              v-model="request.fields.payment_terms"
            >
            Quarterly
          </label>
          <label>
            <input
              class="uk-radio"
              type="radio"
              name="payment_terms"
              v-model="request.fields.payment_terms"
            >
            Specified Date
          </label>
        </div>
      </div>
    </div>
<!--
    <div class="uk-margin">
      <div class="uk-form-label">Needed by</div>
      <div class="uk-form-controls">
        <no-ssr>
          <vue-datepicker-local v-model="request.needed_by" :local="localDatepicker"></vue-datepicker-local>
        </no-ssr>
      </div>
    </div>
-->
    <div class="uk-margin">
      <div class="uk-form-label">Notes</div>
      <div class="uk-form-controls">
        <textarea
          class="uk-textarea uk-form-width-large"
          rows="5"
          columns="3"
          v-model="request.notes"
        ></textarea>
      </div>
    </div>


    <div class="uk-margin">
      <div class="uk-form-label">Mark request as</div>
      <div class="uk-form-controls">
        <no-ssr>
          <vue-tags-input
            v-model="tag_options.tag"
            placeholder="Add tag"
            :tags="request.tags"
            :autocomplete-items="filteredTagOptions"
            @tags-changed="newTags => tags = newTags"
          ></vue-tags-input>
        </no-ssr>
      </div>
    </div>
    <vk-button class="uk-margin-small-right" @click="$emit('close-form')">Cancel</vk-button>
    <button class="uk-button uk-button-primary" type="submit">Save</button>
  </form>
</template>

<script>
import requestMixin from "~/mixins/request-form-mixin.js"

export default {
  name: "request-credit",
  mixins: [requestMixin],
  data() {
    return {
      category: "Credit"
    };
  },
  methods: {
    handleSubmit() {
      this.request.category = this.category;
      this.request.title = this.request.fields.request_for;
      console.log(request.needed_by)
      this.formSubmit();
    }
  }
};
</script>
