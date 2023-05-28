<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { mainStore } from '../store/mainStore';
import { ToDoItem } from '../types/data'

const store = mainStore();
const { getToDoList, deleteItem, updateToDo, updateAllStatus } = store //function可以直接解構
//state如果要響應式，不可以直接解構，使用storeToRefs()方法才能達成響應效果
const { toDoList, mainRadioStatus } = storeToRefs(store); 

const handleChange = (item:ToDoItem)=>{
    //設定item的done屬性為布林的相反（基本toggle）
    updateToDo(item.id,'done',!item.done)
}

const handleToggleAll = (done:boolean)=>{
    updateAllStatus(done)
}

getToDoList();


</script>

<template>
   <section>
    <div class="d-flex">
    <input id="toggle-all" type="checkbox" :checked="mainRadioStatus" @change="handleToggleAll(!mainRadioStatus)">
    <label for="toggle-all">全部標示為完成</label>
</div>
    <ul class="todo-list">
        <li :class="{completed:item.done}" v-for="item in toDoList" :key="item.id">
            <div class="d-flex">
              <input type="checkbox" :checked="item.done" @change="handleChange(item)">
              <label for="">{{ item.title }}</label>
              <button type="button" @click="deleteItem(item.id)">X
</button>
            </div>
        </li>
    </ul>
   </section>
    </template>

    <style>
.d-flex{
    display: flex;
    justify-content: center;
    align-items: center;
}

.completed {
  text-decoration: line-through;
}


</style>