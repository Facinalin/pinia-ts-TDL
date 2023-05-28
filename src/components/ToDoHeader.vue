<script setup lang="ts">
import {ref} from 'vue'
import { mainStore } from '../store/mainStore';

const store = mainStore();
const {addToDo} = store
const title = ref('')

const handleKeyUp = ()=>{
    if(title.value.trim() === '') return alert('不得為空')
    addToDo(title.value)
    title.value =''
}

</script>

<template>
<header class="=header">
    <input type="text" class="new-todo" placeholder="待辦事項" autofocus v-model="title" @keyup.enter="handleKeyUp">
</header>
</template>