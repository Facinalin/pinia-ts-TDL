<template>
    <footer class="footer d-flex">
        <span class="todo-count">
            剩下5項待完成
        </span>
        <ul class="d-flex">
            <li class="spa-1"><a href="">全部</a></li>
            <li class="spa-1"><a href="">待完成</a></li>
            <li class="spa-1"><a href="">已完成</a></li>
        </ul>
        <button type="button">clear completed</button>
    </footer>
     </template>

<style>
.d-flex{
    display: flex;
    justify-content: center;
    align-items: center;
}

li{
    text-decoration: none;
}

.spa-1{
    margin-right: 12px;
}
</style>