<template>
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
</template>

<script>
export default {};
</script>

<style></style>
