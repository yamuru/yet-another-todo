<template>
  <v-main class="signin-page">
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4" lg="3">
          <v-card class="elevation-12">
            <v-card-text>
              <v-form>
                <v-text-field
                  autofocus
                  placeholder="example@example.com"
                  name="email"
                  append-icon="mdi-email"
                  type="text"
                />

                <v-text-field
                  id="password"
                  placeholder="123123123"
                  name="password"
                  append-icon="mdi-lock"
                  type="password"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn color="primary"> Sign in </v-btn>
              <v-spacer />
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  head: {
    title: '- Sign in',
  },
};
</script>

<style lang="scss" scoped>
.signin-page {
  background-color: $primary;
}
</style>
