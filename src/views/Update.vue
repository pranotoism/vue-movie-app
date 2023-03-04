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
        <form @submit.prevent="updateMovie">
          <div class="form-group">
            <label class="form-control-label text-muted">Title</label>
            <input
              v-model="movie.title"
              id="title"
              name="title"
              placeholder="Enter title"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label class="form-control-label text-muted">Duration</label>
            <input
              v-model="movie.duration"
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
              v-model="movie.description"
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
              v-model="movie.url"
              type="integer"
              id="url"
              name="url"
              placeholder="Enter url"
              class="form-control"
            />
          </div>

          <!-- tombol -->
          <div class="row justify-content-center my-3 px-3">
            <button class="btn-block btn-color">Update</button>
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
  name: 'Update',
  data() {
    return {
      movie: {
        title: '',
        description: '',
        duration: 0,
        artists: [],
        genres: [],
        url: '',
      },
    };
  },
  methods: {
    async updateMovie() {
      const obj = {
        title: this.movie.title,
        description: this.movie.description,
        duration: this.movie.duration,
        artists: this.movie.artists,
        genres: this.movie.genres,
        url: this.movie.url,
      };

      if (obj.title) {
        let result = await axios.put(
          'http://localhost:3000/movies/' + this.$route.params.id,
          obj
        );

        console.log(result, obj);
        if (result.status == 200) {
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
  async mounted() {
    let user = localStorage.getItem('user');
    if (!user) this.$router.push({ name: 'Login' });

    const result = await axios.get(
      'http://localhost:3000/movies/' + this.$route.params.id
    );
    this.movie = result.data;
  },
};
</script>

<style></style>
