<template>
  <div>
    <div class="hello">
      <div class="first" @click="open">1111</div>
      <div class="second">2222</div>
      <div class="third">3333</div>
    </div>
    <mt-field label="邮箱" state="success" v-model="email"></mt-field>
    <mt-datetime-picker
      ref="picker"
      v-model="pickerValue"
      type="date">
    </mt-datetime-picker>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pickerValue: new Date(),
      email: '333333'
    }
  },
  methods: {
    open () {
      this.$refs['picker'].open()
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
