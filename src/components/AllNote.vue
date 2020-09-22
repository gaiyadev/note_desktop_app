<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left primary--text">S/N</th>
          <th class="text-left primary--text">Title</th>
          <th class="text-left primary--text">Body</th>
          <th class="text-left primary--text">Date</th>
          <th class="text-left primary--text">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in allNotes" :key="item._id">
          <td class="primary--text">{{ item._id }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.body }}</td>
          <td>
            <v-btn
              shaped
              type="submit"
              color="error"
              class="mr-4"
              @click="deleteNotes(item._id)"
            >Delete</v-btn>
            <v-btn
              shaped
              type="submit"
              color="primary"
              class="mr-4"
              @click="EditNotes(item._id)"
            >Edit</v-btn>
          </td>
        </tr>
      </tbody>
      <!-- {{allNotes}} -->
      <router-link to="/add">
        <p>Add notes</p>
      </router-link>
    </template>
  </v-simple-table>
</template>

<script>
const url = "https://note-expressjs-api.herokuapp.com";
const proxyurl = "https://cors-anywhere.herokuapp.com/";
//yarn electron:serve

axios.defaults.crossDomain = true;

import axios from "axios";
export default {
  data() {
    return {
      notes: [
        {
          id: "1",
          title: "Frozen Yogurt",
          body: "body1",
          date: "dtae",
        },
      ],
    };
  },
  computed: {
    allNotes() {
      return this.$store.getters.notes;
    },
  },
  methods: {
    fetchNotes() {
      this.$store.dispatch("fetchNotes");
    },
    EditNotes(id) {
      this.$router.push("/edit/" + id);
    },
    deleteNotes(id) {
      axios
        .delete(`${proxyurl}${url}/api/note/${id}`)
        .then((notes) => {
          const alert = notes["data"]["message"];
          this.$toast(alert);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    console.log("this is allnote");
    this.fetchNotes();
  },
};
</script>