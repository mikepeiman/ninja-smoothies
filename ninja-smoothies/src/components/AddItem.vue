<template>
<!-- <h2>Add Smoothie</h2> -->
<div class="add-item container">
  <div class="card">
    <h2 class="center-align indigo-text">
      Add New Item
    </h2>
    <form @submit.prevent="AddItem">
      <div class="field title">
        <label for="title">Smoothie Title</label>
        <input type="text" name="title" v-model="title">
      </div>
      <div class="field add-ingredient">
        <label for="add-ingredient">Add An Ingredient</label>
        <input id="add-ingredient" type="text" name="add-ingredient" @keydown.tab.prevent="addIngredient" v-model="anotherIngredient">
        <ul v-if="ingredients">
          <li v-for="ingredient in ingredients" class="chip">{{ ingredient }}</li>
        </ul>
      </div>
      <div class="field add-button center-align">
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
        <button class="btn pink">Add Item</button>
      </div>
    </form>
  </div>

</div>
</template>

<script>
export default {
  name: 'AddSmoothie',
  data() {
    return {
      title: null,
      anotherIngredient: null,
      feedback: null,
      ingredients: []
    }
  },
  methods: {
    AddItem() {
      console.log(this.title)
    },
    addIngredient() {
      if(this.anotherIngredient) {
        this.ingredients.push(this.anotherIngredient)
        console.log(this.ingredients)
        const addField = document.querySelector('#add-ingredient')
        addField.value = ''
        this.anotherIngredient = null
        this.feedback = null
        // addField.focus()
      } else {
        // error message to user, this field is required
        this.feedback = 'You must enter a value for ingredient'
      }
    }
  }
}
</script>

<style scoped>
.add-item {
  margin: 5em 0;
  padding: 1.25em;
  max-width: 500px;
  display: flex;
  flex-flow: column;
  align-self: center;
  justify-content: center;
  align-content: center;
}

.add-item h2 {
  font-size: 2em;
  margin: 1.25em auto;
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background: blue;
}
.field {
  /* display: flex;
  flex-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */
  /* justify-self: center; */
  /* align-self: center; */
}

.add-item .field {
  margin: 1.25em;
}
</style>
