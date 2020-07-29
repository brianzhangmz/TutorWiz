<template>
  <div class="vue-tempalte">
    <navi></navi>

    <div class="App">
      <div class="vertical-center">
        <div class="inner-block">
          <div class="vue-tempalte">
            <form>
              <h3>Forgot Password</h3>

              <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" />
              </div>

              <button type="submit" class="btn btn-dark btn-lg btn-block">Reset password</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/LoginTabBar.vue";
export default {
  components: {
    navi: Header
  },
  data() {
    return {};
  }
};
</script>