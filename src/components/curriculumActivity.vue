<template>
  <div class="curriculumActivity">
      <div class="content_s">
        <div class="content">
          <div class="content-first">
            <img src="../assets/4.jpg">
            <div class="content_first">深度实践技术核心篇</div>
            <div class="content_second">已报名22222人</div>
            <div>
              <span class="content_lab_1">￥11.98</span>
              <span class="content_lab_2">￥14</span>
            </div>
          </div>
        </div>

        <div class="content">
          <div class="content-first">
            <img src="../assets/4.jpg">
            <div class="content_first">深度实践技术核心篇</div>
            <div class="content_second">已报名22222人</div>
            <div>
              <span class="content_lab_1">￥11.98</span>
              <span class="content_lab_2">￥14</span>
            </div>
          </div>
        </div>

        <div class="content">
          <div class="content-first">
            <img src="../assets/4.jpg">
            <div class="content_first">深度实践技术核心篇</div>
            <div class="content_second">已报名22222人</div>
            <div>
              <span class="content_lab_1">￥11.98</span>
              <span class="content_lab_2">￥14</span>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="content-first">
            <img src="../assets/4.jpg">
            <div class="content_first">深度实践技术核心篇</div>
            <div class="content_second">已报名22222人</div>
            <div>
              <span class="content_lab_1">￥11.98</span>
              <span class="content_lab_2">￥14</span>
            </div>
          </div>
        </div>
      </div>
      <p class="checkMore">查看更多课程</p>
  </div>
</template>
<script>
export default {
  name:'curriculumActivity',
  data() {
    return {
      tabBars: [
        {
          index: 0,
          text: "简介",
          class: "current"
        },
        {
          index: 1,
          text: "课程",
          class: ""
        },
        {
          index: 2,
          text: "活动",
          class: ""
        }
      ]
    };
  },
  methods: {
    changeStyle(index) {
      for (let i in this.tabBars) {
        this.tabBars[i].class = "";
      }
      this.tabBars[index].class = "current";
    }
  }
};
</script>
<style>
/*.curriculumActivity {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  overflow: scroll;
  background: #fff;
}*/
.header_img > .header {
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  overflow: hidden;
}
.header > .back {
  line-height: 3;
  margin-left: 5%;
  width: 2rem;
  height: 2rem;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.back > img {
  width: 40%;
}
.header > .caculate {
  width: 2rem;
  height: 2rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  margin-right: 5%;
}
.caculate > img {
  width: 85%;
}
.educationInfo {
  background-image: url(../assets/1.jpg);
}
.education_logo {
  width: 25%;
  height: 5rem;
  margin: 0 5%;
  margin-top: 10px;
  overflow: hidden;
}
.education_logo > img {
  width: 100%;
  border-radius: 5px;
}
.education_info {
  width: 60%;
  margin-top: 10px;
  color: #fff;
}
.education_info > .education_title {
  font-size: 17px;
  font-weight: bold;
}
.education_info > .score {
  color: #999;
  font-size: 12px;
}
.education_info > p {
  line-height: 2;
  font-size: 13px;
}
.education_ensure {
  width: 100%;
  height: 2rem;
  margin-top: 25px;
  margin-bottom: 10px;
}
.education_ensure > img {
  width: 100%;
}
.content_s {
  width: 100%;
  float: left;
}
.content {
  float: left;
  width: 50%;
}
.content-first {
  margin: 10px 10px;
}
.content-first > img {
  width: 100%;
  height: 100%;
}
.content_first {
  color: #333333;
  font-weight: bold;
  font-size: 13px;
}
.content_second {
  color: #999999;
}
.content_lab_1 {
  color: #ff391f;
  font-weight: bold;
  font-size: 12px;
}
.content_lab_2 {
  color: #999999;
  font-weight: bold;
  font-size: 11px;
}
.checkMore {
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 3rem;
  line-height: 2rem;
  background: #fff;
  font-size: 15px;
  color: #999999;
  display: inline-block;
  border-top: 1px solid #dddddd;
  width: 100%;
}
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  background-color: #fff;
  border-top: 1px solid #eee;
  line-height: 2.5rem;
}
.leftBtn,
.rightBtn {
  width: 50%;
  line-height: 2.5rem;
  text-align: center;
}
.leftBtn {
  color: rgb(74, 211, 85);
}
.rightBtn {
  background-color: rgb(74, 211, 85);
  color: #fff;
}
</style>


