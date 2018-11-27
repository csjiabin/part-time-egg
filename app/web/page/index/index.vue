<template>
  <layout description="vue server side render" keywords="egg, vue, webpack, server side render">
    <button @click="emit">emit</button>
    <button @click="msg=[]">clear</button>
    <div v-for="(item,idx) in msg" :key="idx">{{item}}</div>
    <div class="container">
      <div class="row" v-for="item in lists" :key="item.id">
        <div class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1">
          <div class="post-preview">
            <a :href="item.url">
              <h2 class="post-title">
                <a :href="item.url" target="_blank" style="font-size: 26px;">{{item.title}}</a>
              </h2>
              <div class="post-content-preview">{{item.summary}}</div>
            </a>
            <p class="post-meta">Posted by hubcarl on 17-09-24</p>
          </div>
          <hr>
        </div>
      </div>
    </div>
    <div style="text-align:center" v-if="isLoading">
      <img src="../../asset/images/loading.gif">
    </div>
  </layout>
</template>

<style>
  @import "index.css";
</style>

<script type="text/babel">
  import scroll from '../../framework/vue/mixin/scroll.ts'
  export default {
    mixins: [scroll],
    data() {
      return {
        isFinish: false,
        isLoading: false,
        pageIndex: 1,
        pageSize: 10,
        list: [],
        msg: []
      }
    },
    computed: {
      lists() {
        return this.list || [];
      }
    },
    methods: {
      emit() {
        const {
          user
        } = this.query
        this.$socket.emit("message", {
          context: new Date(),
          user,
          receive: user == 'admin' ? 'root' : 'admin',
          roomId: "system"
        })
      },
      async fetch() {
        const {
          data
        } = await this.$request.get(`/list?pageIndex=${this.pageIndex}&pageSize=${this.pageSize}`)
        if (data.list && data.list.length) {
          this.total = data.total;
          this.list = this.list.concat(data.list);
        } else {
          this.isFinish = true;
        }
        this.isLoading = false;
        this.$socket.emit("chat", 'hello world! ' + Math.random())
      },
      loadPage() {
        if (!this.isFinish && !this.isLoading) {
          this.isLoading = true;
          this.pageIndex++;
          setTimeout(() => {
            this.fetch();
          }, 1500);
        }
      }
    },
    sockets: {
      res(msg) {
        this.msg.push(msg)
      }
    },
    mounted() {
      this.loadPage();
      window.addEventListener('scroll', () => {
        if (this.getScrollTop() + this.getWindowHeight() >= this.getScrollHeight() - 200) {　　　　
          this.loadPage();　　
        }
      }, false);
      const {
        user
      } = this.query
      this.$options.sockets[user] = msg => {
        console.log(msg)
      }
      this.$options.sockets['system'] = msg => {
        this.msg.push(`system push msg ${msg.user} send: ${msg.context}`)
        console.log(msg,'system')
      }
    }
  }
</script>

