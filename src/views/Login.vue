<template>
  <div
    class="loginBox"
    style="
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
      background-color: white;
    "
  >
    <div class="row justify-content-center my-auto">
      <div class="row col-12 justify-content-center px-3 mb-3">
        <img id="logos" src="../assets/logo.png" />
      </div>
      <h1>Login</h1>
      <div class="col-md-8 col-10 mt-1">
        <form @submit.prevent="login">
          <div class="form-group">
            <label class="form-control-label text-muted">Email</label>
            <input
              v-model="email"
              type="text"
              id="email"
              name="email"
              placeholder="Enter email"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label class="form-control-label text-muted">Password</label>
            <input
              v-model="password"
              type="password"
              id="psw"
              name="psw"
              placeholder="Enter password"
              class="form-control"
            />
          </div>

          <!-- tombol -->
          <div class="row justify-content-center my-3 px-3">
            <button class="btn-block btn-color">Login</button>
          </div>
          <router-link to="/sign-up"
            ><p class="buah row justify-content-center" style="font-size: 12px">
              Sign up
            </p></router-link
          >
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import Swal from 'sweetalert2';
import axios from 'axios';
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      const obj = {
        email: this.email,
        password: this.password,
      };

      let result = await axios.get(
        `http://localhost:3000/users?email=${obj.email}&password=${obj.password}`,
        obj
      );

      console.log(result, obj);
      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem('user', JSON.stringify(result.data));
        this.$router.push({ name: 'Home' });
      } else {
        Swal.fire({
          title: 'User not found',
          icon: 'error',
        });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem('user');
    if (user) this.$router.push({ name: 'Home' });
  },
};
</script>

<style></style>
