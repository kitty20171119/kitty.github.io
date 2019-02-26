<template>
  <div class="search">
    <div class="searchBox_search">
      <i-input placeholder="请输入..."></i-input>
      <span class="right">取消</span>
      <div style="clear:both;"></div>
    </div>
    <p class="organizationName">机构名称机构名称</p>
    <Divider></Divider>
    <div class="organizationItem" v-for="item in organizations" :key="item.id">
      <div class="organizationImg left">
        <img v-bind:src="item.src">
      </div>
      <div class="right">
        <p>{{item.courseTitle}}</p>
        <div class="tags" v-for="tags in item" :key="tags.id">
          <span class="training">{{tags.tag}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      organizations: [
        {
          id: 0,
          src: "../../static/courseLogo.png",
          tags: [
            {
              tag: "12节"
            },
            {
              tag: "小学生"
            }
          ]
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
}
.searchBox_search input,
.searchBox_search > span {
  margin-left: 5%;
}
.searchBox_search input {
  background-color: #eee;
  width: 70%;
  margin-top: 20px;
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
  margin: 10px 0 0 5%;
}
</style>