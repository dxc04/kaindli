<template>
    <div class="wrapper fadeInDown">
        <div id="formContent">

          <!-- Icon -->
          <div class="fadeIn first uk-padding">
            <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
          </div>

          <!-- Login Form -->
          <div class="auth-form">
              <form method="post" @submit.prevent="login">
                <input
                      type="email"
                      name="email"
                      v-model="email"
                      class="fadeIn second"
                      placeholder="email"
                >
                <input
                      type="password"
                      name="password"
                      v-model="password"
                      class="fadeIn third"
                      placeholder="password">
                <input type="submit" class="fadeIn fourth" value="Log In">
            </form>
          </div>

          <!-- Remind Passowrd -->
          <div id="formFooter">
            <a class="underlineHover" href="#">Forgot Password?</a>
          </div>

        </div>
    </div>
</template>

<script>
export default {
    layout: 'auth',
    transition: 'slide-right',
    data() {
      return {
        email: 'emquest@emquest.test',
        password: 'emquest',
        error: null
      }
    },
    mounted() {
      if (this.$auth.loggedIn) {
        this.$router.push('/')
      }
    },
    methods: {
      async login() {
        try {
          await this.$auth.loginWith('local', {
            data: {
              identifier: this.email,
              password: this.password
            }
          })
          this.$router.push('/')
        } catch (e) {
            console.log(e);
         // this.error = e.response.data.message
        }
      }
    }
}
</script>
