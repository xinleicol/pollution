<template>
  <el-affix :offset="120" justify="start">
    <div class="block">
      <el-avatar :size="100" src="/images/black_cat.jpg" />
    </div>
    <h3 class="mb-2">xinlei</h3>
    <h5 class="mb-2">杀不死我的终将使我强大</h5>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
    <el-menu-item index="0">
      <el-icon><location /></el-icon>
      <router-link to="/abouts/about">关于我</router-link>
      </el-menu-item>

      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <a href="/gdwater/home.html">
          <span>地下水污染扩散可视化</span>
        </a>
      </el-menu-item>

      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title>item four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="3" disabled>
        <el-icon><document /></el-icon>
        <span>Navigator Three</span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <span>Navigator Four</span>
      </el-menu-item>
    </el-menu>
  </el-affix>
</template>
  
<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style scoped>
</style>
