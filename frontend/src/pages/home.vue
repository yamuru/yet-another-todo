<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card class="elevation-12">
          <v-card-title>
            <v-spacer />
            <span class="text-lg-h5"
              >Yet Another Todo {{ `(${this.user.username || 'Loading...'})` }}</span
            >
            <v-spacer />
          </v-card-title>
          <v-card-text>
            <todo-list :todos="todos" @deleteTodo="deleteTodo"></todo-list>
            <todo-input @createTodo="createTodo"></todo-input>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn @click="signOut" color="primary"> Sign out </v-btn>
            <v-spacer />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import getAuthUser from '@/apollo/queries/getAuthUser';
import getUsersTodos from '@/apollo/queries/getUsersTodos';
import unauthenticateUser from '@/apollo/mutations/unauth';
import createTodo from '@/apollo/mutations/createTodo';
import deleteTodo from '@/apollo/mutations/deleteTodo';

import TodoInput from '@/components/TodoInput';
import TodoList from '@/components/TodoList';

export default {
  head: {
    title: '- Home',
  },
  components: {
    'todo-input': TodoInput,
    'todo-list': TodoList,
  },
  data() {
    return {
      user: {},
      todoInput: '',
      todos: [],
      message: '',
    };
  },
  async mounted() {
    this.user = await this.getUser();

    if (!this.user || !this.user.id) {
      await this.signOut();
    }

    this.todos = await this.getTodos(this.user.id);
  },
  methods: {
    async createTodo(task) {
      const todo = await this.$apollo
        .mutate({
          mutation: createTodo,
          variables: {
            userID: this.user.id,
            task,
          },
        })
        .then(({ data }) => data && data.createTodo);

      this.todos.push(todo);
    },
    async deleteTodo(id) {
      await this.$apollo
        .mutate({
          mutation: deleteTodo,
          variables: {
            id,
          },
        })
        .then(({ data }) => data && data.id);

      const deletedTodoIndex = this.todos.findIndex((todo) => todo.id === id);

      this.todos.splice(deletedTodoIndex, 1);
    },
    async getUser() {
      const user = await this.$apollo
        .query({
          query: getAuthUser,
        })
        .then(({ data }) => data && data.authenticatedUser);
      return user;
    },
    async getTodos(userID) {
      const todos = await this.$apollo
        .query({
          query: getUsersTodos,
          variables: {
            userID,
          },
        })
        .then(({ data }) => data && data.allTodos);

      return todos;
    },
    async signOut() {
      try {
        await this.$apollo
          .mutate({
            mutation: unauthenticateUser,
          })
          .then(({ data }) => data && data.success);
        await this.$apolloHelpers.onLogout();
        this.$router.push({ path: '/' });
      } catch {
        this.message = 'Something went wrong!';
      }
    },
  },
  middleware: ['isAuth'],
};
</script>
