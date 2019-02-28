<template>
  <div class="index">
    <div class="imgContainer">
      <Carousel v-model="value" loop>
        <CarouselItem
          v-for="item in imgList"
          :key="item.id"
          v-model="value"
          :autoplay="setting.autoplay"
          :autoplay-speed="setting.autoplaySpeed"
          :dots="setting.dots"
          :radius-dot="setting.radiusDot"
          :trigger="setting.trigger"
          :arrow="setting.arrow"
        >
          <div class="demo-carousel">
            <img v-bind:src="item.src">
          </div>
        </CarouselItem>
      </Carousel>
      <div class="searchBox left">
        <img src="../assets/search.png">
        <input type="text" placeholder="搜索课程、机构" @focus="goSearch">
      </div>
      <!--<div class="carlenda right">
        <img src="../assets/carlendar2.png">
      </div>-->
    </div>
    <div class="scrollTitle">
      <div class="noticeMsg left">
        <img src="../assets/notice.png">
      </div>
      <ul class="info" ref="con_con" :class="{anim:animate==true}">
        <li class="info" v-for="item in messages" :key="item.id">{{item.title}}</li>
      </ul>
      <span class="right">
        <img src="../assets/info1.png">
      </span>
      <div style="clear:both;"></div>
    </div>
    <Divider></Divider>
    <div class="icons">
      <div class="items" v-for="item in icons" :key="item.id">
        <div class="icon">
          <img v-bind:src="item.src">
        </div>
        <span>{{item.text}}</span>
      </div>
      <div style="clear:both;"></div>
    </div>
    <div class="activity">
      <div class="activity_title">
        <span class="left">热门活动</span>
        <span class="right">
          更多
          <img src="../assets/info1.png">
        </span>
        <div style="clear:both"></div>
      </div>
      <div class="activity_container">
        <div class="activity_content">
          <div class="activity_img left">
            <p class="activity_img_title">标题标题标题</p>
            <p class="activity_img_info">描述描述描述</p>
            <img src="../assets/activity1.png">
          </div>
          <div class="activity_img left">
            <p class="activity_img_title">标题标题标题</p>
            <p class="activity_img_info">描述描述描述</p>
            <img src="../assets/activity2.png">
          </div>
          <div class="activity_img left">
            <p class="activity_img_title">标题标题标题</p>
            <p class="activity_img_info">描述描述描述</p>
            <img src="../assets/activity1.png">
          </div>
          <div class="activity_img left">
            <p class="activity_img_title">标题标题标题</p>
            <p class="activity_img_info">描述描述描述</p>
            <img src="../assets/activity1.png">
          </div>
          <div class="activity_img left">
            <p class="activity_img_title">标题标题标题</p>
            <p class="activity_img_info">描述描述描述</p>
            <img src="../assets/activity1.png">
          </div>
        </div>
        <div style="clear:both;"></div>
      </div>
    </div>
    <div class="course_content">
      <p>{{title}}</p>
      <Divider></Divider>
      <div class="course_content" v-for="item in trainings" :key="item.id">
        <div class="course_img_training left">
          <img v-bind:src="item.src">
        </div>
        <div class="training_info right">
          <p>{{item.name}}</p>
          <div class="tags">
            <span class="training">{{item.tagLeft}}</span>
            <span class="training">{{item.tagRight}}</span>
          </div>
          <div class="trainingIntroduction">
            <span class="left">{{item.info}}</span>
            <span class="right">{{item.distance}}</span>
          </div>
        </div>
        <div style="clear:both;"></div>
      </div>
    </div>
    <p class="checkMore">查看更多机构</p>
    <div class="footer">
      <div
        class="leftBtn left"
        v-for="(item,index) in items"
        :key="item.id"
        @click="changeStyle(index)"
      >
        <div class="btnImg" v-show="item.isCurrent">
          <img v-bind:src="item.src1">
        </div>
        <div class="btnImg" v-show="!item.isCurrent">
          <img v-bind:src="item.src">
        </div>
        <p class="current" v-show="item.isCurrent">{{item.text}}</p>
        <p v-show="!item.isCurrent">{{item.text}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      animate: false,
      value: 0,
      setting: {
        autoplay: false,
        autoplaySpeed: 2000,
        dots: "inside",
        radiusDot: false,
        trigger: "hover",
        arrow: "never"
      },
      imgList: [
        {
          id: 0,
          src: "../static/1.jpg"
        },
        {
          id: 1,
          src: "../static/1.jpg"
        }
      ],
      icons: [
        {
          id: 1,
          src: "../../static/1.png",
          text: "小学"
        },
        {
          id: 2,
          src: "../../static/2.png",
          text: "初中"
        },
        {
          id: 3,
          src: "../../static/3.png",
          text: "高中"
        },
        {
          id: 4,
          src: "../../static/4.png",
          text: "奥数"
        },
        {
          id: 5,
          src: "../../static/5.png",
          text: "书法"
        },
        {
          id: 6,
          src: "../../static/6.png",
          text: "思维训练"
        },
        {
          id: 7,
          src: "../../static/7.png",
          text: "艺术培养"
        },
        {
          id: 8,
          src: "../../static/8.png",
          text: "家庭教育"
        },
        {
          id: 9,
          src: "../../static/9.png",
          text: "少儿英语"
        },
        {
          id: 10,
          src: "../../static/10.png",
          text: "更多课程"
        }
      ],
      title: "推荐机构",
      trainings: [
        {
          title: "推荐机构",
          name: "机构名称机构名称机构名称",
          info: "机构信息简介说明机构信息简介说明",
          distance: "1.2KM",
          src: "../static/list.png",
          tagLeft: "已认证",
          tagRight: "扬琴培训"
        },
        {
          title: "推荐机构",
          name: "机构名称机构名称机构名称",
          info: "机构信息简介说明机构信息简介说明",
          distance: "1.2KM",
          src: "../static/list.png",
          tagLeft: "已认证",
          tagRight: "课外辅导"
        },
        {
          title: "推荐机构",
          name: "机构名称机构名称机构名称",
          info: "机构信息简介说明机构信息简介说明",
          distance: "1.2KM",
          src: "../static/list.png",
          tagLeft: "已认证",
          tagRight: "扬琴培训"
        }
      ],
      footer: [
        {
          icon: "../static/footer1.png",
          text: "首页"
        },
        {
          icon: "../static/footer2.png",
          text: "签到"
        },
        {
          icon: "../static/footer3.png",
          text: "答疑"
        },
        {
          icon: "../static/footer4.png",
          text: "练习"
        },
        {
          icon: "../static/footer5.png",
          text: "我的"
        }
      ],
      items: [
        {
          id: 0,
          src1: "../../static/footer_12.png",
          src: "../../static/footer_11.png",
          text: "首页",
          isCurrent: true
        },
        {
          id: 1,
          src: "../../static/footer_21.png",
          src1: "../../static/footer_22.png",
          text: "签到",
          isCurrent: false
        },
        {
          id: 2,
          src: "../../static/footer_31.png",
          src1: "../../static/footer_32.png",
          text: "答疑",
          isCurrent: false
        },
        {
          id: 3,
          src: "../../static/footer_41.png",
          src1: "../../static/footer_42.png",
          text: "练习",
          isCurrent: false
        },
        {
          id: 4,
          src: "../../static/footer_51.png",
          src1: "../../static/footer_52.png",
          text: "我的",
          isCurrent: false
        }
      ],
      messages: [
        {
          id: 0,
          title: "优品汇成为中国最大家电零售商"
        },
        {
          id: 1,
          title: "这是第二条消息"
        },
        {
          id: 2,
          title: "这是第三条消息"
        },
        {
          id: 3,
          title: "这是第四条消息"
        }
      ]
    };
  },
  created: function() {
    setInterval(this.scroll, 1000);
  },
  methods: {
    changeStyle(index) {
      for (let i in this.items) {
        this.items[i].isCurrent = false;
      }
      this.items[index].isCurrent = true;
    },
    goSearch() {
      this.$router.push("/search");
    },
    scroll() {
      let con_con = this.$refs.con_con;
      con_con.style.marginTop = "-15px";
      this.animate = !this.animate;
      var that = this; // 在异步函数中会出现this的偏移问题，此处一定要先保存好this的指向
      setTimeout(() => {
        that.messages.push(that.messages[0]);
        that.messages.shift();
        con_con.style.marginTop = "0px";
        that.animate = !that.animate; // 这个地方如果不把animate 取反会出现消息回滚的现象，此时把ul 元素的过渡属性取消掉就可以完美实现无缝滚动的效果了
      }, 2000);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ivu-divider-horizontal {
  margin: 0;
}
.imgContainer {
  position: relative;
  height: 15rem;
  overflow: hidden;
}
.searchBox {
  position: absolute;
  left: 31px;
  top: 31px;
  width: 85%;
  height: 2rem;
}
.searchBox > input {
  width: 100%;
  height: 2rem;
  border-radius: 5px;
  border: 0;
  padding-left: 10px;
  outline: none;
  opacity: 0.5;
  position: relative;
  padding-left: 35px;
}
.searchBox img {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 15px;
  height: 15px;
}
::-webkit-input-placeholder {
  color: #fff;
}
.carlenda {
  position: absolute;
  right: 10px;
  top: 30px;
  width: 2rem;
  height: 2rem;
  overflow: hidden;
}
.carlenda > img {
  width: 100%;
}
.scrollTitle {
  width: 100%;
  height: 2.5rem;
  display: flex;
  align-items: center;
  background-color: rgb(255, 243, 237);
}
.noticeMsg {
  width: 10%;
  height: 2rem;
  margin-left: 5%;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.noticeMsg > .left {
  color: #999;
  width: 10%;
}
.noticeMsg > img {
  width: 50%;
  margin-left: 5%;
}
.scrollTitle > .info {
  width: 50%;
  height: 1rem;
  overflow: hidden;
}
.info > li {
  height: 1rem;
}

.scrollTitle > .right {
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.scrollTitle > .right img {
  width: 7%;
}
.carlenda > img {
  width: 2rem;
  height: 2rem;
}
.items {
  width: 20%;
  height: 5.5rem;
  float: left;
  overflow: hidden;
}
.items > .icon {
  width: 100%;
  height: 3.5rem;
  margin-top: 5px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.items > span {
  text-align: center;
  display: block;
  font-size: 13px;
  margin-top: 5px;
}
.icons {
  width: 100%;
  background-color: #fff;
  padding-bottom: 10px;
}
.icon > img {
  width: 65%;
}
.activity_img {
  width: 6rem;
  height: 4rem;
  margin-left: 1rem;
  position: relative;
  overflow: hidden;
}
.activity_img > img {
  width: 100%;
}
.activity_container {
}
.activity_title {
  margin-left: 5%;
  margin-right: 5%;
  padding: 10px 0;
  display: flex;
  align-items: center;
  width: 90%;
}
.activity_title > .left {
  font-weight: bold;
  width: 50%;
}
.activity_title > .right {
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.activity_title > .right > img {
  width: 0.5rem;
  height: 0.5rem;
  margin-left: 0.3rem;
}
.activity {
  background: #fff;
  margin-top: 10px;
  padding-bottom: 10px;
}
.course_content {
  width: 100%;
  background-color: #fff;
  padding: 5px;
  margin-top: 10px;
}
.course_content > p {
  width: 90%;
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
  width: 30%;
  overflow: hidden;
}
.training_info {
  width: 60%;
}
.training_info > img {
  width: 100%;
}
.training_info > p {
  font-size: 13px;
}
.trainingIntroduction {
  width: 100%;
  display: flex;
}
.trainingIntroduction > .left {
  width: 100%;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 11px;
}
.trainingIntroduction > .right {
  justify-content: flex-end;
  width: 45%;
  display: flex;
}
.tags > .training {
  width: 4rem;
  height: 1.3rem;
  background-color: rgb(252, 238, 233);
  color: rgb(219, 88, 61);
  text-align: center;
  line-height: 1.3rem;
  margin: 5px 5px 5px 0;
  /* padding: 5px;*/
}
.footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #eee;
}
.leftBtn {
  width: 20%;
  height: 3.5rem;
  text-align: center;
  background-color: #fff;
  overflow: hidden;
  line-height: 2;
}
.rightBtn {
  width: 40%;
  background: linear-gradient(rgb(254, 58, 0), rgb(255, 104, 1));
  text-align: center;
  line-height: 3rem;
  height: 3rem;
  float: right;
  color: #fff;
}
.btnImg {
  width: 100%;
  height: 1.8rem;
  margin-top: 5px;
  padding-bottom: 3rem solid #eee;
  overflow: hidden;
  display: flex;
  justify-content: center;
}
.leftBtn > p {
  font-size: 11px;
  line-height: 1.2rem;
}
.btnImg > img {
  width: 42%;
}
.leftBtn .current {
  color: rgb(62, 186, 69);
}
.btnImg > img {
  width: 37%;
}
.course_img_training > img {
  width: 100%;
  border-radius: 8px;
}
.training_info > .tags {
  height: 2.5rem;
  margin-top: 0.5rem;
}
.checkMore {
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 4rem;
  line-height: 2rem;
  background: #fff;
}
.activity_container {
  position: relative;
  color: #fff;
  width: 100%;
  height: 4rem;
  overflow-y: hidden;
  overflow-x: scroll;
  white-space: nowrap;
}
.activity_content {
  width: 1000px;
}
.activity_img_title,
.activity_img_info {
  position: absolute;
  left: 0;
  top: 0;
}
.activity_img_title {
  left: 10px;
  top: 5px;
  font-size: 10px;
  width: 90%;
  overflow: hidden;
}
.activity_img_info {
  left: 10px;
  top: 30px;
  font-size: 8px;
}
.demo-carousel {
  width: 100%;
  height: 15rem;
  overflow: hidden;
}
.ivu-carousel-dots-inside {
  display: block;
  position: absolute;
  bottom: -78px;
}
</style>
