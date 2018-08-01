<template>
    <div>
    <vk-card class="request">
        <div :class="['uk-card-badge', 'uk-label', 'request-type-badge', item.request_type + '-type']">{{ item.request_type }}</div>
        <div class="uk-margin-top request-main-info">
            <p class="uk-card-title uk-margin-remove-bottom request-title">{{ item.title  }}</p>
            <p class="uk-text-meta uk-margin-remove-top requested-at"><time>{{ item.created_at }}</time></p>

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
                        <div class="uk-width-auto uk-padding-remove-bottom">
                            <p class="uk-text-muted uk-text-uppercase uk-margin-remove-bottom request-detail-label">Due Date</p>
                            <p class="uk-margin-remove-top request-detail"><time>{{ item.due_at }}</time></p>
                        </div>
                    </vk-grid>
                </div>
                <div>
                    <vk-grid class="uk-flex-top">
                        <div class="uk-width-1-5">
                            <vk-icon icon="refresh"></vk-icon>
                        </div>
                        <div class="uk-width-auto uk-padding-remove-bottom">
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
           return this.item.requestor.match(/\b\w/g).join(''); 
        }
    }

} 
</script>

<style>
</style>
