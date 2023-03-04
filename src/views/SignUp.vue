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
      <div class="col-md-8 col-10 mt-1">
        <form @submit.prevent="register">
          <div class="form-group">
            <label class="form-control-label text-muted">Name</label>
            <input
              v-model="name"
              type="text"
              id="name"
              name="name"
              placeholder="Enter name"
              class="form-control"
            />
          </div>
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
            <button class="btn-block btn-color">Sign up</button>
          </div>
          <router-link to="/login"
            ><p class="buah row justify-content-center" style="font-size: 12px">
              Login
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
  name: 'SignUp',
  data() {
    return {
      email: '',
      password: '',
      name: '',
    };
  },
  methods: {
    async register() {
      const obj = {
        email: this.email,
        password: this.password,
        name: this.name,
      };

      let result = await axios.post('http://localhost:3000/users', obj);

      console.log(result);
      if (result.status == 201 && obj.email) {
        localStorage.setItem('user', JSON.stringify(result.data));
        this.$router.push({ name: 'Home' });
      } else {
        Swal.fire({
          title: 'Email is required!',
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

<style>
button {
  height: 30px;
}

#logos {
  max-width: 120px;
  height: auto;
}

.loginBox {
  min-width: 50px !important;
  padding: 0px 25px 30px 25px;
}

.buah:hover {
  cursor: pointer;
  color: red;
}

#particles-js {
  height: 100%;
}

.loginBox {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  height: auto;
  background: #ffffff;
  border-radius: 10px;
  padding-top: 50px;
  box-sizing: border-box;
}

.user {
  margin: 0 auto;
  display: block;
  margin-bottom: 20px;
}

h3 {
  margin: 0;
  padding: 0 0 20px;
  color: #59238f;
  text-align: center;
}

.loginBox input {
  width: 100%;
  margin-bottom: 20px;
}

.loginBox input[type='text'],
.loginBox input[type='password'] {
  border: none;
  border-bottom: 2px solid #262626;
  outline: none;
  height: 40px;
  background: transparent;
  font-size: 16px;
  padding-left: 20px;
  box-sizing: border-box;
}

input:focus,
textarea:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  border: 1px solid #007991 !important;
  outline-width: 0;
  font-weight: 400;
}

.inputBox {
  position: relative;
}

.inputBox span {
  position: absolute;
  top: 10px;
  color: #262626;
}

.loginBox input[type='submit'] {
  border: none;
  outline: none;
  height: 40px;
  font-size: 16px;
  background: #59238f;
  color: #fff;
  border-radius: 20px;
  cursor: pointer;
}

p {
  color: #0000ff;
}
</style>
