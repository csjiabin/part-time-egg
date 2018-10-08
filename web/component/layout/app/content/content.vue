<template>
  <div class="main">
    <div class="page-container page-component">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<style>
  @import "content.css";
</style>
<script type="ts">
  export default {
    name:'m-content',
    data(){
      return {

      }
    },
    components: {},
    mounted() {

    }
  };
</script>
