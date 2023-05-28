<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import ToDoMain from './components/ToDoMain.vue'
import ToDoHeader from './components/ToDoHeader.vue'
import ToDoFooter from './components/ToDoFooter.vue'
// import {reactive} from 'vue'
// const tasks = reactive([{id:1, title:'曬衣服'},{id:2, title:'看美劇'}])

// const addTask = ()=>{
//   console.log('新增');
  
// }

// const deleteTask = (id:number)=>{
//   console.log(id);
  
// }

// v-model="newTask"
</script>

<template>
  <ToDoHeader></ToDoHeader>
  <ToDoMain></ToDoMain>
  <ToDoFooter></ToDoFooter>
  <!-- <div>
    <h1>待辦事項清單</h1>
    <input type="text"  placeholder="新增待辦事項" />
    <button @click="addTask">新增</button>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.title }}
        <button @click="deleteTask(task.id)">刪除</button>
      </li>
    </ul>
  </div> -->
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
