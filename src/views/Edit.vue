<template>
  <div class="home">
    <EditNote />
  </div>
</template>

<script>
// @ is an alias to /src
import EditNote from "@/components/Edit.vue";

export default {
  //   name: "AddNote",
  components: {
    EditNote,
  },
};
</script>
