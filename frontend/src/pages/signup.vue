<template>
  <v-main class="signup-page">
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4" lg="3">
          <v-card class="elevation-12">
            <v-card-text>
              <v-form>
                <v-text-field
                  autofocus
                  label="Username"
                  placeholder="Alan"
                  name="username"
                  append-icon="mdi-account"
                  type="text"
                />

                <v-text-field
                  label="Email"
                  placeholder="example@example.com"
                  name="email"
                  append-icon="mdi-email"
                  type="text"
                />

                <v-text-field
                  id="password"
                  label="Password"
                  placeholder="k44l9g8Sp11Zm9Z7"
                  name="password"
                  append-icon="mdi-lock"
                  type="password"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn color="primary"> Sign up </v-btn>
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
    title: '- Sign up',
  },
};
</script>

<style lang="scss" scoped>
.signup-page {
  background-color: $primary;
}
</style>
