<template>
  <div class="container">
    <div class="commonHeader">
      <span class="back">
        <Icon type="ios-arrow-back"/>
      </span>
      <p class="center">小学</p>
      <span class="more">更多</span>
    </div>
    <div class="carousel">
      <Carousel v-model="value1" loop>
        <CarouselItem
          v-for="item in imgList"
          :key="item.id"
          v-model="value3"
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
    </div>
    <div class="tabs">
      <Tabs value="name1" v-model="tabName">
        <TabPane
          :label="courseList.name"
          :name="courseList.name"
          :key="courseList.id"
          v-for="courseList in courseTab"
        >
          <Card >
            <CellGroup v-for="item in courseItem" :key="item.index">
              <Cell :padding="0" shadow to="/courseDetail">
                <div class="course_head">
                  <div class="courseImg left">
                    <img v-bind:src="item.src">
                  </div>
                  <div class="courseTitle right">
                    {{item.info}}
                    <span class="tagMsg">{{item.tag}}</span>
                       <span class="left num">{{item.num}}</span>
                  </div>
                  <div style="clear:both;"></div>
                </div>
                <div class="course_footer">
               
                  <!--<span class="right isFree">{{item.isFree}}</span>-->
                  <div style="clear:both;"></div>
                </div>
                 <Divider/>
              </Cell>
            </CellGroup>
          </Card>
        </TabPane>
      </Tabs>
      <!--   <Tabs value="name1">
          <TabPane v-for="(item,index) in arr" :key="index" :label="item.name" :name="item.name">
              <div>{{item.id}}</div>
              <div v-for="(asss,index) in item.arr2" :key="index">
                  {{asss}}
              </div>
          </TabPane>
      </Tabs>-->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: 0,
      value3: "",
      tabName: "",
      setting: {
        autoplay: false,
        autoplaySpeed: 2000,
        dots: "inside",
        radiusDot: false,
        trigger: "hover",
        arrow: "never"
      },
      courseItem: [
        {
          info: "《小学阅读高分秘籍》2天阅读训练营",
          src: "../static/course.png",
          tag: "训练营",
          num: "2节课，2768人报名",
          isFree: "免费"
        },
          {
          info: "《小学阅读高分秘籍》2天阅读训练营",
          src: "../static/course.png",
          tag: "训练营",
          num: "2节课，2768人报名",
          isFree: "免费"
        }
      ],
      courseTab: [
        {
          id: 0,
          name: "全部"
        },
        {
          id: 1,
          name: "数学"
        },
        {
          id: 2,
          name: "语文"
        },
        {
          id: 3,
          name: "英语"
        }
      ],
      imgList: [
        {
          src: "../static/1.jpg"
        },
        {
          src: "../static/2.jpg"
        }
      ]
    };
  },
  created: function() {
    this.tabName = this.courseTab[0].name;
    console.log(this.courseTab[0].name);
  },
  methods: {
  }
};
</script>
<style>
.commonHeader>.center{
  background: #fff;
}
.carousel {
  width: 100%;
  height: 10rem;
  overflow: hidden;
}
.courseImg {
  width: 35%;
  overflow: hidden;
}
.courseImg > img {
  width: 100%;
  display: block;
  margin: 0 auto;
  height: 5rem;
  border-radius: 3px;
}
.course_head > .courseTitle {
  width: 60%;
  white-space: normal;
  color: #000;
}
.courseTitle>.num{
  color: #999;
}
.ivu-cell {
  padding: 0;
}
.ivu-divider-horizontal {
  margin: 10px 0;
}
.infoBox {
  width: 45%;
  overflow: hidden;
  margin-right: 5%;
}
.tagMsg {
  color: rgb(221, 102, 100);
  background-color: rgb(252,238,233);
  display: block;
  width: 55px;
  border-radius: 4px;
  text-align: center;
}
.course_footer > .num {
  color: rgb(204, 204, 204);
}
.course_footer > .isFree {
  color: rgb(34, 184, 83);
}
.ivu-carousel-dots li.ivu-carousel-active > button {
  border-radius: 50%;
  background: rgb(254, 144, 5);
  width: 10px;
  height: 10px;
}
.ivu-carousel-dots li button {
  background: rgb(188, 188, 190);
  opacity: 0.3;
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
/*去掉右边箭头*/
.ivu-cell-arrow{
  opacity: 0;
}
.ivu-carousel:hover .ivu-carousel-arrow-hover {
  
}
</style>