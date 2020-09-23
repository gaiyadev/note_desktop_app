<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="2"></v-col>
      <v-col cols="12" md="8" sm="12">
        <v-btn shaped type="submit" color="error" class="mr-4" @click="logout">logout</v-btn>
        <h2>Edit Note</h2>
        {{message}}
        <v-form @submit.prevent="onAdd" ref="form" class="mt-4" v-model="valid" lazy-validation>
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
          <v-btn
            shaped
            block
            x-large
            type="submit"
            :disabled="!valid"
            color="primary"
            class="mr-4"
            @click="validate"
          >Update</v-btn>
        </v-form>
        <router-link to="/allNote">
          <p>View all notes</p>
        </router-link>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
const url = "https://note-expressjs-api.herokuapp.com";
const proxyurl = "https://cors-anywhere.herokuapp.com/";
//yarn electron:serve

axios.defaults.crossDomain = true;
export default {
  data() {
    return {
      singleNote: [],
      valid: true,
      show1: false,
      show2: false,
      title: "",
      id: this.$route.params.id,
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
    note() {
      return this.$store.getters.loadedNotes(this.id);
    },
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    onAdd() {
      this.$store.dispatch("addNote", {
        title: this.title,
        body: this.body,
      });
    },
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
    getSingleNote() {
      axios
        .get(`${proxyurl}${url}/api/note/${this.id}`)
        .then((note) => {
          let getTitle = note["data"]["item"]["title"];
          let getBody = note["data"]["item"]["body"];
          this.title = getTitle;
          this.body = getBody;
          console.log(note);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getSingleNote();
  },
};
</script>

