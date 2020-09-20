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
        <tr v-for="item in notes" :key="item.id">
          <td class="primary--text">{{ item.id }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.body }}</td>
          <td>{{ item.date }}</td>
          <td>
            <v-btn shaped type="submit" color="error" class="mr-4">Delete</v-btn>
            <v-btn shaped type="submit" color="primary" class="mr-4">Edit</v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
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
};
</script>