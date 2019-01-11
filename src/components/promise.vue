<template>
  <div>
    <div class="hello">
      <div class="first">同步主代码</div>
      <div class="second">setTimeout</div>
      <div class="third">Promise</div>
      <div class="third">Async await执行顺序</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },

  mounted () {
    async function async1() {
      console.log('async1 start')
      await async2();
      console.log('async1 end')
    }
    async function async2() {
      console.log('async2')
    }
    console.log('script start')
    async1();

    setTimeout(function() {
        console.log('setTimeout')
      }, 0)

    new Promise(function(resolve) {
        console.log('promise1')
        resolve('666');
      }).then(function(res) {
        console.log('promise2', res)
        return '222';
    }).then((res) => {
      console.log('promise3', res) // promise3 222
    })

    console.log('script end')
  },

  created () {

  },

  methods: {

  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  display: flex;
  font-size: 40px;
  div {
    flex: 1;
  }
}
</style>
