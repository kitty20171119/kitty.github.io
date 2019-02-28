<template>
  <div class="courseDetail_schedule">
    <div class="course_content">
      <p class="title_course">活动简介</p>
      <div class="courseAmount" v-for="item in courseMsg" :key="item.index" :id="item.index">
        <span class="left label">{{item.label}}:</span>
        <span class="left info">{{item.info}}</span>
        <div style="clear:both;"></div>
      </div>
    </div>
    <div class="course_content">
      <p class="title_course">活动详情</p>
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
  </div>
</template>
<script>
export default {
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
      ]
    };
  }
};
</script>
<style>
</style>