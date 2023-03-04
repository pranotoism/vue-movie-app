<template>
  <div class="col-12">
    <div class="cart_title mt-5">
      <h1 style="font-size: 90px; color: black">Movies List</h1>
      <router-link to="/add">
        <button style="height: 50px">Add movie</button>
      </router-link>
    </div>
    <div class="cart_section" style="padding-top: 10px">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <!-- search -->
          <form @submit.prevent="searchMovie">
            <div class="form-group">
              <input
                v-model="search"
                type="text"
                id="search"
                name="search"
                placeholder="Search..."
                class="form-control"
              />
            </div>
            <div class="row justify-content-center my-3 px-3">
              <button class="btn-block btn-color">Search</button>
            </div>
          </form>

          <div class="col-lg-10">
            <div class="cart_container">
              <MovieRow
                v-for="movie in movies"
                :key="movie.id"
                :movie="movie"
              ></MovieRow>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import MovieRow from '../components/MovieRow';
// import Banner from '../components/Banner'

export default {
  name: 'Home',
  components: {
    MovieRow,
  },
  data() {
    return {
      movies: [],
      search: '',
    };
  },
  methods: {
    async searchMovie() {
      if (!this.search) {
        this.refetchMovies();
      } else {
        let result = await axios.get(
          `http://localhost:3000/movies?title=${this.search}`
        );

        console.log(result);
        if (result.status == 200 && result.data.length > 0) {
          this.movies = result.data;
        }
      }
    },
    async refetchMovies() {
      let result = await axios.get('http://localhost:3000/movies');
      this.movies = result.data;
    },
  },
  async mounted() {
    let user = localStorage.getItem('user');
    if (!user) this.$router.push({ name: 'Login' });
    this.refetchMovies();
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -webkit-text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
  text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
}

li {
  cursor: pointer;
  font-size: 16px;
}

.category {
  margin: 10px;
}

p:hover {
  cursor: pointer;
  color: rgb(37, 89, 185);
}

.detail:hover {
  cursor: pointer;
  background-color: #ccc;
}
body {
  font-family: 'Rubik', sans-serif;
  font-size: 14px;
  font-weight: 400;
  background: #e0e0e0;
  color: #000000;
}

ul {
  list-style: none;
  margin-bottom: 0px;
}

.button {
  display: inline-block;
  background: #0e8ce4;
  border-radius: 5px;
  height: 48px;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}

.button a {
  display: block;
  font-size: 18px;
  font-weight: 400;
  line-height: 48px;
  color: #ffffff;
  padding-left: 35px;
  padding-right: 35px;
}

.button:hover {
  opacity: 0.8;
}

.cart_section {
  width: 100%;
  padding-top: 93px;
  padding-bottom: 111px;
}

.cart_title {
  font-size: 30px;
  font-weight: 500;
}

.cart_items {
  margin-top: 8px;
}

.cart_list {
  border: solid 1px #e8e8e8;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.cart_item {
  width: 100%;
  padding: 15px;
  padding-right: 46px;
}

.cart_item_image {
  width: 133px;
  height: 133px;
  float: left;
}

.cart_item_image img {
  max-width: 100%;
}

.cart_item_info {
  width: calc(100% - 133px);
  float: left;
  padding-top: 18px;
}

.cart_item_name {
  margin-left: 7.53%;
}

.cart_item_title {
  font-size: 14px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
}

.cart_item_text {
  font-size: 18px;
  margin-top: 35px;
}

.cart_item_text span {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 11px;
  -webkit-transform: translateY(4px);
  -moz-transform: translateY(4px);
  -ms-transform: translateY(4px);
  -o-transform: translateY(4px);
  transform: translateY(4px);
}

.cart_item_price {
  text-align: right;
}

.cart_item_total {
  text-align: right;
}

.order_total {
  width: 100%;
  height: 60px;
  margin-top: 30px;
  border: solid 1px #e8e8e8;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
  padding-right: 46px;
  padding-left: 15px;
  background-color: #fff;
}

.order_total_title {
  display: inline-block;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
  line-height: 60px;
}

.order_total_amount {
  display: inline-block;
  font-size: 18px;
  font-weight: 500;
  margin-left: 26px;
  line-height: 60px;
}

.cart_buttons {
  margin-top: 60px;
  text-align: right;
}

.cart_button_clear {
  display: inline-block;
  border: none;
  font-size: 18px;
  font-weight: 400;
  line-height: 48px;
  color: rgba(0, 0, 0, 0.5);
  background: #ffffff;
  border: solid 1px #b2b2b2;
  padding-left: 35px;
  padding-right: 35px;
  outline: none;
  cursor: pointer;
  margin-right: 26px;
}

.cart_button_clear:hover {
  border-color: #0e8ce4;
  color: #0e8ce4;
}

.cart_button_checkout {
  display: inline-block;
  border: none;
  font-size: 18px;
  font-weight: 400;
  line-height: 48px;
  color: #ffffff;
  padding-left: 35px;
  padding-right: 35px;
  outline: none;
  cursor: pointer;
  vertical-align: top;
}
</style>
