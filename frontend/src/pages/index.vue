<template>
  <div>
    <p>Hello index page</p>
    <Helloworld />
    <br>
    <h3>Users:</h3>
    <br>
    <ul>
      <li v-for="user in allUsers" :key="user.username">
        {{ user.username }}
      </li>
    </ul>
  </div>
</template>

<script>
import Helloworld from '@/components/Hello-world';
import allUsers from '@/apollo/queries/allUsers';

export default {
  components: {
    Helloworld,
  },
  apollo: {
    allUsers: {
      prefetch: true,
      query: allUsers
    }
  },
};
</script>

<style></style>
