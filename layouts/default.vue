<template>

    <vk-grid id="app-grid" v-cloak>
        <div class="layout-sidebar uk-visible@m" uk-height-viewport="expand: true">
            <div class="title-heading app-title-web">emquest</div>
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
                <vk-icon icon="menu" ratio="1.5" class="uk-margin-small-left uk-hidden@m" @click="defaultNav"></vk-icon>

                <vk-navbar-logo class="title-heading app-title-small uk-hidden@s" slot="center">emquest</vk-navbar-logo>

                <vk-navbar-nav slot="right">
                    <vk-navbar-item>
                        <vk-icon icon="plus-circle" href="#" ratio="2" class="show_add_request" @click="showAddRequest"></vk-icon>
                    </vk-navbar-item>
                </vk-navbar-nav>
            </vk-navbar>

            <nuxt class="uk-height-max-large"/>

            <vk-offcanvas-content>
                <vk-offcanvas overlay :show.sync="show">
                    <vk-offcanvas-close @click="show = false"></vk-offcanvas-close>
                    <vk-nav class="uk-margin-auto-vertical uk-align-left">
                        <vk-nav-item-header title="Request"></vk-nav-item-header>
                        <vk-nav-item href="#" icon="copy" title="Documents"></vk-nav-item>
                        <vk-nav-item href="#" icon="laptop" title="Equipments"></vk-nav-item>
                        <vk-nav-item href="#" icon="calendar" title="Vacation Leave"></vk-nav-item>
                        <vk-nav-item href="#" icon="credit-card" title="Loans"></vk-nav-item>

                        <vk-nav-item-header title="Employees"></vk-nav-item-header>
                        <vk-nav-item href="#" icon="bolt" title="Overview"></vk-nav-item>
                        <vk-nav-item href="#" icon="thumbnails" title="Manage"></vk-nav-item>
                    </vk-nav>
                </vk-offcanvas>
            </vk-offcanvas-content>

            <vk-offcanvas-content>
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
        </div>
    </vk-grid>
    
</template>

<style>
</style>

<script>
  export default {
      data () {
          return {
              show: false,
              show_add_request: false
          }
      },
      methods: {
          defaultNav () {
              this.show = !this.show
          },
          showAddRequest () {
              this.show_add_request = !this.show_add_request
          }
      }
  }
</script>
