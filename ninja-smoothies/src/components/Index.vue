<template>
<div class="index container">
  <!-- <div class="col s12"> -->
  <div class="row">
    <div class="card blue-grey darken-1" v-for="smoothie in smoothies" :key="smoothie.id">
      <!-- <div class="card-action container"> -->
        <router-link :to="{ name: 'EditItem', params: {item_slug: smoothie.slug} }">
          <i class="material-icons edit" @click="editItem(smoothie.id)" @mouseover="mouseOverEdit" @mouseout="mouseOutEdit">edit</i>
        </router-link>
        
      <i class="material-icons delete" @click="deleteItem(smoothie.id)" @mouseover="mouseOverDelete" @mouseout="mouseOutDelete">delete</i>
      <!-- </div> -->
      <div class="card-content white-text">
        <h2 class="card-title">{{ smoothie.title }}</h2>
        <ul class="ingredients">
          <li v-for="(ingredient, index) in smoothie.ingredients" :key="index">
            <span class="chip">{{ ingredient }}</span>
          </li>
        </ul>
      </div>

    </div>
  </div>

</div>

</div>
</template>

<script>
import db from '@/firebase/init'

export default {
  name: "Index",
  data() {
    return {
      smoothies: []
      // smoothies: [{
      //     title: "Ninja Brew",
      //     slug: "ninja-brew",
      //     ingredients: ["bananas", "coffee", "milk"],
      //     id: 1
      //   },
      //   {
      //     title: "Super Chill",
      //     slug: "super-chill",
      //     ingredients: ["bananas", "coffee", "milk"],
      //     id: 2
      //   },
      //   {
      //     title: "Morning Boost",
      //     slug: "morning-boost",
      //     ingredients: ["bananas", "coffee", "milk"],
      //     id: 3
      //   }
      // ]
    };
  },
  methods: {
    mouseOverDelete(e) {
      // my first method was to target the DOM elements by classname:
      // const deleteIcon = document.querySelector('.delete')
      //
      // but then hovering icons for item #2, #3, etc targeted icons of #1.
      // e.target is the solution
      if (!e.target.classList.contains('red-text')) {
        e.target.classList.add('red-text')
      }
    },
    mouseOutDelete(e) {
      if (e.target.classList.contains('red-text')) {
        e.target.classList.remove('red-text')
      }
    },
    mouseOverEdit(e) {
      if (!e.target.classList.contains('purple-text')) {
        e.target.classList.add('purple-text')
      }
    },
    mouseOutEdit(e) {
      if (e.target.classList.contains('purple-text')) {
        e.target.classList.remove('purple-text')
      }
    },
    deleteItem(id) {
      // delete item from firestore
      db.collection('smoothies').doc(id).delete()
        .then(() => {
          this.smoothies = this.smoothies.filter(smoothie => {
            return smoothie.id !== id
          })

          // this.smoothies = this.smoothies.filter(smoothie => {
          //   return smoothie.id !== id
          //   // work with 'smoothies' array
          //   // filter that array by the id of the smoothie that was clicked
          //   // as the filter loops through the array, we check each item's id
          //   // if the id of the current array item does NOT match the id we are
          //   // checking for from the click, it returns TRUE, and stays in the array.
          //   // if it DOES match, it returns FALSE and so that item is excluded from
          //   // the new, filtered array
        })
    },
    editItem(id) {
      this.smoothies = this.smoothies.filter(smoothie => {
        return smoothie.id !== id
      })
    }
  },
  created() {
    // fetch data from firestore
    const smoothiesDB = db.collection('smoothies').get()
      .then(snapshot => {
        // snapshot = the state of our DB collection at this point in time
        snapshot.forEach(doc => {
          // each item in DB = doc. This contains all the info about that record, EXCEPT the data
          // console.log(doc.data(), doc.id)
          // .data() needs parentheses, it is a method call
          // the ID is not part of the data, it is a separate property
          let smoothie = doc.data()
          smoothie.id = doc.id
          this.smoothies.push(smoothie)
        })
      })

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index {
  display: flex;
  flex-direction: column;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  /* align-items: stretch; */
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
  grid-auto-rows: auto;
  grid-gap: 1em;
}

.card {
  margin: 1em;
  min-width: 100%;
  /* background: yellow; */
  /* text-align: center; */
  /* border: 1px solid red; */
}

.card-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.ingredients {
  flex-wrap: wrap;
  justify-content: center;
}

.card-action {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.card-title {
  width: 100%;
}

.ingredients {
  display: flex;
}

.card a.router-link-active,
a.router-link-exact-active {
  margin-right: 0 !important;
}

i.material-icons {
  line-height: 1.7em;
  margin: 0;
  cursor: pointer;
}

.delete {
  position: absolute;
  top: 4px;
  right: 4px;
}

.edit {
  position: absolute;
  top: 4px;
  right: 34px;
}
</style>
