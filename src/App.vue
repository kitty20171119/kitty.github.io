<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.flex {
  display: flex;
}
.left {
  float: left;
}
.right {
  float: right;
}
.clean {
  clear: both;
}
.center {
  text-align: center;
}
/*公共主体背景*/
#app {
  width: 100%;
  height: 100%;
  background-color: #f1f1f1;
  left: 0;
  top: 0;
  overflow: scroll;
  position: fixed;
}
/*公共头部*/
.commonHeader {
  width: 100%;
  height: 1.8rem;
  line-height: 1.8rem;
  color: #fff;
  background: rgb(26, 188, 156);
  font-size: 13px;
}
.commonHeader > span {
  font-size: 10px;
}
.commonHeader > .back {
  position: absolute;
  left: 0;
  display: flex;
  font-size: 12px;
  align-items: center;
}
.commonHeader > .more {
  position: absolute;
  right: 0;
  top: 0;
  width: 2rem;
  height: 1.8rem;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.more > img {
  width: 55%;
}
.ivu-icon {
  font-size: 22px;
  margin-top: 3px;
}
.userInfo {
  padding: 15px;
}
.title {
  text-align: center;
  border-bottom: 1px solid #dbd6d6;
  line-height: 2;
  background: #f9f9f9;
}
/*iview*/
/*设置图片大小*/
.demo-carousel > img {
  width: 100%;
}
.ivu-tabs-nav-scroll {
  background-color: #fff;
}
.ivu-tabs-ink-bar {
  color: rgb(242, 181, 182);
  background-color: rgb(242, 181, 182);
}
.ivu-tabs-nav .ivu-tabs-tab-active {
  color: rgb(242, 181, 182);
}
.ivu-tabs-nav .ivu-tabs-tab-active:hover {
  color: rgb(242, 181, 182);
}
.ivu-carousel:hover .ivu-carousel-arrow-hover {
  opacity: 0;
}
.margin {
  margin: 10px;
}
/*顶部导航样式*/
.tabBar {
  width: 100%;
  background: #fff;
  height: 2rem;
  line-height: 2rem;
  padding-left: 5%;
  font-size: 13px;
}
.classify {
  color: #999;
  margin: 0 10px;
}
.threeItem {
  width: 33.3%;
  display: block;
  float: left;
  text-align: center;
  margin: 0;
  padding: 0;
}
.classify.current {
  color: rgb(62, 186, 69);
  /*padding-bottom: 8px;*/
  border-bottom: 2px solid rgb(62, 186, 69);
}
/*设置路由样式*/
a:hover{
  color: ""
}
.router-link-exact-active {
  width: 33.3%;
  display: block;
  float: left;
  text-align: center;
  margin: 0;
  padding: 0;
}
.router-link-active {
  color: rgb(62, 186, 69);
  /*padding-bottom: 8px;*/
  border-bottom: 2px solid rgb(62, 186, 69);
}
/*底部导航样式*/
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 3rem;
  background-color: #fff;
  border-top: 1px solid #eee;
  line-height: 3rem;
}
.leftBtn,
.rightBtn {
  width: 50%;
  text-align: center;
}
.leftBtn {
  color: rgb(74, 211, 85);
}
.rightBtn {
  background-color: rgb(74, 211, 85);
  color: #fff;
}
/*活动详情页的banner*/
.carousel > .demo-carousel {
  width: 100%;
  height: 10rem;
  overflow: hidden;
}
.commonHeader {
  color: #000;
}
.tags {
  display: flex;
}
.tags.label {
  background-color: rgb(250, 250, 250);
}
.tags_item {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 3rem;
  overflow: hidden;
}
.tags_img {
  width: 1rem;
  height: 1rem;
  margin-right: 3px;
}
.tags_img > img {
  width: 100%;
  margin: 0 auto;
  display: block;
}
.ivu-divider-horizontal {
  margin: 0;
}
.courseInfo {
  background-color: #fff;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 10px;
}
.courseTitle > .title {
  font-size: 15px;
  font-weight: bold;
  background: #fff;
  border: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.courseTitle > .time {
  color: rgb(153, 153, 153);
}
.courseTitle .dateTime {
  color: #999;
}
.seek_img > {
  width: 2rem;
  margin-top: 1rem;
  height: 1.5rem;
}
.seek_img > img {
  width: 100%;
  display: flex;
  justify-content: center;
}
.seekInfo {
  color: #999;
  text-align: center;
}
.money > .currentMoney {
  color: rgb(255, 102, 102);
  font-size: 15px;
  font-weight: bold;
}
.money > .oldMoney {
  color: rgb(153, 153, 153);
  font-size: 10px;
}
.course_content {
  width: 100%;
  background-color: #fff;
  padding: 5px;
  margin-bottom: 1rem;
}
.course_content > p {
  width: 90%;
  padding: 10px 0;
  font-size: 14px;
  margin-left: 5%;
}
.course_content > .info {
  font-size: 10px;
  margin-left: 5%;
  color: #999;
  padding: 5px 0;
}
.courseAmount {
  width: 90%;
  margin-left: 5%;
  margin-top: 10px;
}

.courseAmount > .label {
  display: block;
  width: 20%;
}
.courseAmount > .info {
  width: 80%;
}
.course_content > .anotherInfo {
  color: #999;
  margin-left: 5%;
  padding: 10px 0;
}
.courseView {
  background-color: #fff;
  margin: 10px;
}
.courseView_item {
  display: flex;
  width: 33.3%;
  float: left;
  text-align: center;
  border: 1px solid rgb(52, 152, 219);
  color: rgb(52, 152, 219);
  padding: 10px;
  border-radius: 3px;
}
.courseView_item.current {
  background-color: rgb(52, 152, 219);
  color: #fff;
}
.courseView_item_info {
  display: block;
  width: 100%;
}
.course_detail {
  width: 100%;
  height: 29rem;
  overflow: hidden;
}
.course_detail > img {
  width: 100%;
}
.courseImg {
  width: 40%;
}
.course_img {
  width: 40%;
  padding: 5px 0;
  border-radius: 10px;
}
.course_img_training {
  width: 35%;
  border-radius: 15px;
  overflow: hidden;
}
.training_info {
  width: 55%;
}
.training_info > img {
  width: 100%;
}
.training_info > p {
  font-size: 15px;
  margin-top: 0px;
  font-weight: bold;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.trainingIntroduction {
  width: 100%;
  display: flex;
  margin-top: 10px;
}
.trainingIntroduction > .left {
  width: 100%;
  color: #999;
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.trainingIntroduction > .right {
  justify-content: flex-end;
  width: 45%;
  display: flex;
  margin-top: 18px;
}
.tags > .training {
  width: 4rem;
  height: 1.3rem;
  background-color: rgb(255, 205, 182);
  color: rgb(219, 88, 61);
  text-align: center;
  line-height: 1.3rem;
  margin: 5px 5px 5px 0;
}
.footer {
  width: 100%;
  position: fixed;
  bottom: 0;
}
.leftBtn {
  width: 20%;
  height: 3rem;
  text-align: center;
  background-color: #fff;
  overflow: hidden;
  line-height: 2;
}
.rightBtn {
  width: 40%;
  background: #8dda92;
  text-align: center;
  line-height: 3rem;
  height: 3rem;
  float: right;
  color: #fff;
  font-size: 14px;
}
.btnImg {
  width: 100%;
  height: 1.3rem;
  overflow: hidden;
  display: flex;
  margin-top: 5px;
  justify-content: center;
}
.leftBtn > p {
  font-size: 11px;
  line-height: 1.2rem;
  color: #999;
}
.btnImg > img {
  width: 25%;
}
.seek_img {
  width: 1.5rem;
  height: 1.5rem;
  margin-top: 10px;
  overflow: hidden;
}
.seekInfo {
  color: rgb(254, 109, 1);
  text-align: center;
}
.courseInfo > .money,
.courseInfo > .signup {
  margin-top: 10px;
}
.course_content > .title_course {
  font-weight: bold;
}
</style>
