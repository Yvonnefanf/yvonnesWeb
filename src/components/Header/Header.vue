<template>
  <el-container class="yvo-header-conatiner">
    <el-header class="yvo-header">
      <span class="title">{{ Header }}</span>
    </el-header>
  </el-container>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    Header: {
      type: String,
      default: ' Yvonne | Web'
    }
  },
  setup() {}
})
</script>
<style lang="less">
.yvo-header-conatiner {
  width: 100%;
  height: 60px;
  display: block;
  background: #ff8600;
  line-height: 60px;
  color:#fff;
  font-weight: 700;
  font-size: 24px;
  text-align: left;
  padding: 0 20px;

}
.yvo-header {
  height: 60px;
  .title{
    cursor: pointer;
  }
}
</style>
