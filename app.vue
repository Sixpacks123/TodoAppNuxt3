<template>
  <div>
    <h1> Todo App</h1>
    <form @submit.prevent="addTodo()"> 
      <label>New Todo</label>
      <input v-model="newTodo" name="newTodo" autocomplete="off"/>
      <buton @click="addTodo()">Add Todo</buton>
    </form>
    <h2>Todo List</h2>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <span :class="{done: todo.done}" @click="doneTodo(todo)">{{todo.content}}</span>
        <button @click="removeTodo(index)">Remove</button>
      </li>
    </ul>
    <h4 v-if="todos.length === 0">Empty list.</h4>
  </div>
</template>
