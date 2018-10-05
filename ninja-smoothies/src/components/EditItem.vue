<template>
  <div v-if="item" class="edit-item container">
    <h2>Edit {{ item.title }}</h2> 
    <form @submit.prevent="editItem">
      <div class="field title">
        <label for="title">item title:</label>
        <input type="text" name="title" v-model="item.title">
      </div>
      <div v-for="(ing, index) in item.ingredients" class="field ingredient" :key="index">
        <label for="ingredient">Ingredient:</label>
        <input type="text" name="ingredient" v-model="item.ingredients[index]">
        <i class="material-icons delete" @click="deleteIngredient(ingredient)">delete</i>
      </div>
      <div class="field edit-ingredient">
        <label for="edit-ingredient">Add an ingredient (press tab to add):</label>
        <input type="text" name="add-ingredient" id="add-ingredient" @keydown.tab.prevent="addIngredient" v-model="anotherIngredient">
      </div>
      <div class="field center-align">
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
        <button class="btn pink">Update item</button>
      </div>
    </form>
  </div>
</template>

<script>
import db from '@/firebase/init'
import slugify from 'slugify'

export default {
  name: 'EditItem',
  data() {
    return {
      item: null,
      anotherIngredient: null,
      feedback: null
    }
  },
  methods: {
        editItem() {
      // console.log(this.title, this.ingredients)
      if(this.item.title) {
        this.feedback = null
        // create a slug
        this.item.slug = slugify(this.item.title, {
          replacement: '-',
          remove: /[$*_=~.()'"!\-:@]/g,
          lower: true
        })
        console.log(`Slug: ${this.slug}`)
        db.collection('smoothies').doc(this.item.id).update({
          title: this.item.title,
          ingredients: this.item.ingredients,
          slug: this.item.slug
        }).then(() => {
          this.$router.push({ name: 'Index' })
        }).catch(err => {
          console.log(err)
        })
      } else {
        this.feedback = 'Title is required'
      }
    },
    addIngredient() {
      if(this.anotherIngredient) {
        this.item.ingredients.push(this.anotherIngredient)
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
      this.item.ingredients = this.item.ingredients.filter(ing => {
        return ing !== ingredient
      })
    },
  },
  created() {
    let ref = db.collection('smoothies').where('slug', '==', this.$route.params.item_slug )
    // where method takes three params:
    //    1. Property inside records/collection that we want to query
    //    2. evaluation parameter (is this == that?)
    //    3. evaluates against what variable?
    // ref.get() // don't forget to actually get the data!
    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.item = doc.data()
        this.item.id = doc.id
      })
    })
  }
}
</script>

<style scoped>
i.material-icons {
  line-height: 1.7em;
  margin: 0;
  cursor: pointer;
}
.edit-item {
  margin: 5em 0;
  padding: 1.25em;
  max-width: 500px;
  display: flex;
  flex-flow: column;
  align-self: center;
  justify-content: center;
  align-content: center;
}

.edit-item h2 {
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

.edit-item .field {
  margin: 1.25em;
}

.square-chip {
  display: inline-flex;
  align-items: center;
  min-width: 50px;
  background: rgba(50,75,100,0.25);
  margin: .5em;
  padding: 0px 5px 0px 8px;
  border-radius: 2px;
}
.square-chip i {
  padding-left: .5em;
}
</style>

