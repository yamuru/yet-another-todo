<template>
  <v-form @submit.prevent="createTodo">
    <v-text-field
      v-model="todoInput"
      placeholder="What should be done?"
      required
      clearable
      append-outer-icon="mdi-send"
      @click:append-outer="createTodo"
    ></v-text-field>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      todoInput: '',
    };
  },
  methods: {
    createTodo() {
      this.$emit('createTodo', this.todoInput);
      this.todoInput = '';
    },
  },
};
</script>

<style></style>
