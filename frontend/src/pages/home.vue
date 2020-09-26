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
            <v-list>
              <v-list-item v-for="todo in todos" :key="todo.id">
                <v-list-item-content>
                  <v-list-item-title v-text="todo.task"></v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon @click="deleteTodo(todo.id)">
                    <v-icon color="grey lighten-1">mdi-check</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>
            <v-form @submit.prevent="createTodo">
              <v-text-field
                autofocus
                v-model="todoInput"
                placeholder="What should be done?"
                required
                clearable
                append-outer-icon="mdi-send"
                @click:append-outer="createTodo"
              ></v-text-field>
            </v-form>
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
import authenticatedUser from '@/apollo/queries/authUser';
import getUsersTodos from '@/apollo/queries/getUsersTodos';
import unauthenticateUser from '@/apollo/mutations/unauth';
import createTodo from '@/apollo/mutations/createTodo';
import deleteTodo from '@/apollo/mutations/deleteTodo';

export default {
  head: {
    title: '- Home',
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
    async createTodo() {
      const todo = await this.$apollo
        .mutate({
          mutation: createTodo,
          variables: {
            userID: this.user.id,
            task: this.todoInput,
          },
        })
        .then(({ data }) => data && data.createTodo);

      this.todos.push(todo);
      this.todoInput = '';
    },
    async deleteTodo(todoID) {
      await this.$apollo
        .mutate({
          mutation: deleteTodo,
          variables: {
            todoID,
          },
        })
        .then(({ data }) => data && data.id);

      const deletedTodoIndex = this.todos.findIndex((todo) => todo.id === todoID);

      this.todos.splice(deletedTodoIndex, 1);
    },
    async getUser() {
      const user = await this.$apollo
        .query({
          query: authenticatedUser,
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
