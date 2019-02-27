<template>
  <div class="brifeIntroduction">
    <div class="course_content">
      <p class="title_course">课程表</p>
      <div class="courseAmount" v-for="item in courseMsg" :key="item.index" :id="item.index">
        <span class="left label">{{item.label}}:</span>
        <span class="left info">{{item.info}}</span>
        <div style="clear:both;"></div>
      </div>
      <p class="info">此课程支持试听课,详情请电话咨询</p>
    </div>
    <div class="course_content">
      <p class="title_course">课程详情</p>
      <div class="course_detail">
        <img src="../assets/course_detail.png">
      </div>
    </div>
    <div class="course_content">
      <p class="title_course">培训机构</p>
      <div class="course_content">
        <div class="course_img_training left">
          <img src="../assets/courseLogo.jpg">
        </div>
        <div class="training_info right">
          <p>机构名称</p>
          <div class="tags">
            <span class="training">已认证</span>
            <span class="training">扬琴培训</span>
          </div>
          <div class="trainingIntroduction">
            <span class="left">机构信息，简介说明，机构信息，简介说明</span>
            <span class="right">1.2KM</span>
          </div>
        </div>
        <div style="clear:both;"></div>
      </div>
    </div>
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
  </div>
  
</template>
<script>
export default {
    name:'brifeIntroduction',
    components:{
    },
  data() {
    return {
      courseMsg: [
        {
          label: "课时数量",
          info: "1节课"
        },
        {
          label: "每节时长",
          info: "90分钟"
        },
        {
          label: "上课时间",
          info: "请直接致电预约上课时间"
        },
        {
          label: "班级人数",
          info: "20人"
        },
        {
          label: "教学地点",
          info: "宝安区松岗平安路十号山美新村大厦二楼小白鸽少儿舞蹈团"
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
  }
};
</script>
<style>
</style>