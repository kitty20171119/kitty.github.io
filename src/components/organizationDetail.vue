<template>
  <div class="organization">
    <div class="header_img">
      <div class="educationInfo">
        <div class="header">
          <div class="left back">
            <img src="../assets/back.png">
          </div>
          <div class="right caculate">
            <img src="../assets/xing.png">
          </div>
          <div style="clear:both;"></div>
        </div>
        <div class="education_logo left">
          <img src="../assets/education_logo.png">
        </div>
        <div class="education_info left">
          <div class="education_title">新双语教育国际机构</div>
          <p>0-8岁儿童音乐舞蹈培训</p>
          <p class="score">评分:暂无</p>
        </div>
        <div style="clear:both;"></div>
        <div class="education_ensure">
          <img src="../assets/education_ensure.png">
        </div>
      </div>
      <div class="tabBar">
        <span
          class="classify threeItem"
          v-bind:class="item.class"
          @click="changeStyle(item.index)"
          :key="item.id"
          v-for="item in tabBars"
        >{{item.text}}</span>
      </div>
      <Divider></Divider>
      <div class="education_content">
        <p class="education_title">视频</p>
        <div class="education_container">
          <div class="education_item" v-for="item in videos" :key="item.id">
            <img v-bind:src="item.src">
          </div>
        </div>
      </div>
      <div class="education_content">
        <p class="education_title">相册</p>
        <div class="education_container">
          <div class="education_item" v-for="item in images" :key="item.id">
            <img v-bind:src="item.src">
          </div>
        </div>
      </div>
      <div class="education_content content_height">
        <p class="education_title">介绍</p>
        <p class="listItem">
          <span class="left label">名称:</span>
          <span class="left info">湖南向导教育管理有限公司</span>
        </p>
        <p class="listItem">
          <span class="left label">地点:</span>
          <span class="left info">张家界</span>
        </p>
        <p class="listItem listItemHeight">
          <span class="left label">简介:</span>
          <span class="left info">机构简介文本内容机构简介文本内容机构简介文本内容机构简介文本内容机构简介文本内容机构简介文本内容机构简介文本内容</span>
        </p>
      </div>
      <div class="education_content">
        <p class="education_title">综合评分</p>
        <div class="flex scoreContainer">
          <div class="left scoreLeft">
            <div class="circle">
              <img src="../assets/score.png">
            </div>
            <p class="totalScore">综合评分</p>
          </div>
          <div class="textScore">
            <p>教学环境</p>
            <p>专业水平</p>
            <p>教学水平</p>
            <p>服务态度</p>
          </div>
          <div class="scoreProgress">
            <img src="../assets/progress.png">
            <img src="../assets/progress.png">
            <img src="../assets/progress.png">
            <img src="../assets/progress.png">
          </div>
          <div class="right scoreItem">
            <p>4.8</p>
            <p>4.8</p>
            <p>4.8</p>
            <p>4.8</p>
          </div>
        </div>
      </div>
      <Divider></Divider>
      <div class="comment_container">
        <p class="comment">评论</p>
        <div class="comment_item">
          <div class="comment_userInfo">
            <div class="left">
              <div class="userAvatar left">
                <img src="../assets/avatar1.png">
              </div>
              <span class="name left">丽丽</span>
              <span class="grade left">
                <img src="../assets/grade.png">
              </span>
            </div>
            <div class="right">
              <span class="right">2019/01/04</span>
            </div>
            <div style="clear:both;"></div>
          </div>
          <div class="commentInfo">
            <p>评论文案内容评论文案内容评论方案内容评论方案内容评论方案内容评论方案</p>
          </div>
          <Divider></Divider>
        </div>
      </div>
      <div class="footer">
        <div class="leftBtn left">评价</div>
        <div class="rightBtn right">咨询</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
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
      ],
      videos: [
        {
          src: "../../static/shipin.png"
        },
        {
          src: "../../static/shipin.png"
        },
        {
          src: "../../static/shipin.png"
        },
        {
          src: "../../static/shipin.png"
        }
      ],
      images: [
        {
          src: "../../static/shipin.png"
        },
        {
          src: "../../static/shipin.png"
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
.ivu-divider-horizontal {
  margin: 0;
}
.organization {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  overflow: scroll;
  background: #fff;
}
.education_content {
  display: flex;
  flex-direction: column;
  border-bottom: 10px solid #eee;
  background-color: #fff;
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
  color: #000;
}
.education_content > .content_height {
  height: 12rem;
}
.education_container {
  width: 100%;
  height: 5.5rem;
  overflow-x: scroll;
  overflow-y: hidden;
}
.education_container > .education_item,
.education_content > .education_item {
  width: 80px;
  float: left;
  margin-right: 5%;
  height: 5rem;
  overflow: hidden;
  margin-bottom: 10px;
  border-radius: 3px;
  white-space: nowrap;
  display: flex;
}
.education_item > img {
  width: 100%;
}
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
.education_content .info {
  width: 85%;
  margin-left: 5%;
  line-height: 1.5;
  font-size: 13px;
}
.educationInfo {
  background-image: url(../assets/bg.jpg);
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
.education_content > .education_title {
  font-size: 15px;
  font-weight: bold;
  padding: 10px 0px;
}
.listItem {
  height: 2rem;
}
.listItemHeight {
  height: 4rem;
}
.scoreContainer {
  width: 100%;
  height: 6.5rem;
  overflow: hidden;
}
.scoreLeft {
  width: 17%;
  overflow: hidden;
}
.totalScore {
  text-align: center;
}
.textScore {
  text-align: center;
}
.circle > img {
  width: 100%;
}
.textScore {
  width: 20%;
  margin-left: 3%;
}
.textScore > p,
.totalScore {
  color: #000;
}
.scoreProgress {
  width: 40%;
  overflow: hidden;
}
.scoreProgress > img {
  width: 100%;
}
.scoreItem {
  width: 10%;
  color: rgb(255, 57, 31);
}
.scoreItem > p {
  text-align: center;
}
.comment {
  margin-left: 5%;
  margin-top: 10px;
}
.comment_userInfo {
  width: 90%;
  margin-left: 5%;
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.comment_userInfo>.left{
    width: 50%;
}
.comment_userInfo > .right {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.comment_userInfo > .right > span {
  color: #999;
}
.userAvatar.left,
.name,
.grade {
  width: 17%;
  height: 2rem;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.name {
  text-align: center;
  line-height: 2rem;
  display: block;
  font-weight: bold;
}
.userAvatar.left > img,
.grade > img {
  width: 100%;
}
.commentInfo > p {
  width: 90%;
  margin: 10px 5%;
  font-size: 11px;
}
.comment_container {
  padding-bottom: 2.5rem;
}
</style>