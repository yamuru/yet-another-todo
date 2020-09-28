<template>
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
</template>

<script>
export default {
  props: {
    todos: Array,
  },
  methods: {
    deleteTodo(id) {
      this.$emit('deleteTodo', id);
    },
  },
};
</script>

<style></style>
