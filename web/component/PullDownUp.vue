<template>
  <div class="pull-down-up">
    <loadmore :autoFill="false" :top-method="loadTop" @top-status-change="handleTopChange" :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="bottomAllLoaded || allLoaded" ref="loadmore">
      <!-- <ul class="page-loadmore-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="bottomLoading" infinite-scroll-distance="100">
            <li v-for="item in list" class="page-loadmore-listitem" :key="item + 'abc'">{{ item }}</li>
          </ul> -->
      <slot></slot>
      <div slot="top" class="mint-loadmore-top">
        <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
        <span v-show="topStatus === 'loading'"><spinner color="teal" type="triple-bounce"/></span>
      </div>
      <div slot="bottom" class="mint-loadmore-bottom">
        <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
        <span v-show="bottomStatus === 'loading'"><spinner type="triple-bounce" color="teal"/></span>
      </div>
      <div v-show="bottomLoading" class="infinite-loading">
        <spinner type="triple-bounce" color="teal" />
        <div>loading...</div>
      </div>
    </loadmore>
  </div>
</template>

<script>
  import {
    Loadmore,
    Spinner,
    Indicator
  } from 'mint-ui';
  export default {
    components: {
      Loadmore,
      Spinner
    },
    data() {
      return {
        list: [],
        topStatus: '',
        allLoaded: false,
        bottomLoading: false,
        bottomStatus: ''
      }
    },
    props: {
      bottomAllLoaded: Boolean,
      loadTopFunc: Function
    },
    methods: {
      handleTopChange(status) {
        this.topStatus = status;
      },
      async loadTop() {
        this.allLoaded = true
        Indicator.open({
          text: 'loading...',
          spinnerType: 'triple-bounce'
        });
        setTimeout(async() => {
          await this.loadTopFunc()
          this.loadTopEnd()
        }, 200);
      },
      loadTopEnd() {
        this.$refs.loadmore.onTopLoaded();
        Indicator.close()
        this.allLoaded = false
      },
      loadMore() {
        // this.bottomLoading = true;
        // setTimeout(() => {
        //   let last = this.list[this.list.length - 1];
        //   for (let i = 1; i <= 10; i++) this.list.push(last + i);
        //   this.bottomLoading = false;
        // }, 2500);
      },
      handleBottomChange(status) {
        this.bottomStatus = status;
      },
      loadBottom() {
        Indicator.open({
          text: 'loading...',
          spinnerType: 'triple-bounce'
        });
        setTimeout(() => {
          let lastValue = this.list[this.list.length - 1];
          if (lastValue < 40) {
            for (let i = 1; i <= 10; i++) {
              this.list.push(lastValue + i);
            }
          } else {
            // this.allLoaded = true;
          }
          this.loadBottomEnd()
        }, 1500);
      },
      loadBottomEnd() {
        this.$refs.loadmore.onBottomLoaded();
        Indicator.close()
      }
    }
  }
</script>

<style lang="stylus">
.pull-down-up
  height 100%
  overflow scroll
  .mint-loadmore-content
    padding-top 56px
  .mint-loadmore,.mint-loadmore-content
    min-height 300px
  .mint-spinner 
    display: inline-block
    vertical-align: middle
  .mint-loadmore-top span,.mint-loadmore-bottom span
    display: inline-block
    transition: .2s linear
    vertical-align: middle
    &.is-rotate
      transform: rotate(180deg)
  
  .infinite-loading 
    text-align: center
    height: 56px
    line-height: 56px
    div 
      display: inline-block
      vertical-align: middle
      margin-right: 5px
      font-size .8em
      color #8492a6
</style>