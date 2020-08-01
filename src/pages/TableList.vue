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

    <div class="col-12">
      <card :title="course_title">
        <div slot="raw-content" class="table-responsive">
          <grid
            :cols="course_col"
            :pagination="pagination"
            :rows="course_row"
            :search="search"
            :sort="sort"
          ></grid>
        </div>
      </card>
    </div>

    <div class="col-12">
      <card :title="session_title">
        <div slot="raw-content" class="table-responsive">
          <grid
            :cols="session_col"
            :pagination="pagination"
            :rows="session_row"
            :search="search"
            :sort="sort"
          ></grid>
        </div>
      </card>
    </div>

    <div class="col-12">
      <card :title="match_title">
        <div slot="raw-content" class="table-responsive">
          <grid
            :cols="session_col"
            :pagination="pagination"
            :rows="match_row"
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
// eslint-disable-next-line no-unused-vars
import munkres from "munkres-js";

export default {
  components: {
    Grid,
  },
  async mounted() {
    // get candidates info
    this.$Database.collection("candidates").onSnapshot((docs) => {
      docs.forEach((doc) => {
        var s = [];
        s.push(doc.get("name"));
        s.push(doc.get("First Choice"));
        s.push(doc.get("Second Choice"));
        s.push(doc.get("Third Choice"));
        s.push(doc.get("max_working_hours"));
        this.rows.push(s);
      });
    });

    // get course info
    this.$Database.collection("courses").onSnapshot((docs) => {
      docs.forEach((doc) => {
        var s = [];
        s.push(doc.get("code"));
        s.push(doc.get("sessions_empty").length);
        this.course_row.push(s);
      });
    });

    // generate session row
    var session_to_course = await this.load();
    this.$Database.collection("candidates").onSnapshot((docs) => {
      docs.forEach((doc) => {
        var s = [];
        s.push(doc.get("name"));
        var first_choice = doc.get("First Choice");
        var second_choice = doc.get("Second Choice");
        var third_choice = doc.get("Third Choice");
        var hours = doc.get("max_working_hours");

        for (let i = 0; i < session_to_course.length; i++) {
          if (session_to_course[i] == first_choice) {
            s.push("0");
          } else if (session_to_course[i] == second_choice) {
            s.push("1");
          } else if (session_to_course[i] == third_choice) {
            s.push("2");
          } else {
            s.push("100");
          }
        }

        for (var i = 0; i < hours; i++) {
          this.session_row.push(s);
        }
      });
    });

    var munkres_matrix = await this.generateMunkresMatrix(session_to_course);

    var unmatched_row = await this.generateUnMatchedRow(
      munkres(munkres_matrix)
    );

    this.match_row = await this.generateMatchRow(
      unmatched_row,
      munkres(munkres_matrix)
    );
  },

  data() {
    return {
      title: "Students",
      pagination: true,
      search: true,
      sort: true,
      cols: [
        "Name",
        "First Choice",
        "Second Choice",
        "Third Choice",
        "Max Working Hours",
      ],
      rows: [],
      course_col: ["course_name", "course available hours"],
      course_row: [],
      course_title: "Courses",
      session_title: "Sessions",
      session_col: [[]],
      session_row: [],
      match_title: "Match",
      match_row: [],
      munkres_matrix: [],
    };
  },
  methods: {
    async load() {
      var session_to_course = [];
      var locations = [];
      await this.$Database
        .collection("courses")
        .get()
        .then((docs) => {
          docs.forEach((doc) => {
            var refs = doc.get("sessions_empty");
            refs.forEach((element) => {
              locations.push(element);
            });
          });
        });

      for (const element of locations) {
        await element.get().then((res) => {
          this.session_col.push(res.data().session_name);
          session_to_course.push(res.data().course_name);
        });
      }

      return session_to_course;
    },
    async generateMunkresMatrix(session_to_course) {
      var result = [];
      await this.$Database
        .collection("candidates")
        .get()
        .then((docs) => {
          docs.forEach((doc) => {
            var s = [];
            var first_choice = doc.get("First Choice");
            var second_choice = doc.get("Second Choice");
            var third_choice = doc.get("Third Choice");
            var hours = doc.get("max_working_hours");

            for (let i = 0; i < session_to_course.length; i++) {
              if (session_to_course[i] == first_choice) {
                s.push("0");
              } else if (session_to_course[i] == second_choice) {
                s.push("1");
              } else if (session_to_course[i] == third_choice) {
                s.push("2");
              } else {
                s.push("100");
              }
            }

            for (var i = 0; i < hours; i++) {
              result.push(s);
            }
          });
        });
      return result;
    },
    // eslint-disable-next-line no-unused-vars
    async generateUnMatchedRow(munkres_matrix) {
      var result = [];
      await this.$Database
        .collection("candidates")
        .get()
        .then((docs) => {
          docs.forEach((doc) => {
            var s = [];
            s.push(doc.get("name"));
            var hours = doc.get("max_working_hours");
            for (let i = 0; i < munkres_matrix.length; i++) {
              s.push("");
            }
            for (var i = 0; i < hours; i++) {
              result.push(this.copy(s));
            }
          });
        });

      console.log(result);
      return result;
    },
    async generateMatchRow(unmatched_row, munkres_matrix) {
      var result = unmatched_row;

      munkres_matrix.forEach((element) => {
        result[element[0]][element[1] + 1] = "matched";
      });
      console.log(result);
      return result;
    },
    copy(array) {
      var result = [];
      for (var i = 0, len = array.length; i < len; i++) {
        result.push(array[i].slice());
      }
      return result;
    },
  },
};
</script>
<style></style>
