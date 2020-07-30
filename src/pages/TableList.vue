<template>
  <div :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

    <div class="col-12">
      <card :title="title">
        <div slot="raw-content" class="table-responsive">
          <grid
            :cols="cols"
            :pagination="pagination"
            :rows="rows"
            :search="search"
            :sort="sort"
          ></grid>
        </div>
      </card>
    </div>
  </div>
</template>
<script>
import Grid from "gridjs-vue";
import Database from "@/database/Firestore.js";

export default {
  components: {
    Grid,
  },
  mounted() {
    Database.collection("candidates").onSnapshot((docs) => {
      docs.forEach((doc) => {
        var s = [];
        s.push(doc.get("name"));
        s.push(doc.get("First Choice"));
        s.push(doc.get("Second Choice"));
        s.push(doc.get("Third Choice"));
        this.rows.push(s);
      });
    });
  },
  data() {
    return {
      title: "Students",
      pagination: true,
      search: true,
      sort: true,
      cols: ["Name", "First Choice", "Second Choice", "Third Choice"],

      rows: [],
    };
  },
};
</script>
<style></style>
