<template>
<div class="index container">
  <!-- <div class="col s12"> -->
  <div class="row">
    <div class="card blue-grey darken-1" v-for="smoothie in smoothies" :key="smoothie.id">
      <!-- <div class="card-action container"> -->
      <i class="material-icons edit" @click="editItem(smoothie.id)" @mouseover="mouseOverEdit" @mouseout="mouseOutEdit">edit</i>
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
export default {
  name: "Index",
  data() {
    return {
      smoothies: [{
          title: "Ninja Brew",
          slug: "ninja-brew",
          ingredients: ["bananas", "coffee", "milk"],
          id: 1
        },
        {
          title: "Super Chill",
          slug: "super-chill",
          ingredients: ["bananas", "coffee", "milk"],
          id: 2
        },
        {
          title: "Morning Boost",
          slug: "morning-boost",
          ingredients: ["bananas", "coffee", "milk"],
          id: 3
        }
      ]
    };
  },
  methods: {
    mouseOverDelete() {
      const deleteIcon = document.querySelector('.delete')
      if (!deleteIcon.classList.contains('red')) {
        deleteIcon.classList.add('red')
      }
    },
    mouseOutDelete() {
      const deleteIcon = document.querySelector('.delete')
      if (deleteIcon.classList.contains('red')) {
        deleteIcon.classList.remove('red')
      }
    },
    mouseOverEdit() {
      const editIcon = document.querySelector('.edit')
      if (!editIcon.classList.contains('purple')) {
        editIcon.classList.add('purple')
      }
    },
    mouseOutEdit() {
      const editIcon = document.querySelector('.edit')
      if (editIcon.classList.contains('purple')) {
        editIcon.classList.remove('purple')
      }
    },
    deleteItem(id) {
      this.smoothies = this.smoothies.filter(smoothie => {
        return smoothie.id !== id
        // work with 'smoothies' array
        // filter that array by the id of the smoothie that was clicked
        // as the filter loops through the array, we check each item's id
        // if the id of the current array item does NOT match the id we are
        // checking for from the click, it returns TRUE, and stays in the array.
        // if it DOES match, it returns FALSE and so that item is excluded from
        // the new, filtered array
      })
    },
    editItem(id) {
      this.smoothies = this.smoothies.filter(smoothie => {
        return smoothie.id !== id
      })
    },
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
}

.card {
  margin: 1em;
}

.card-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
