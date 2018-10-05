<template>
  <Layout title="123">
    <transition name="fade" mode="out-in">
      <v-app id="vapp">
        <router-view>
        </router-view>
      </v-app>
    </transition>
  </Layout>
</template>

<script type="ts">
  import clientRender from 'client';
  import router from 'component/app/router';
  import Layout from 'component/layout/app/index.ts';
  import serverRender from 'server';
  import store from './store/app';
  import {
    sync
  } from 'vuex-router-sync';
  sync(store, router);
  export default {
    router,
    store
  }
</script>
