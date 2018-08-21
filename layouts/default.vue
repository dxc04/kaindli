<template>

    <vk-grid gutter="collapse">
        <div class="layout-sidebar uk-visible@m">
            <div class="title-heading uk-text-center uk-padding-small"><nuxt-link to="/">emquest</nuxt-link></div>
            <vk-nav class="uk-align-left main-nav uk-width-1-1">
                <vk-nav-item href="#" class="uk-width-auto" icon="album" title="REQUESTS"></vk-nav-item>
                <vk-nav-item href="#" icon="users" title="EMPLOYEES"></vk-nav-item>
                <vk-nav-item href="#" icon="cog" title="SETTINGS"></vk-nav-item>
            </vk-nav>

            <div class="box">
                <div class="wave -one"></div>
                <div class="wave -two"></div>
                <div class="wave -three"></div>
                <div class="uk-width-auto user-info">
                    <img class="uk-border-circle" width="90" height="90" src="~/assets/images/employees/dixie.jpg">
                     <h4 class="uk-card-title uk-margin-remove-bottom">Dixie Atay</h4>
                <p class="uk-text-meta uk-margin-remove-top">Web Developer</p>
                </div>
            </div>
        </div>

        <div class="uk-width-expand content-container">
 
            <vk-navbar transparent>
                <vk-icon icon="menu" ratio="1.5" class="uk-margin-small-left uk-hidden@m"></vk-icon>
                <vk-navbar-logo class="title-heading app-title-small uk-hidden@s" slot="center">emquest</vk-navbar-logo>

                <vk-navbar-nav slot="right">
                    <vk-navbar-item>
                    </vk-navbar-item>
                </vk-navbar-nav>
            </vk-navbar>

            <nuxt/>
        </div>
    </vk-grid>
    
</template>
