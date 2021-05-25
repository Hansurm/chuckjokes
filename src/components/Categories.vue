<template>
    <div>
      <h3>Categories</h3>
      <div class="categories">
        <div v-for="category in allCategories" :key="category.id" class="category">
          {{category}}
          <button @click="$router.push({name: 'Category', params: { catVal: category },})">Jokes</button>
          
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: "Categories",
    data() {
        return{
            count:0
        }
    },
    methods: {
    ...mapActions(['fetchCategories']),
    },
    computed: mapGetters(['allCategories']),
    created() {
        this.fetchCategories()
    }
}

</script>

<style>
/*
 STYLING PEAMISELT, FAVOURITE BUTTON, Choose button vb?, kas choose peaks kaduma kui lisatud? lslt if clause akki et kui on arrays
 */
.categories {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

}
.category {
  border: 1px solid #ccc;
  background: #20c744;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
</style>