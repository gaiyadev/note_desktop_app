<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="2"></v-col>
      <v-col cols="12" md="8" sm="12">
        <!-- <v-card v-if="error">
          <alert @dismissed="onDismissed" :text="error.message" elevation="2"></alert>
        </v-card>-->
        <h2>Login up for Meetup</h2>
        {{message }}
        <v-form @submit.prevent="onLogin" ref="form" v-model="valid" lazy-validation class="mt-4">
          <!-- <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field> -->

          <v-text-field v-model="email" outlined :rules="emailRules" label="E-mail" required></v-text-field>
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="show1 = !show1"
            :type="show1 ? 'text' : 'password'"
            label="Password"
            outlined
            required
          ></v-text-field>
          <v-btn
            x-large
            type="submit"
            block
            :disabled="!valid"
            color="primary"
            class="mr-4"
            @click="validate"
          >
            Login
            <span style="display: none" class="custom-loader">
              <v-icon light>cached</v-icon>
            </span>
          </v-btn>
          <router-link to="/register">
            <p>Don't have an account?</p>
          </router-link>
        </v-form>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    show1: false,
    show2: false,
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length >= 8) || "Password must be less than 8 characters",
    ],
  }),
  computed: {
    message() {
      return this.$store.getters.message;
    },
    user() {
      return this.$store.getters.user;
    },
    token() {
      return this.$store.getters.token;
    },
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/add");
      }
    },
    token(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/");
      }
    },
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    onLogin() {
      this.$store.dispatch("userLogin", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style scoped>
.custom-loader {
  /* animation: loader 1s infinite; */
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
