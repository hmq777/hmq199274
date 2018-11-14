<template>
  <div>
    <button @click="goHello">HELLO WORLD</button>
    <children1 :email="value" @changeValue="changeValue"></children1>
    <children2></children2>
  </div>
</template>

<script>
  import children1 from './children1';
  import children2 from './children2';

  export default {
  data() {
    return {
      value: '',
      name: 'parent'
    }
  },

  components: {
    children1,
    children2
  },

  beforeCreate() {
    console.log(`--${this.name}--beforeCreate`);
  },
  created() {
    this.changeValue('111');
    console.log(`--${this.name}--created`)
  },
  beforeMount() {
    this.changeValue('2222');
    console.log(`--${this.name}--beforeMount`)
  },
  mounted() {
    this.$el.addEventListener('click', () => {
      console.log('click' + 66666)
    })
    this.changeValue();
    // this.value = 'ggggg';
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
    goHello() {
      this.$router.push({name: 'HelloWorld'});
    },
    changeValue(val) {
      console.log(val, 88888)
      this.value = val;
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
