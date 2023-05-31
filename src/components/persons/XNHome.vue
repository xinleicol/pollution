<script setup>
import HelloWorld from "../HelloWorld.vue";
import SideBar from "../navs/SideBar.vue";
</script>

<template>
  <el-container>
    <el-aside width="200px">
      <SideBar></SideBar>
    </el-aside>

    <el-main>
      <h1><a href="/gdwater_simulation/index.html">王信南</a></h1>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
          <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
      </div>
      <HelloWorld msg="Vite + Vue" />
      <HelloWorld msg="Vite + Vue" />
    </el-main>
  </el-container>
</template>
