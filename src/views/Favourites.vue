<template>
<div v-if="allFavourites.length > 0">
  <h1>Here are your favourite jokes!</h1>
  <div v-for="favourite in allFavourites" :key="favourite.id" class="jokes">
    <h2>{{favourite.payload.value}}</h2>
  </div>
</div>
<div v-else>
  <h1>Sorry, you haven't favourited any jokes yet.</h1>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Favourites',
    computed: mapGetters(['allFavourites']),
}
</script>

<style>

</style>