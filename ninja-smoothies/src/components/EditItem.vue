<template>
  <div class="edit-item container">
    <h2>Edit {{ this.$route.params.item_slug }}</h2> 
    <form @submit.prevent="editItem">
      <div class="field title">
        <label for="title">Smoothie Title</label>
        <input type="text" name="title" v-model="title">
      </div>
      <div class="field edit-ingredient">
        <label for="edit-ingredient">Ingredient</label>
        <input id="edit-ingredient" type="text" name="edit-ingredient" @keydown.tab.prevent="editIngredient" v-model="anotherIngredient">
        <ul v-if="ingredients">
          <li v-for="(ingredient, index) in ingredients" :key="index" class="square-chip">{{ ingredient }}
            <i class="material-icons delete" @click="deleteIngredient(ingredient)"  @mouseover="mouseOverDelete" @mouseout="mouseOutDelete">delete</i>
          </li>
        </ul>
      </div>
      <div class="field add-button center-align">
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
        <button class="btn pink">Submit Updated Item</button>
      </div>
    </form>
  </div>
</template>

<script>
import db from '@/firebase.init'

export default {
  name: 'EditItem',
  data() {
    return {
      smoothie: null
    }
  }
}
</script>

<style scoped>

</style>

