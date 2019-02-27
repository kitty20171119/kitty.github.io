<template>
  <div class="tabBar">
      <span class="classify" v-bind:class="item.class"  @click="changeStyle(item.index)" :key="item.id" v-for="item in tabBars">{{item.text}}</span>
    </div>
</template>