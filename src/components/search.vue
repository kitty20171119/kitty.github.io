<template>
  <div class="search">
    <div class="searchBox_search">
      <i-input placeholder="请输入..."></i-input>
      <img src="../assets/search.png"/>
      <span class="right">取消</span>
      <div style="clear:both;"></div>
    </div>
    <div class="infoBox">
      <p class="organizationName left">机构名称机构名称</p>
      <p class="right distance">2.6km</p>
      <div style="clear:both;"></div>
    </div>
    <Divider></Divider>
    <div class="content">
      <div class="organizationItem">
        <div class="organizationImg left">
          <img src="../assets/courseLogo.jpg">
        </div>
        <div class="right classInfo">
          <p>课程名称课程名称课程名称</p>
          <div class="tags">
            <span class="training">12节</span>
            <span class="training">小学生</span>
            <span class="training">每周2-5次</span>
          </div>
          <div class="footer_bottom">
            <span class="left">214人已报名</span>
            <span class="right oldPrice">￥14</span>
            <span class="right currentPrice">￥11.98</span>
          </div>
        </div>
        <div style="clear:both;"></div>
      </div>
      <Divider></Divider>
      <div class="organizationItem">
        <div class="organizationImg left">
          <img src="../assets/courseLogo.jpg">
        </div>
        <div class="right classInfo">
          <p>课程名称课程名称课程名称</p>
          <div class="tags">
            <span class="training">12节</span>
            <span class="training">小学生</span>
            <span class="training">每周2-5次</span>
          </div>
          <div class="footer_bottom">
            <span class="left">214人已报名</span>
            <span class="right oldPrice">￥14</span>
            <span class="right currentPrice">￥11.98</span>
          </div>
        </div>
        <div style="clear:both;"></div>
      </div>
      <Divider></Divider>
      <p class="center margin">更多课程</p>
    </div>
    <div class="content">
      <div class="organizationItem">
        <div class="organizationImg left">
          <img src="../assets/courseLogo.jpg">
        </div>
        <div class="right classInfo">
          <p>课程名称课程名称课程名称</p>
          <div class="tags">
            <span class="training">12节</span>
            <span class="training">小学生</span>
            <span class="training">每周2-5次</span>
          </div>
          <div class="footer_bottom">
            <span class="left">214人已报名</span>
            <span class="right oldPrice">￥14</span>
            <span class="right currentPrice">￥11.98</span>
          </div>
        </div>
        <div style="clear:both;"></div>
      </div>
      <Divider></Divider>
      <div class="organizationItem">
        <div class="organizationImg left">
          <img src="../assets/courseLogo.jpg">
        </div>
        <div class="right classInfo">
          <p>课程名称课程名称课程名称</p>
          <div class="tags">
            <span class="training">12节</span>
            <span class="training">小学生</span>
            <span class="training">每周2-5次</span>
          </div>
          <div class="footer_bottom">
            <span class="left">214人已报名</span>
            <span class="right oldPrice">￥14</span>
            <span class="right currentPrice">￥11.98</span>
          </div>
        </div>
        <div style="clear:both;"></div>
      </div>
      <Divider></Divider>
      <p class="center margin">更多课程</p>
    </div>
  </div>
</template>
<script>
export default {
  name:'student',
  data() {
    return {
      organizations: [
        {
          id: 0,
          src: "../../static/courseLogo.jpg",
          courseTitle: "课程名称课程名称课程名称"
        }
      ]
    };
  }
};
</script>
<style>
.searchBox_search {
  width: 100%;
  background-color: #fff;
  position: relative;
}
.searchBox_search input,
.searchBox_search > span {
  margin-left: 5%;
}
.searchBox_search input {
  background-color: #eee;
  border: 0;
  width: 70%;
  margin-top: 20px;
  padding-left: 23px;
  background-color: rgb(245, 245, 245);
}
.searchBox_search>img{
     position: absolute;
    left: 6%;
    top: 27px;
    width: 15px;
}
.searchBox_search > span {
  display: inline-block;
  width: 25%;
  float: right;
  justify-content: flex-end;
  display: flex;
  margin-right: 5%;
  margin-top: -25px;
}
.organizationName {
  padding: 10px 0 0 5%;
  background: #fff;
  font-size: 13px;
  font-weight: bold;
}
.content {
  width: 100%;
  background-color: #fff;
}
.ivu-divider-horizontal {
  margin: 0;
}
.organizationItem {
  width: 100%;
}
.organizationImg {
  width: 30%;
  margin-left: 5%;
  overflow: hidden;
  height: 6rem;
  margin-left: 10px;
}
.organizationItem > .classInfo {
  width: 70%;
  background: #fff;
  padding: 10px 0;
}
.organizationItem > .classInfo {
  width: 60%;
  background: #fff;
  padding: 10px 0;
}
.organizationImg > .left > p {
  font-weight: bold;
  font-size: 12px;
}
.organizationImg > img {
  width: 65%;
  border-radius: 10px;
  margin-left: 5%;
  margin-top: 10px;
}
.distance.right {
  margin-right: 5%;
  margin-top: 10px;
  color: #999;
}
.infoBox {
  width: 100%;
  padding-bottom: 10px;
  background-color: #fff;
}
.classInfo {
  margin-right: 5%;
}
.classInfo > p {
  font-size: 14px;
  font-weight: bold;
}
.tags {
  margin-top: 15px;
}
.tags > .training {
 /* width: 1rem;
  height: 1rem;
  padding: 3px 7px;
  border-radius: 2px;
  color: rgb(232, 84, 30);*/
  background-color: rgb(252, 238, 233);
}
.footer_bottom {
  margin-top: 10px;
}
.footer_bottom > span {
  color: #999;
}
.footer_bottom > .left {
  font-size: 13px;
}
.currentPrice {
  font-size: 15px;
  font-weight: bold;
}
.oldPrice {
  font-size: 13px;
  margin-top: 2px;
}
.margin {
  margin: 10px 0;
  padding-bottom: 10px;
  line-height: 1.5rem;
}
</style>