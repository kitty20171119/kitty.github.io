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
  left: 5%;
  display: flex;
  font-size: 12px;
  align-items: center;
}
.commonHeader > .more {
  position: absolute;
  right: 5%;
  top: 0;
  width: 2rem;
  height: 1.8rem;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.more>img{
  width: 55%;
}
.ivu-icon {
  font-size: 18px;
}
.userInfo {
  padding: 15px;
}
.title {
  text-align: center;
  border-bottom: 1px solid #dbd6d6;
  line-height: 3;
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
</style>
