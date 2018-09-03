import Vue from 'vue'
import Strapi from 'strapi-sdk-javascript/build/main'

const strapi = new Strapi('http://localhost:1337'); // todo move to env

Vue.use(strapi);

export default ({ context }, inject) => {
  inject('strapi', strapi)
}
