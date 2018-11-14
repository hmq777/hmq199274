<template>
  <div>
    <mt-button @click="changeValue($event)" type="primary">emit值</mt-button>
    <mt-field label="邮箱" state="success" v-model="email"></mt-field>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'children1'
    }
  },
  props: {
    email: {
      type: String,
      default: '123456'
    }
  },

  beforeCreate() {
    console.log(`--${this.name}--beforeCreate`);
  },
  created() {
    console.log(`--${this.name}--created`)
  },
  beforeMount() {
    console.log(`--${this.name}--beforeMount`)
  },
  mounted() {
    console.log(`--${this.name}--mounted`)
  },
  beforeUpdate() {
    console.log(`--${this.name}--beforeUpdate`)
  },
  updated() {
    console.log(`--${this.name}--updated`)
  },
  beforeDestroy() {
    console.log(`--${this.name}--beforeDestroy`)
  },
  destroyed() {
    console.log(`--${this.name}--destroyed`)
  },
  methods: {
    changeValue(e) {
      // console.log(22222, e);
      // 改变父组件的值
      this.$emit('changeValue', '44454545454')
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
