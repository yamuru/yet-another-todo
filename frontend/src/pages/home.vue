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
            <v-list>
              <v-list-item v-for="todo in todos" :key="todo">
                <v-list-item-content>
                  <v-list-item-title v-text="todo"></v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon @click="deleteTodo(todo)">
                    <v-icon color="grey lighten-1">mdi-check</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>
            <v-form @submit.prevent="addTodo">
              <v-text-field
                v-model="todoInput"
                placeholder="What should be done?"
                required
                clearable
                append-outer-icon="mdi-send"
                @click:append-outer="addTodo"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" nuxt to="/"> Sign out </v-btn>
            <v-spacer />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  head: {
    title: '- Home',
  },
  data() {
    return {
      todoInput: '',
      todos: [],
    };
  },
  methods: {
    addTodo() {
      this.todos.push(this.todoInput);
      this.todoInput = '';
    },
    deleteTodo(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
    },
  },
};
</script>
