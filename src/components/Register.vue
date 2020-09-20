<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="2"></v-col>
      <v-col cols="12" md="8" sm="12">
        <h2>Create an Account</h2>
        <v-form @submit.prevent="onSignup" ref="form" class="mt-4" v-model="valid" lazy-validation>
          <v-text-field
            v-model="email"
            outlined
            error-count="2"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="show1 = !show1"
            outlined
            :type="show1 ? 'text' : 'password'"
            label="Password"
            error-count="4"
            required
          ></v-text-field>
          <v-text-field
            v-model="confirmPassword"
            error-count="2"
            :rules="confirmPasswordRules "
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="show2 = !show2"
            :type="show2 ? 'text' : 'password'"
            outlined
            label="Confirm Password"
            required
          ></v-text-field>
          <p></p>
          <v-btn
            shaped
            block
            x-large
            type="submit"
            :disabled="!valid"
            color="primary"
            class="mr-4"
            @click="validate"
          >
            Register
            <span style="display: none" class="custom-loader">
              <v-icon light>cached</v-icon>
            </span>
          </v-btn>
          <router-link to="/login">
            <p>Already have an account?</p>
          </router-link>
        </v-form>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
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
        (v) =>
          (v && v.length >= 8) || "Password must be less than 8 characters",
        (v) => /(?=.*[A-Z])/.test(v) || "Must have one uppercase character",
        (v) => /(?=.*\d)/.test(v) || "Must have one number",
        // v => /([!@$%<>*''])/.test(v) || "Must have one special character [!@#$%]"
      ],
      confirmPassword: "",
      confirmPasswordRules: [
        (v) => !!v || "Confirm Password is required",
        (v) =>
          (v && v.length >= 8) ||
          "Confirm Password must be less than 8 characters",
        (v) => !!v || "Confirm password",
        (v) => v === this.password || "Passwords do not match",
      ],
    };
  },

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    onSignup() {
      //code
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
