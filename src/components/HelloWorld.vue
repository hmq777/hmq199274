<template>
  <div>
    <div class="hello">
      <div class="first" @click="open">1111</div>
      <div class="second">2222</div>
      <div class="third">3333</div>
    </div>
    <mt-datetime-picker
      v-model="pickerVisible"
      type="date"
      ref="picker"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleConfirm">
    </mt-datetime-picker>

    <mt-field label="邮箱" state="success" v-model="email"></mt-field>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pickerVisible: new Date(),
      email: '333333'
    }
  },
  watch: {
    form: {
      handler (newValue, oldValue) {
        console.log(newValue, 6666)
      }
    }
  },

  methods: {
    open () {
      this.$refs['picker'].open()
    },
    handleConfirm (val) {
      this.email = val
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
