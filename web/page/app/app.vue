<template>
  <Layout title="part time">
    <v-app>
      <v-card>
        <transition name="fade" mode="out-in">
        <router-view>
        </router-view>
      </transition>
      </v-card>
    </v-app>
  </Layout>
</template>

<script type="ts">
  import clientRender from 'client';
  import router from './router.ts';
  import Layout from 'component/layout/app/index.ts';
  import serverRender from 'server';
  import store from './store';
  import {
    sync
  } from 'vuex-router-sync';
  sync(store, router);
  export default {
    router,
    store
  }
</script>

<style lang="stylus">
@import '~vuetify/src/stylus/main.styl'

@import "./app.styl"
  
</style>
