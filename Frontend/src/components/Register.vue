<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <form 
            name="todo-register-form"
            autocomplete="off">
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="email"
                  :rules="[rules.required]"
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
                  :rules="[rules.required, rules.min, rules.max]"
                  type="password"
                  name="Password"
                  label="Password"
                  hint="At least 8 characters"
                  autocomplete="new-password"
                  counter
                ></v-text-field>
              </v-col>
            </v-row>
            <br>
            <div class="error" v-html="error" />
            <br>
            <v-btn class="cyan" @click="register">Register</v-btn>
          </form> 
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
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        max: v => v.length <= 32 || 'Max 32 characters',
      },
    };
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      });
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
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
