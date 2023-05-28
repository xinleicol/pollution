<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import SideBar from "./components/navs/SideBar.vue";
import HeaderBar from "./components/navs/HeaderBar.vue";
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header><HeaderBar></HeaderBar></el-header>
      <el-container>
        <el-aside width="200px">
          <SideBar></SideBar>
        </el-aside>

        <el-main>
          <h1><a href="/gdwater_simulation/index.html">地下水污染模拟</a></h1>
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
    </el-container>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
