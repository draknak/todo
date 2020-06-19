<template>
  <v-card
    color="grey lighten-4"
    flat
    height="200px"
    tile
  >
    <v-toolbar dense>
      <v-toolbar-title>
        <span
          class="home pr-2"
          @click="navigateTo({name: '/'})">
          Todo
        </span>
      </v-toolbar-title>

      <v-toolbar-items>
        <v-btn 
          v-if="$store.state.isUserLoggedIn"
          flat
          @click="navigateTo({name: 'boards'})">
          Boards
        </v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn 
          v-if="!$store.state.isUserLoggedIn"
          flat
          @click="navigateTo({name: 'login'})">
          Login
        </v-btn>
  
        <v-btn 
          v-if="!$store.state.isUserLoggedIn"
          flat
          @click="navigateTo({name: 'register'})">
          Sign Up
        </v-btn>

        <v-btn 
          v-if="$store.state.isUserLoggedIn"
          flat
          @click="logout">
          Log Out
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<style>
.home {
  cursor: pointer;
}
.home:hover {
  color: grey;
}
</style>