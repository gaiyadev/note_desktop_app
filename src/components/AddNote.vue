<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="2"></v-col>
      <v-col cols="12" md="8" sm="12">
        <h2>Add Note</h2>
        <v-form @submit.prevent="onSignup" ref="form" class="mt-4" v-model="valid" lazy-validation>
          <v-text-field
            v-model="title"
            outlined
            error-count="2"
            :rules="titleRules"
            label="Title"
            required
          ></v-text-field>

          <v-text-field
            v-model="body"
            :counter="10"
            outlined
            error-count="2"
            :rules="bodyRules"
            label="Body"
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
          >Register</v-btn>
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
      title: "",
      titleRules: [
        (v) => !!v || "Title is required",
        // (v) => /.+@.+\..+/.test(v) || "Title must be valid",
      ],
      body: "",
      bodyRules: [
        (v) => !!v || "Body is required",
        // v => /([!@$%<>*''])/.test(v) || "Must have one special character [!@#$%]"
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
