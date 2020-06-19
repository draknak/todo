<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="email"
              name="Email"
              label="Email"
            ></v-text-field>
          </v-col>
        </v-row>
        <br>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="password"
              type="password"
              name="Password"
              label="Password"
            ></v-text-field>
          </v-col>
        </v-row>
        <br>
        <div class="error" v-html="error" />
        <br>
        <v-btn class="cyan" @click="login">Login</v-btn> 
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';
export default {
  data() {
    return {
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
        email: this.email,
        password: this.password
      }); 
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
        name: 'boards'
      })
      } catch (error) {
        this.error = error.response.data.error
      }
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
