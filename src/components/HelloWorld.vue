<template>
  <div>
    <div class="hello">
      <div class="first" @click="open">1111</div>
      <div class="second">2222</div>
      <div class="third">3333</div>
    </div>
    <mt-datetime-picker
      v-model="form.pickerVisible"
      type="date"
      ref="picker"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleConfirm">
    </mt-datetime-picker>

    <mt-field label="邮箱" state="success" v-model="form.email"></mt-field>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'guoxin',
      form: {
        pickerVisible: new Date(),
        email: '333333'
      }
    }
  },
  watch: {
    name: (val, old) => {
      console.log(val, old, 111)
    },
    'form.email': (val, old) => {
      console.log(val, old, 6666)
    },
    form: {
      handler (val, old) {
        console.log(val, old, 888)
      },
      immediate: true, // 初始化时就执行
      deep: true // 深度监听，对象和数组内容
    }
  },

  mounted () {
    console.log(555)
    this.scopeClose()()
  },
  methods: {
    open () {
      this.scopeClose()()
      this.form = Object.assign({}, this.form, {
        name: 'guoxin'
      })
      this.$refs['picker'].open()
    },
    handleConfirm (val) {
      this.form.email = val
    },
    scopeClose () {
      var a = 100
      a++
      function f () {
        console.log(a)``
      }
      return f
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  display: flex;
  justify-content: space-between;
  font-size: 40px;
  div {
    flex: 1;
  }
}
</style>
