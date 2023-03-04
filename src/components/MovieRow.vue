<template>
  <div class="cart_items">
    <!-- <router-link to="/detail/"> -->
    <ul class="cart_list detail" @click="goUpdate(movie.id)">
      <li class="cart_item clearfix">
        <div class="cart_item_image">
          <img style="max-width: 65%" :src="movie.url" alt="" />
        </div>
        <div
          class="cart_item_info d-flex flex-md-row flex-column justify-content-between"
        >
          <div class="cart_item_name cart_info_col">
            <div class="cart_item_title">Title</div>
            <div class="cart_item_text">{{ movie.title }}</div>
          </div>
          <div class="cart_item_quantity cart_info_col">
            <div class="cart_item_title">Duration</div>
            <div class="cart_item_text">{{ movie.duration }} Hour</div>
          </div>
          <div class="cart_item_price cart_info_col">
            <div class="cart_item_title">Description</div>
            <div class="cart_item_text">{{ movie.description }}</div>
          </div>
        </div>
      </li>
    </ul>
    <!-- </router-link> -->
  </div>
</template>

<script>
export default {
  name: 'MovieRow',
  props: ['movie'],
  methods: {
    goUpdate(id) {
      console.log(id);
      this.$router.push(`/update/${id}`);
    },
  },
};
</script>

<style></style>
