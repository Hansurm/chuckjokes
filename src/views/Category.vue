<template>
  <div class="jokes">
      <h1>You have selected category: {{catVal}}</h1>
      <div v-for="joke in allJokes" :key="joke.id+'A'" class="joke">
          {{joke.value}}
          <div>
            <button class="favButton" @click="favouriteJoke(joke)">Add Favourite</button>
          </div>
            
        </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'Category',
    props: ['catVal'],
    methods: {
    ...mapActions(['fetchJokes','favouriteJoke']),
    },
    computed: mapGetters(['allJokes']),
    created() {
        this.fetchJokes(this.catVal)
    }
}
</script>

<style>
.favButton {
  border: 1px solid rgb(5, 0, 0);
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
}
.favButton:hover {background-color: #3e8e41}
.joke {
  border: 1px solid rgb(5, 0, 0);
  display: grid;
  padding: 1rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  text-align: center;
  position: relative;
  grid-gap: 1rem;
}
.jokes {
  border: 1px solid #ccc;
  background: #20c744;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
}
</style>