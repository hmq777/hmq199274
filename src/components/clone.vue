<template>
  <div class="hello">
    <div class="first">1111</div>
    <div class="second">2222</div>
    <div class="third">3333</div>
  </div>
</template>

<script>
  export default {
  data() {
    return {

    }
  },

  mounted() {
    let a = [1, 2, 3, {
      name: 'guoxin',
      value: '6666'
    }, 8, '444', 'gggg'];
    let b = this.clone(a);
    a[1] = 99;
    console.log(b, 999, a)
  },

  methods: {
    // 深拷贝
    clone(source) {
      let target;
      if (Array.isArray(source)) {
        target = [];
      } else {
        target = {};
      }
      for (let i in source) {
        if (typeof source[i] === 'object') {
          target[i] = this.clone(source[i]);
        } else {
          target[i] = source[i];
        }
      }
      return target;
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  display: flex;
  font-size: 40px; /*no*/
  div {
    flex: 1;
  }
}
</style>
