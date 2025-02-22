import webpack from 'webpack'

module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'kaindli',
        meta: [{
            charset: 'utf-8'
        },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: 'kaindli is an app which serves as a portal to post and manage requests within an organization.'
            }
        ],
        link: [{
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico'
        }]
    },
    /*
     ** Customize the progress bar color
     */
    loading: {
        color: '#7fd673',
        height: '2px'
    },
    loadingIndicator: {
        name: 'circle',
        color: '#731f7e',
        background: 'white'
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** Run ESLint on save
         */
        extend(config, {
            isDev,
            isClient
        }) {
            if (isDev && process.client) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/,
                    options: {
                        fix: true
                    }
                })
            }
        },
        plugins: [
            new webpack.ProvidePlugin({
                '_': 'lodash'
            })
        ],
        vendor: ['vue-datepicker-local', '@johmun/vue-tags-input', 'strapi-sdk-javascript/build/main']
    },
    css: [
        '@vuikit/theme/dist/vuikit.min.css',
        {
            src: '~assets/css/main.scss',
            lang: 'scss'
        },
    ],
    plugins: [{
        src: '~plugins/vuikit',
        ssr: true
    },
        {
            src: '~plugins/datepicker',
            ssr: false
        },
        '~plugins/vue-tags-input',
        '~plugins/strapi',
        '~plugins/vee-validate',
        '~plugins/mixins'
    ],
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth',
        '@nuxtjs/toast',
    ],
    axios: {
        /* set API_URL environment variable to configure access to the API
         */
        baseURL: process.env.API_URL || 'http://localhost:1337/',
        redirectError: {
            401: '/login',
            404: '/notfound'
        }
    },
    auth: {
        plugins: ['~/plugins/auth.js'],
        strategies: {
            local: {
                endpoints: {
                    login: {
                        url: 'auth/local',
                        method: 'post',
                        propertyName: 'jwt'
                    },
                    user: {
                        url: '/user/me',
                        method: 'get',
                        propertyName: false
                    },
                    logout: false
                }
            }
        }
    },
    toast: {
        position: 'top-right',
        duration: 5000
    }

}
