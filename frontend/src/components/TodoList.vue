<template>
  <div>
    <p class="completed">Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}</p>
    <p>Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</p>
    <todo v-on:complete-todo="completeTodo" v-on:delete-todo="deleteTodo" v-for="todo in todos" :todo.sync="todo"/>
  </div>
</template>

<script type="text/javascript">

import Todo from './Todo';

export default {
  props: ['todos'],
  components: {
    Todo,
  },
  methods: {
    deleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    },
    completeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      if (this.todos[todoIndex].done === true) {
        this.todos[todoIndex].done = false;
      } else if (this.todos[todoIndex].done === false) {
        this.todos[todoIndex].done = true;
      }
    },
  },
};
</script>

<style>

</style>
