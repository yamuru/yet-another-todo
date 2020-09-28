<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card class="elevation-12">
          <v-card-title>
            <v-spacer />
            <span class="text-lg-h5">Yet Another Todo</span>
            <v-spacer />
          </v-card-title>
          <v-card-text>
            <todo-list :todos="todos" @deleteTodo="deleteTodo"></todo-list>
            <todo-input @createTodo="createTodo"></todo-input>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" nuxt to="/signin"> Sign in </v-btn>
            <v-btn color="primary" nuxt to="/signup"> Sign up </v-btn>
            <v-spacer />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TodoList from '@/components/TodoList';
import TodoInput from '@/components/TodoInput';

export default {
  components: {
    'todo-input': TodoInput,
    'todo-list': TodoList,
  },
  data() {
    return {
      todos: [],
    };
  },
  beforeCreate() {
    if (!!this.$apolloHelpers.getToken()) {
      this.$router.push({
        path: '/home',
      });
    }
  },
  methods: {
    createTodo(task) {
      this.todos.push({
        id: this.todos.length,
        task,
      });
    },
    deleteTodo(id) {
      const deletedTodoIndex = this.todos.findIndex((todo) => todo.id === id);
      this.todos.splice(deletedTodoIndex, 1);
    },
  },
};
</script>
