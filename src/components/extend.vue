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
    this.esExtend();
  },

  mounted() {

  },

  methods: {
    // call，apply继承
    callExtend() {
      let Parent = function(name) {
        this.name = name;
        this.say = function() {
          console.log(this.name, 555);
        }
      };
      let Children = function(name) {
        // 相当于Parent在这里执行一次
        Parent.call(this, name); // 继承的关键

        this.getName = function () {
          console.log(this.name, 666);
        }
      }
      let p = new Parent('guo');
      let c = new Children('xin');
      p.say(); // guo 555
      c.say(); // xin 555
      c.getName(); // xin 666
    },

    // 对象冒充
    obExtend() {
      let Parent = function (name) {
        this.name = name;
        this.say = function () {
          console.log(this.name, 666);
        }
      }
      let Children = function (name) {
        this.method = Parent;
        this.method(name); // 实现继承的关键
        delete this.method;

        this.getName = function () {
          console.log(this.name, 777);
        }
      }
      let p = new Parent('guo');
      let c = new Children('xin');

      p.say(); // guo 666
      c.say(); // xin 666
      c.getName(); // xin 777
    },

    // 原型链继承
    proExtend() {
      let Parent = function (name) {
        this.name = name;
        this.say = function () {
          console.log(this.name, 555)
        }
      }
      let Children = function (name, age) {
        this.name = name;
        this.age = age;
        this.getName = function () {
          console.log(this.name, this.age, 666)
        }

      };
      Children.prototype = new Parent(); // 继承的关键

      let p = new Parent('guo');
      let c = new Children('xin', 23);

      p.say(); // guo 555
      c.say(); // xin 555
      p.say.call(c); // xin 555
      c.getName(); // xin 23 666
    },

    // es6的extend继承
    esExtend() {
      class P {
        constructor (name, age) {
          this.name = name;
          this.age = age;
          console.log(this, 555)
        }
      }
      class C extends P {
        constructor (name, age, job) {
          // console.log(this, 4444);
          // super之前没有this，使用会报错
          super(name, age); // 继承的关键
          this.job = job;
          console.log(this, 666)
        }
      }
      console.log(C.prototype.__proto__ === P.prototype); // true
      console.log(C.__proto__ === P); // true
      console.log(P.__proto__ === Function.prototype); // true

      let per = new P('guoxin', 22);
      // P{name: "guoxin", age: 22} 555

      let ch = new C('xin', 26, 'ww');
      // C{name: "xin", age: 26, job: "ww"} 555
      // C{name: "xin", age: 26, job: "ww"} 666
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
