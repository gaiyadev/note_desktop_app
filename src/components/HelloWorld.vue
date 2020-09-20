<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-5" cols="12">
        <v-app-bar app color="primary" dark elevation="9">
          <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>

          <div class="d-flex align-center">
            <h2>
              <router-link style="text-decoration:none;" class="white--text" id="log" to="/">NoteApp</router-link>
            </h2>
          </div>
          <v-spacer></v-spacer>
          <v-btn to="/register" text class="hidden-xs-only">
            <span class="mr-2">Register</span>
            <v-icon>supervisor_account</v-icon>
          </v-btn>
          <v-btn text to="/login" class="hidden-xs-only">
            <span class="mr-2">Login</span>
            <v-icon>perm_identity</v-icon>
          </v-btn>
        </v-app-bar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({}),
};
</script>
