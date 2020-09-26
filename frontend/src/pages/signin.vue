<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4" lg="3">
        <v-form @submit.prevent="onSubmit" :disabled="this.isFormDisabled">
          <v-card class="elevation-12">
            <v-card-text>
              <v-text-field
                v-model="credentials.email"
                autofocus
                label="Email"
                placeholder="example@example.com"
                name="email"
                append-icon="mdi-email"
                type="text"
              />

              <v-text-field
                v-model="credentials.password"
                id="password"
                label="Password"
                placeholder="k44l9g8Sp11Zm9Z7"
                name="password"
                append-icon="mdi-lock"
                type="password"
              />
              <div>{{ message }}</div>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn color="primary" nuxt to="/"> Back </v-btn>
              <v-btn type="submit" @submit="onSubmit" color="primary"> Sign in </v-btn>
              <v-spacer />
            </v-card-actions>
          </v-card>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import authenticateUser from '@/apollo/mutations/auth';

export default {
  head: {
    title: '- Sign in',
  },
  data() {
    return {
      credentials: {
        email: '',
        password: '',
      },
      message: '',
      isFormDisabled: false,
    };
  },
  beforeCreate() {
    if (!!this.$apolloHelpers.getToken()) {
      this.$router.push({
        path: '/home',
      });
    }
  },
  methods: {
    async onSubmit() {
      try {
        this.isFormDisabled = true;
        const { credentials } = this;
        this.message = 'Sending...';
        const res = await this.$apollo
          .mutate({
            mutation: authenticateUser,
            variables: credentials,
          })
          .then(({ data }) => data && data.authenticateUserWithPassword);
        await this.$apolloHelpers.onLogin(res.token);
        this.$router.push({ path: '/home' });
      } catch {
        this.isFormDisabled = false;
        this.message = 'Something went wrong!';
      }
    },
  },
};
</script>
