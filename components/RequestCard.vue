<template>
  <div>
      <vk-card class="request" @click="">
          <div :class="['uk-card-badge', 'uk-label', 'request-type-badge', kebabCase + '-type']">{{ item.category }}</div>
          <div class="uk-margin-top request-main-info">
              <p class="uk-card-title uk-margin-remove-bottom request-title">{{ item.title  }}</p>
              <p class="uk-text-meta uk-margin-remove-top requested-at"><time>{{ item.createdAt }}</time></p>

              <vk-grid gutter="collapse" class="uk-child-width-expand">
                  <div class="uk-width-1-4">
                      <vk-grid class="uk-flex-top ">
                          <div class="uk-width-1-5 uk-padding-remove-right">
                              <vk-icon icon="user"></vk-icon>
                          </div>
                          <div class="uk-width-expand uk-padding-remove-bottom uk-padding-remove-left uk-padding-remove-right">
                              <p id="user-name-abbr" class="request-detail requested-by-detail">{{ abbreviate}}</p>
                          </div>
                      </vk-grid>
                  </div>
                  <div>
                      <vk-grid class="uk-flex-top">
                          <div class="uk-width-1-5">
                              <vk-icon icon="future"></vk-icon>
                          </div>
                          <div class="request-details uk-width-auto uk-padding-remove-bottom">
                              <p class="uk-text-muted uk-text-uppercase uk-margin-remove-bottom request-detail-label">Due Date</p>
                              <p class="uk-margin-remove-top request-detail"><time>{{ neededBy }}</time></p>
                          </div>
                      </vk-grid>
                  </div>
                  <div>
                      <vk-grid class="uk-flex-top">
                          <div class="uk-width-1-5">
                              <vk-icon icon="refresh"></vk-icon>
                          </div>
                          <div class="request-details uk-width-auto uk-padding-remove-bottom">
                              <p class="uk-text-muted uk-text-uppercase uk-margin-remove-bottom request-detail-label">Status</p>
                              <p class="uk-margin-remove-top request-detail uk-text-success">{{ item.status }}</p>
                          </div>
                      </vk-grid>
                  </div>
              </vk-grid>
          </div>
      </vk-card>
    </div>
</template>

<script>

import moment from 'moment';
import kebab_case from 'voca/kebab_case';

export default {
    name: 'RequestCard',
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    computed: {
       abbreviate: function() {
           return this.item.requestor.first_name.charAt() + this.item.requestor.last_name.charAt();
       },
       neededBy: function() {
           return moment(this.item.needed_by).format("MM/DD/YYYY");
       },
       kebabCase: function() {
           return kebab_case(this.item.category);
       }
    }

}
</script>

<style>
</style>
