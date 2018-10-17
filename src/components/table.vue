<template>
  <div class="allotdetal">
    <button @click="add">添加分配</button>
    <!-- <el-button type="success" size="mini" plain @click="submit">保存更改</el-button> -->
    <table class="tablelist">
      <thead>
      <tr>
        <th>编号</th>
        <th>部门</th>
        <th>费用类型</th>
        <th>分配费用</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in msg" :key="item.id" :class="[bgstyle]">
        <td>{{index + 1}}</td>
        <td>
          <input type="text" v-model="item.departid" v-if="edi===index">
          <span v-else>{{item.departid}}</span>
        </td>
        <td>
          <input type="text" v-model="item.moneytype" v-if="edi===index">
          <span v-else>{{item.moneytype}}</span>
        </td>
        <td>
          <input type="text" v-model="item.money" v-if="edi===index">
          <span v-else>￥{{item.money}}</span>
        </td>
        <td>
          <button
            type="warning"
            size="mini"
            v-show="disappear"
            @click="change(index)">修改
          </button>
          <button
            type="success"
            size="mini"
            @click="save(index)">确定
          </button>
          <button
            type="info"
            size="mini"
            v-show="disappear"
            @click="del(index)">删除
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        edi: '',
        disappear: true,
        bgstyle: 'bgwhite',
        msg: [
          {departid: '研发一部', moneytype: '员工关系费，团建费', money: 1000},
          {departid: '研发二部', moneytype: '团建费', money: 1780},
          {departid: '研发三部', moneytype: '交通费', money: 2345},
          {departid: '研发四部', moneytype: '出差补贴', money: 2456},
          {departid: '卓越中心', moneytype: '过节费', money: 789},
        ]
      }
    },
    methods: {
      // 更改数据
      change: function (index) {
        this.edi = index
        this.disappear = false
        this.bgstyle = 'bgpink'
      },
      //  删除数据
      del: function (index) {
        this.msg.splice(index, 1)
      },
      //  保存数据
      save: function (index) {
        this.edi = !index
        this.disappear = !this.disappear
        this.bgstyle = 'bgwhite'
      },
      //  添加数据
      add: function () {
        this.msg.push({departid: '', moneytype: '', money: ''});
        this.edi = this.msg.length - 1;
      },
      //  //  提交数据
      //   submit:function () {
      //     this.edi='';
      //     console.log(JSON.stringify(this.msg))
      //   }
    }
  }
</script>

<style lang="scss">
  .allotdetal {
    width: 100%;
    overflow: auto;
    .tablelist {
      width: 100%;
      margin-top: 8px;
      thead {
        width: 100%;
        tr {
          background-color: #409EFF;
          color: #fff;
          height: 40px;
          text-align: center;
          font-size: 13px;
        }
      }
      tbody {
        overflow: hidden;
        .bgwhite {
          border-bottom: 1px solid #d9d7cb;
          height: 45px;
          text-align: center;
          font-size: 13px;
          color: #999;

        }
        // 点击更改后的样式
        .bgpink {
          background-color: #FFFBDA;
          height: 45px;
          text-align: center;
          font-size: 13px;
          td {
            input {
              height: 40px;
              border: none;
              text-align: center;
            }
          }
        }
      }
    }

  }

  //     // el-button{
  //     //     cursor: pointer;
  //     // }
  //      input{
  //     border:none;
  //     width:150px;
  //   }
  //   table{
  // //   border-collapse: collapse;
  //   border:1px solid black
  //   }
  //   td{
  //     text-align: center;
  //     width: 150px;
  //     height:30px;
  //     border:1px solid black
  //   }
  //   button{
  //     border: none;
  //     background-color:deepskyblue;
  //     color:white;
  //   }

</style>
