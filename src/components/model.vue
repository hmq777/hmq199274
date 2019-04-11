<template>
  <div>
    <mt-field label="邮箱" state="success" v-model="email"></mt-field>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
    TabLists: [
      {
        name: 'guoxin',
        value: '2222'
      }
    ]
    }
  },

  created() {
    let [year, month, day] = ['2018', '12', '18'];
    function ren(a) {
      let ls = a.match(/\w+/g);
      console.log(ls, 888)
       let li = ls.reduce((pre, item, index) => {
         // eslint-disable-next-line
         return index > 1 ? pre + `-${eval(item)}` : `${eval(pre)}-${eval(item)}`;
      })
      return li;
//      let ls;
//      a.replace(/\${(\w+)}/g, function(res, r1) {
//        console.log(r1, 777)
//        // eslint-disable-next-line
//        ls = ls ? ls + `-${eval(r1)}` : `${eval(r1)}`
//       })
//
//      return ls;
    }
    // eslint-disable-next-line
    let str = ren('${year}-${month}-${day}');
    console.log(str, 666)
  },

  mounted() {
    this.obDelete();
    // console.log(this);
  },

  methods: {
    // 对象的删除操作
    obDelete() {
      let a = {
        name: 'guoxin',
        value: 666
      };
      let b = delete a['value'];
      console.log(a, 11, b);
      // {value: 666} 11 true
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
