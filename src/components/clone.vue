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
    // 深拷贝
    console.time('clone');
    let b = this.clone(a);
    console.timeEnd('clone');
    a[1] = 99;
    console.log(b, 999, a)

    let c = [2, 5, [4, 6, 8], 9];
    // 两层结构，rest没有深拷贝
    let d = [...c];

    // 两层结构的对象或者数组，都可以用json来深拷贝
    let e = JSON.parse(JSON.stringify(c));

    c[2][2] = 7;
    console.log(c, 111, d, 222, e)
  },

  methods: {
    // 深拷贝，一层，多层情况都可以
    clone(source) {
      let target = Array.isArray(source) ? [] : {};

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
