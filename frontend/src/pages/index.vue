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
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" nuxt to="/signin" no-prefetch> Sign in </v-btn>
            <v-btn color="primary" nuxt to="/signup" no-prefetch> Sign up </v-btn>
            <v-spacer />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>
