
<script lang="ts" setup>
import HelloWorld from "../HelloWorld.vue";
import { ref, reactive } from "vue";

class Comment {
  user: string;
  message: string;
  date: string;

  constructor(user: string, message: string, date: string) {
    this.user = user;
    this.message = message;
    this.date = date;
  }
}

const commentLists: Comment[] = [];
const newCommentLists: Comment[] = reactive([]);
const textarea = ref("");

const submitComment = () => {
  if (textarea.value != "") {
    newCommentLists.push(new Comment("Ceily", textarea.value, new Date().toLocaleString()));
    textarea.value = "";
  }
  console.log(newCommentLists);
}

let commentObj: Array<Comment>;
const readComments = () => {
  const data = localStorage.getItem('comments');
  if (data != null) {
    commentObj = JSON.parse(data);
    for (let index = 0; index < commentObj.length; index++) {
      const element = commentObj[index];
      commentLists.push(new Comment(element.user, element.message, element.date));
    }
  }
}
readComments();

const saveCommentsToJson = () => {
  commentLists.push(...newCommentLists);
  const comments = JSON.stringify(commentLists);
  localStorage.setItem('comments', comments);
}

const value1 = ref(null);
const colors = ref(["#99A9BF", "#F7BA2A", "#FF9900"]); 
</script>
  
<template>
  <el-input v-model="textarea" :rows="2" type="textarea" placeholder="Please input" />



  <el-row class="mb-4">
    <div class="demo-rate-block">
      <span class="demonstration">评分</span>
      <el-rate v-model="value1" />
    </div>
  </el-row>


  <el-row class="mb-4">
    <el-button type="primary" v-on:click=submitComment>吐槽</el-button>
    <el-button type="success" v-on:click=saveCommentsToJson>保存</el-button>
  </el-row>

  <el-card class="box-card">
    <div v-for="o in commentLists" :key="o.user" class="text item">
      <el-row class="">
        <el-col :span="4">
          <div class="grid-content ep-bg-purple-dark" /> {{ o.user }}
        </el-col>
        <el-col :span="12">
          <div class="grid-content ep-bg-purple-dark" /> {{ o.message }}
        </el-col>
        <el-col :span="4">
          <div class="grid-content ep-bg-purple-dark" /> {{ o.date }}
        </el-col>
      </el-row>
    </div>
    <div v-for="o in newCommentLists" :key="o.user" class="text item">
      <el-row class="">
        <el-col :span="4">
          <div class="grid-content ep-bg-purple-dark" /> {{ o.user }}
        </el-col>
        <el-col :span="12">
          <div class="grid-content ep-bg-purple-dark" /> {{ o.message }}
        </el-col>
        <el-col :span="4">
          <div class="grid-content ep-bg-purple-dark" /> {{ o.date }}
        </el-col>
      </el-row>
    </div>
  </el-card>


  <HelloWorld></HelloWorld>
</template>

<style scoped>
.demo-rate-block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  display: inline-block;
  width: 49%;
  box-sizing: border-box;
}

.demo-rate-block:last-child {
  border-right: none;
}

.demo-rate-block .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}

.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 980px;
}
</style>
  