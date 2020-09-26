<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4" lg="3">
        <v-form @submit.prevent="onSubmit" :disabled="isFormDisabled">
          <v-card class="elevation-12">
            <v-card-text>
              <v-text-field
                v-model="credentials.username"
                autofocus
                label="Username"
                placeholder="Alan"
                name="username"
                append-icon="mdi-account"
                type="text"
              />

              <v-text-field
                v-model="credentials.email"
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
              <v-btn type="submit" @submit="onSubmit" color="primary"> Sign up </v-btn>
              <v-spacer />
            </v-card-actions>
          </v-card>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import createUser from '@/apollo/mutations/createUser';
import authenticateUser from '@/apollo/mutations/auth';

export default {
  head: {
    title: '- Sign up',
  },
  data() {
    return {
      credentials: {
        username: '',
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
        this.isFormDisabled = false;
        const { credentials } = this;
        this.message = 'Sending...';

        await this.$apollo.mutate({
          mutation: createUser,
          variables: credentials,
        });

        const res = await this.$apollo
          .mutate({
            mutation: authenticateUser,
            variables: {
              email: credentials.email,
              password: credentials.password,
            },
          })
          .then(({ data }) => data && data.authenticateUserWithPassword);

        console.log(res);

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
