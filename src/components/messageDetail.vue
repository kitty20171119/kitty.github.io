<template>
  <div class="messageDetail">
    <div class="head">
      <div class="back" @click="goBack">
        <span>
          <img src="../assets/back1.png" class="head_img">
        </span>
      </div>
      <p class="title">消息详情</p>
    </div>
    <div class="content">
      <div class="content_title">消息消息消息消息消息消息消息消息消息消息消息消息</div>
      <div class="content_time">
        <span>2019/09/11 14:29:04</span>
      </div>
      <div class="content_time">
        <span>
          摘要：最近他又更新了一键海淘的功能，支持国外主流购物网站，就算你没有双臂信用卡，没有国外账号，
          最近他又更新可没有国外账号，最近他又更新可没有国外账号，最近他又更新可
        </span>
      </div>
      <div class="content_footer">
        <span>
          最近他又更新了一键海淘的功能，支持国外主流购物网站，就算你没有双臂信用卡，没有国外账号，
          最近他又更新可没有国外账号，最近他又更新可没有国外账号，最近他又更新可。
        </span>
        <div>
          <img src="../assets/message.jpg" class="content_footer_img">
        </div>
        <span>
          最近他又更新了一键海淘的功能，支持国外主流购物网站，就算你没有双臂信用卡，没有国外账号，
          最近他又更新可没有国外账号，最近他又更新可没有国外账号，最近他又更新可。
        </span>
        <div class="content_footer_c">
          <span>
            最近他又更新了一键海淘的功能，支持国外主流购物网站，就算你没有双臂信用卡，没有国外账号，
            最近他又更新可没有国外账号，最近他又更新可没有国外账号，最近他又更新可。最近他又更新了一键海淘的功能，支持国外主流购物网站，就算你没有双臂信用卡，没有国外账号，
            最近他又更新可没有国外账号，最近他又更新可没有国外账号，最近他又更新可。最近他又更新了一键海淘的功能，支持国外主流购物网站，就算你没有双臂信用卡，没有国外账号，
            最近他又更新可没有国外账号，最近他又更新可没有国外账号，最近他又更新可。
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    name: "messageDetail";
    return {};
  },
  methods:{
      goBack(){
          this.$router.go(-1);
      }
  }
};
</script>

<style scoped>
.content {
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  overflow: scroll;
}
.back {
  position: absolute;
  margin-top: 5px;
  margin-left: 10px;
  color: rgb(26, 188, 156);
}
.head_img {
  height: 20px;
  width: 15px;
}
.title {
  font-weight: bold;
  color: #333333;
  font-size: 14px;
  background-color: #fff;
}
.content_title {
  width: 95%;
  height: 4rem;
  color: #333333;
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 30px;
  margin: 0 auto;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.content_time {
  width: 92%;
  color: #9e9e9e;
  font-size: 14px;
  margin: 0 auto;
  padding-bottom: 30px;
}
.content_footer {
  margin: 0 auto;
  width: 92%;
  color: #333333;
  font-size: 16px;
}
.content_footer_img {
  height: 100%;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
}
.content_footer_c {
  padding-top: 20px;
  padding-bottom: 15px;
}
</style>


