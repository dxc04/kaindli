<template>
    <vk-offcanvas-content>
        <vk-icon icon="plus-circle" href="#" ratio="2" class="show_add_request" @click="showAddRequest"></vk-icon>
        <vk-offcanvas class="add-request-container" flipped overlay :show.sync="show_add_request">
            <vk-offcanvas-close  @click="show_add_request = false"></vk-offcanvas-close>
                <div class="title-heading" style="text-align: center;">Create</div>
                <ul id="add-new-request" class="uk-list">
                    <li>
                        <vk-icon-link href icon="copy" ratio="2"></vk-icon-link>
                        <div class="uk-text-uppercase">DOCUMENT</div>
                    </li>
                    <li>
                        <vk-icon-link href icon="laptop" ratio="2"></vk-icon-link>
                        <div class="uk-text-uppercase">EQUIPMENT</div>
                    </li>
                    <li>
                        <vk-icon-link href icon="credit-card" ratio="2"></vk-icon-link>
                        <div class="uk-text-uppercase">LOANS</div>
                    </li>
                    <li class="uk-align-center">
                        <vk-icon-link href icon="calendar" ratio="2"></vk-icon-link>
                        <div class="uk-text-uppercase">VACATION LEAVE</div>
                    </li>
                </ul>
        </vk-offcanvas>
    </vk-offcanvas-content>
</template>
