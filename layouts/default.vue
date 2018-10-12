<template>

    <vk-grid gutter="collapse">
        <div class="layout-sidebar uk-visible@m">
            <div class="title-heading uk-text-center uk-padding-small"><nuxt-link to="/">emquest</nuxt-link></div>
            <vk-nav class="uk-align-left main-nav uk-width-1-1">
                <vk-nav-item href="#" class="uk-width-auto" icon="album" title="REQUESTS"></vk-nav-item>
                <vk-nav-item href="#" icon="users" title="EMPLOYEES"></vk-nav-item>
                <vk-nav-item href="#" icon="settings" title="SETTINGS"></vk-nav-item>
            </vk-nav>

            <div class="box">
                <div class="wave -one"></div>
                <div class="wave -two"></div>
                <div class="wave -three"></div>
                <div class="uk-width-auto user-info">
                    <div class="main-user-info">
                        <img class="uk-border-circle user-info-picture" width="65" height="65" src="~/assets/images/employees/dixie.jpg">
                        <h5 class="uk-card-title uk-margin-remove-top user-info-fullname">{{ fullName }}</h5>
                    </div>
                    <div class="other-user-info">
                        <ul class="uk-list align-center">
                            <li>
                                <vk-icon icon="user" ratio=".7"></vk-icon><span class="info-val"> {{ authUser.company_role }}</span>
                            </li>
                            <li>
                                <vk-icon icon="nut" ratio=".7"></vk-icon><span class="info-val"> {{ authUser.work_setup }}</span>
                            </li>
                            <li>
                                <vk-icon icon="mail" ratio=".7"></vk-icon><span class="info-val"> {{ authUser.email }}</span>
                            </li>
                            <li>
                                <vk-icon icon="receiver" ratio=".7"></vk-icon><span class="info-val"> {{ authUser.contact_numbers }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="uk-width-expand content-container">

            <vk-navbar transparent>
                <vk-icon icon="menu" ratio="1.5" class="uk-margin-small-left uk-hidden@m"></vk-icon>
                <vk-navbar-logo class="title-heading app-title-small uk-hidden@s" slot="center">emquest</vk-navbar-logo>

                <vk-navbar-nav slot="right">
                    <vk-navbar-item>
                        <vk-icon @click="logout" icon="sign-out" title="Log Out" ratio="1.5"></vk-icon>
                    </vk-navbar-item>
                </vk-navbar-nav>
            </vk-navbar>

            <nuxt/>
        </div>
    </vk-grid>

</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment';

export default {
    computed: {
        ...mapGetters(['isAuth', 'authUser']),
        fullName: function() {
            return this.authUser.first_name + ' ' + this.authUser.last_name
        },
       dateHired: function() {
           return moment(this.authUser.date_hired).format("MM/DD/YYYY");
       },
    },
    methods: {
        async logout() {
            await this.$auth.logout();
            this.$router.push('/login')
        },
    },
}
</script>
