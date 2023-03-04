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
      <div class="col-md-8 col-10 mt-1">
        <form @submit.prevent="addMovie">
          <div class="form-group">
            <label class="form-control-label text-muted">Title</label>
            <input
              v-model="title"
              id="title"
              name="title"
              placeholder="Enter title"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label class="form-control-label text-muted">Duration</label>
            <input
              v-model="duration"
              type="number"
              id="duration"
              name="duration"
              placeholder="Enter duration"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label class="form-control-label text-muted">Description</label>
            <input
              v-model="description"
              type="description"
              id="description"
              name="description"
              placeholder="Enter description"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label class="form-control-label text-muted">Url</label>
            <input
              v-model="url"
              type="integer"
              id="url"
              name="url"
              placeholder="Enter url"
              class="form-control"
            />
          </div>

          <!-- tombol -->
          <div class="row justify-content-center my-3 px-3">
            <button class="btn-block btn-color">Add</button>
          </div>
          <router-link to="/"
            ><p class="buah row justify-content-center" style="font-size: 12px">
              cancel
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
  name: 'Add',
  data() {
    return {
      title: '',
      description: '',
      duration: 0,
      artists: [],
      genres: [],
      url: '',
    };
  },
  methods: {
    async addMovie() {
      const obj = {
        title: this.title,
        description: this.description,
        duration: this.duration,
        artists: this.artists,
        genres: this.genres,
        url: this.url,
      };

      if (obj.title) {
        let result = await axios.post('http://localhost:3000/movies', obj);

        console.log(result, obj);
        if (result.status == 201) {
          this.$router.push({ name: 'Home' });
        } else {
          Swal.fire({
            title: 'Failed',
            icon: 'error',
          });
        }
      } else {
        Swal.fire({
          title: 'Title is required',
          icon: 'error',
        });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem('user');
    if (!user) this.$router.push({ name: 'Login' });
  },
};
</script>

<style></style>
