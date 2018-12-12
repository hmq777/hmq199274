<template>
  <div>
    <mt-field label="邮箱" state="success" v-model="email"></mt-field>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: ''
    }
  },

  created() {
    let a = [1, 4, 2, 3, 2, 5, 0, 8, 6, 7];

    console.time('suanfa');
    this.compareSort(a);
    console.timeEnd('suanfa');
  },

  mounted() {

  },

  methods: {
    // 数组去重
    repeat(a) {
      // let i, arr = [], len = {};
      // eslint-disable-next-line
      let [i, arr, len] = [, [], {}];
      console.log(i, arr, len, 555)
      for(i of a) {
        if(!len[i]) {
          arr.push(i);
          len[i] = 1;
        }
      }
      console.log(arr, 666);
    },

    // 计数排序
    countSort(a) {
      let [max, min, len0] = [a[0], a[0], a.length];
      for(let i = 1; i < len0; i++) {
        if(a[i] > max) {
          max = a[i];
        }
        if(a[i] < min) {
          min = a[i];
        }
      }
      console.log(max, min, 666);

      let len = max - min + 1;
      console.log(len, 222)
      let arr = new Array(len);
      console.log(arr, 44444)

      for(let j = 0; j < len0; j++) {
        console.log(arr[a[j]], 555)
        arr[a[j]] = arr[a[j]] ? arr[a[j]] + 1 : 1;
      }
      console.log(arr, 777)
      let newArr = [];

      for(let k = 0; k < arr.length; k++) {
        for(let l = 0; l < arr[k]; l++ ) {
          newArr.push(k);
        }
      }

      console.log(newArr, 888)
    },

    // 冒泡排序,从小到大
    buddleSort(a) {
      let [i, j, len, tmp] = [0, 0, a.length];
      for(i = 0; i < len - 1; i++) {
        for(j = 0; j < len - i - 1; j++) {
          console.log(222)
          if(a[j] > a[j + 1]) {
            tmp = a[j];
            a[j] = a[j + 1];
            a[j + 1] = tmp;
          }
        }
      }
      console.log(a, 888)
    },

    // 比较排序
    compareSort(a) {
      let [i, j, len, tmp] = [0, 0, a.length];
      for(i = 0; i < len - 1; i++) {
        for(j = len - 1; j > i; j-- ) {
          console.log(2222)
          if(a[j] > a[j - 1]) {
            tmp = a[j];
            a[j] = a[j - 1];
            a[j - 1] = tmp;
          }
        }
      }
      console.log(a, 666)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
