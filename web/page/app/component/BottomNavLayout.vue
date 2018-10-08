<template>
  <v-card flat height="calc(100vh - 8px)">
    <div class="pb-5" style="height:100%;">
      <router-view/>
    </div>
    <v-bottom-nav :active.sync="bottomNav" :value="true" fixed color="white">
      <v-btn color="teal" flat value="recent">
        <span>Jobs</span>
        <v-icon>history</v-icon>
      </v-btn>
      <v-btn color="teal" flat value="favorites">
        <span>Favorites</span>
        <v-icon>favorite</v-icon>
      </v-btn>
      <v-btn color="teal" flat value="nearby">
        <span>Nearby</span>
        <v-icon>place</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>
</template>

<script>
  export default {
    data() {
      return {
        bottomNav: 'recent'
      }
    }
  }
</script>
