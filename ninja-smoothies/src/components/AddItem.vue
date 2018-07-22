<template>
<!-- <h2>Add Smoothie</h2> -->
<div class="add-item container">
  <div class="card">
    <h2 class="center-align indigo-text">
      Add New Item
    </h2>
    <form @submit.prevent="addItem">
      <div class="field title">
        <label for="title">Smoothie Title</label>
        <input type="text" name="title" v-model="title">
      </div>
      <div class="field add-ingredient">
        <label for="add-ingredient">Add An Ingredient</label>
        <input id="add-ingredient" type="text" name="add-ingredient" @keydown.tab.prevent="addIngredient" v-model="anotherIngredient">
        <ul v-if="ingredients">
          <li v-for="(ingredient, index) in ingredients" :key="index" class="square-chip">{{ ingredient }}
            <i class="material-icons delete" @click="deleteIngredient(ingredient)">delete</i>
          </li>
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
import db from '@/firebase/init'
import slugify from 'slugify'

export default {
  name: 'AddSmoothie',
  data() {
    return {
      title: null,
      anotherIngredient: null,
      feedback: null,
      ingredients: [],
      slug: null
    }
  },
  methods: {
    addItem() {
      // console.log(this.title, this.ingredients)
      if(this.title) {
        this.feedback = null
        // create a slug
        this.slug = slugify(this.title, {
          replacement: '-',
          remove: /[$*_=~.()'"!\-:@]/g,
          lower: true
        })
        console.log(`Slug: ${this.slug}`)
        db.collection('smoothies').add({
          title: this.title,
          ingredients: this.ingredients,
          slug: this.slug
        }).then(() => {
          this.$router.push({ name: 'Index' })
        })
      } else {
        this.feedback = 'Title is required'
      }
    },
    addIngredient() {
      if(this.anotherIngredient) {
        this.ingredients.push(this.anotherIngredient)
        // console.log(this.ingredients)
        const addField = document.querySelector('#add-ingredient')
        addField.value = ''
        this.anotherIngredient = null
        this.feedback = null
        // addField.focus()
      } else {
        // error message to user, this field is required
        this.feedback = 'You must enter a value for ingredient'
      }
    },
    deleteIngredient(ingredient) {
      console.log(ingredient)
      this.ingredients = this.ingredients.filter(ing => {
        return ing !== ingredient
      })
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

.square-chip {
  display: inline-flex;
  min-width: 50px;
  background: rgba(50,75,100,0.25);
  margin: 0 .5em;
  padding: 5px 5px 5px 8px;
  border-radius: 2px;
}
.square-chip i {
  padding-left: .5em;
}
</style>
