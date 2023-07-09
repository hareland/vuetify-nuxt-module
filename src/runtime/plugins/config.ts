import { createVuetify } from 'vuetify'
import { isDev, vuetifyConfiguration } from 'virtual:vuetify-configuration'
import { useNuxtApp } from '#app'

export async function configureVuetify() {
  const nuxtApp = useNuxtApp()
  const vuetifyOptions = vuetifyConfiguration()

  await nuxtApp.hooks.callHook('vuetify:configuration', { isDev, vuetifyOptions })

  const vuetify = createVuetify(vuetifyOptions)

  nuxtApp.vueApp.use(vuetify)

  if (process.client) {
    // eslint-disable-next-line no-console
    isDev && console.log('Vuetify 3 initialized', vuetify)
  }

  return vuetify
}
