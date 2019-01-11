<template>
  <div>
    <mt-button @click="changeValue($event)" type="primary">children1</mt-button>
    <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
    <grandSon v-bind="$props"></grandSon>
  </div>
</template>

<script>
  import grandSon from './grandSon';
  export default {
  data() {
    return {
      name: 'children1'
    }
  },
  props: ['va', 'email', 'id'],
  components: {
    grandSon
  },

  watch: {
    'username': function (val) {
      this.$emit('changeValue', val);
    }
  },
  computed: {
    username() {
      return this.email;

    }
  },
  beforeCreate() {
    console.log(`--${this.name || 'children1'}--beforeCreate`);
  },
  created() {
    console.log(`--${this.name}--created`)
  },
  beforeMount() {
    console.log(`--${this.name}--beforeMount`)
  },
  mounted() {
    // console.log(this, 99999999999999)
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
      this.$emit('changeValue', 'guoxin')
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
