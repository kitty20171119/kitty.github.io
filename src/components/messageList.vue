<template>
  <div class="messageList">
    <div class="header">
      <div class="back">
        <img src="../assets/back1.png">
      </div>
      <div class="messTabBar">
        <span
          class="messTitle left"
          v-bind:class="item.class"
          v-for="item in items"
          :key="item.id"
          @click="changeStyle(item.id)"
        >
          {{item.title}}
          <Badge v-bind:count="item.count"></Badge>
        </span>
        <div style="clear:both;"></div>
      </div>
    </div>
    <div class="messageContainer">
      <div class="messageItem" v-for="item in messageBoxs" :key="item.id" @click="goDetail">
        <p class="messageTitle">{{item.title}}</p>
        <Divider></Divider>
        <div class="messageInfo">
          <div class="left messageText">
            <p>{{item.introduction}}</p>
            <div class="infoText">
              <div class="timeImg">
                <img src="../assets/time.png">
              </div>
              <span class="date">{{item.date}}</span>
              <span class="time">{{item.time}}</span>
            </div>
          </div>
          <div class="right messageImg">
            <img src="../assets/message.jpg">
          </div>
          <div style="clear:both;"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          id: 0,
          title: "未读消息",
          class: "current",
          count: 10
        },
        {
          id: 1,
          title: "已读消息",
          class: "",
          count: 1
        }
      ],
      messageBoxs: [
        {
          title: "消息标题消息标题消息标题消息标题",
          introduction:
            "机构说明机构说明机构说明机构机构说明内容简介机构说明机构说明",
          date: "2019/09/11",
          time: "14:29:02"
        },
        {
          title: "消息标题消息标题消息标题消息标题",
          introduction:
            "机构说明机构说明机构说明机构机构说明内容简介机构说明机构说明",
          date: "2019/09/11",
          time: "14:29:02"
        },
        {
          title: "消息标题消息标题消息标题消息标题",
          introduction:
            "机构说明机构说明机构说明机构机构说明内容简介机构说明机构说明",
          date: "2019/09/11",
          time: "14:29:02"
        },
        {
          title: "消息标题消息标题消息标题消息标题",
          introduction:
            "机构说明机构说明机构说明机构机构说明内容简介机构说明机构说明",
          date: "2019/09/11",
          time: "14:29:02"
        }
      ]
    };
  },
  methods: {
    changeStyle(id) {
      for (let i in this.items) {
        this.items[i].class = "";
      }
      this.items[id].class = "current";
    },
    goDetail(){
        this.$router.push('/messageDetail');
    }
  }
};
</script>
<style>
.messageList > .header {
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  background-color: #fff;
}
.back > img {
  width: 10px;
  margin-top: 7px;
  position: absolute;
  left: 5%;
}
.messTabBar {
  width: 60%;
  margin-left: 20%;
  font-size: 14px;
  color: rgb(102, 102, 102);
}
.messTitle {
  position: relative;
  display: block;
  width: 35%;
  text-align: center;
  margin: 0 10px;
}
.messTitle.current {
  color: rgb(62, 189, 69);
  border-bottom: 1px solid rgb(62, 189, 69);
}
.messageContainer {
  width: 100%;
}
.messageItem {
  margin-top: 10px;
  background: #fff;
}
.messageTitle {
  font-size: 15px;
  height: 3rem;
  line-height: 3rem;
  margin-left: 5%;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.messageInfo {
  width: 90%;
  margin-left: 5%;
  margin-top: 10px;
  font-size: 14px;
}
.messageText {
  width: 70%;
}
.messageText > p {
  width: 100%;
  height: 4rem;
}
.messageImg {
  width: 30%;
  height: 6rem;
  overflow: hidden;
}
.messageImg > img {
  width: 100%;
  height: 5rem;
  border-radius: 3px;
}
.infoText {
  color: #999;
  margin-top: 5px;
  display: flex;
  align-items: center;
}
.infoText > .timeImg {
  width: 15px;
  height: 15px;
  overflow: hidden;
  float: left;
}
.infoText > .date {
  margin: 0 5px;
}
.timeImg > img {
  width: 100%;
}
</style>