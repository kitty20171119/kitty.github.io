<template>
  <div class="tabBar">
    <span
      class="classify"
      v-bind:class="item.class"
      @click="changeStyle(item.index)"
      :key="item.id"
      v-for="item in tabBars"
    >{{item.text}}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    changeStyle(index) {
      for (let i in this.tabBars) {
        this.tabBars[i].class = "";
      }
      this.tabBars[index].class = "current";
      alert(index);
    }
  }
};
</script>
<style>
</style>
