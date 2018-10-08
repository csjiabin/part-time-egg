<template>
  <div style="height:100%;">
    <v-toolbar fixed height="56">
      <v-toolbar-title>Nice</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>
    <pull-down-up :bottom-all-loaded="!jobList.hasNextPage" :loadTopFunc="getjobList">
      {{$store.state.csrf}}
      <v-container grid-list-md class="px-2 py-2">
        <v-layout row wrap>
          <v-flex xs12 v-for="item in jobList.list" :key="item.id">
            <v-card ripple>
              <v-card-text>
                <h4>{{item.recruitment_positon}}</h4>
                <div v-if="item.work_address">{{item.work_address}}</div>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </pull-down-up>
  </div>
</template>

<script>
  import PullDownUp from 'component/PullDownUp'
  export default {
    components: {
      PullDownUp
    },
    computed: {
      isLoading() {
        return false
      },
      jobList() {
        return this.$store.state.jobList || {
          list: [],
          hasNextPage: false
        };
      }
    },
    preFetch({
      state,
      dispatch,
      commit
    }) {
      return Promise.all([
        dispatch('FETCH_JOBS_LIST')
      ])
    },
    methods: {
      async getjobList() {
        await this.$store.dispatch('FETCH_JOBS_LIST')
      }
    },
    async beforeMount() {
      Promise.all([
        this.$store.dispatch('FETCH_JOBS_LIST')
      ])
    },
  }
</script>
