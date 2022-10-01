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
<script setup>
  const newTodo = ref('')
  const defaultData = [
    {
      done: true,
      content: 'Write a blog post'
    },
    {
      done: false,
      content: 'Listen a podcast'
    }
  ]
  const { $cookies } = useNuxtApp()
  const todosData = $cookies.get('todos') || defaultData
  const todos = ref(todosData)
  function addTodo() {
    if (newTodo.value) {
      todos.value.push({
        done: false,
        content: newTodo.value
      })
      newTodo.value = ''
    }
    saveData()
  }
  function doneTodo(todo) {
    todo.done = !todo.done
    saveData()
  }
  function removeTodo(index) {
    todos.value.splice(index, 1)
    saveData()
  }
  function saveData() {
    $cookies.set('todos', todos.value)
  }
  useHead({
    title: 'ToDo App',
    meta: [
      {
        name: 'description',
        content: 'Nuxt 3 ToDo App with Composition API'
      }
    ]
  })
  </script>