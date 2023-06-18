
<script setup>
import SideBar from "@/components/navs/SideBar.vue";
</script>

<template>
  <el-container>
    <el-aside width="200px">
      <SideBar></SideBar>
    </el-aside>

    <el-main class="container">
      <div class="header">
        <h1>我欲乘风归去，又恐琼楼玉宇</h1>
      </div>


      <el-row justify="space-evenly" class="center">
        <el-col :span="12">
          <div class="block">
            <el-avatar  :fit="center" :size="150" src="/images/cat_girl.jpg" />
          </div>
        </el-col>

        <el-col :span="12">
          <span>
            我是一名简单的程序工程师，主攻方向为图形渲染，有过前端三维可视化开发经验，
            目前是一名Unity开发工程师
          </span>
        </el-col>
      </el-row>


      <el-row justify="space-evenly">
        <el-col :span="12">
          <div class="block">
            <el-icon><Check /></el-icon>
          </div>
          <h2>前端开发工程师</h2>
          <span>
            有前端开发经验，熟悉主流开发框架，有过Cesium/Thress.js等前端渲染开发经验
          </span>
        </el-col>

        <el-col :span="12">
          <div class="block">
            <el-icon><Check /></el-icon>
          </div>
          <h2>Unity开发工程师</h2>
          <span> 目前的职业为Unity开发，主要面向于AR/VR/MR的程序开发 </span>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<style scoped>
.container {
  font-family: Arial, Helvetica, sans-serif;
  margin: 72px;
  line-height: 1.5em;
  font-family: "Times New Roman", Times, serif;
  font-size: 16px;
  color: #000000;
  text-align: left;
}
.header {
  display: flex;
  height: 250px;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.center {
  height: 350px;
  display: flex;
  align-items: center;
}
.center .block{
  text-align: center; 
}
</style>