<template>
  <div class="student">
    <div class="head">
      <div class="back">
        <span class="left">&lt;</span>
        <span class="back_text left">返回</span>
        <div style="clear:both;"></div>
      </div>
      <p class="head_title">学生档案</p>
    </div>
    <div class="content_student">
      <div class="pass clean">跳过</div>
      <div class="clear:both;"></div>
      <div class="content_title">请选择你关注的学习阶段</div>
      <div class="btnContainer">
        <span
          class="btn"
          :id="item.id"
          :key="item.id"
          v-for="item in btns"
          v-bind:class="{currentBtn:item.isCurrent}"
          @click="changeColor"
        >{{item.name}}</span>
      </div>
      <span class="btn nextBtn">下一步</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      btns: [
        {
          id: 1,
          isCurrent: true,
          name: "小学"
        },
        {
          id: 2,
          isCurrent: false,
          name: "初中"
        },
        {
          id: 3,
          isCurrent: false,
          name: "高中"
        }
      ]
    };
  },
  methods: {
    changeColor(e) {
      console.log(e.path[0].id);
      let id = e.path[0].id - 1;
      for (let i in this.btns) {
        this.btns[i].isCurrent = false;
      }
      this.btns[id].isCurrent = true;
    }
  },
  goMyTest() {}
};
</script>
<style>
.content_student {
  background: #fff;
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: scroll;
}
.head {
  height: 2rem;
  line-height: 2rem;
}
.back {
  position: absolute;
  width: 30px;
  float: left;
  margin-left: 10px;
  color: rgb(26, 188, 156);
}
.back >.left {
  font-size: 20px;
  margin-right: 5px;
  display: block;
  width: 35px;
  height: 10px;
}
.back>.back_text {
  width: 50px;
  height: 2rem;
  line-height: 2rem;
  font-size: 13px;
  float: left;
  margin-left: 13px;
  margin-top: -9px;
}
.head > .head_title {
  text-align: center;
  background: rgb(242, 242, 242);
}
.pass {
  display: flex;
  color: #666;
  justify-content: flex-end;
  margin-right: 20px;
  margin-top: 20px;
}
.content_title {
  text-align: center;
  font-weight: bold;
  margin: 3rem;
  font-size: 18px;
}
.btn {
  display: flex;
  text-align: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 40%;
  margin: 20px auto;
  border: 1px solid #eee;
  padding: 10px;
  border-radius: 6px;
  color: #000;
  background: rgb(248, 248, 248);
}
.currentBtn {
  background: rgb(255, 108, 0);
  color: #fff;
}
.nextBtn {
  border-radius: 3px;
  margin-top: 7rem;
  color: #fff;
  width: 80%;
  background: rgb(255, 108, 0);
}
@media screen and (max-height: 480px) {
  .nextBtn {
    margin-top: 3rem;
  }
}
</style>