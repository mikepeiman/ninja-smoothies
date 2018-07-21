<template>
<div class="index container">
  <!-- <div class="col s12"> -->
  <div class="row">
    <div class="card blue-grey darken-1" v-for="smoothie in smoothies" :key="smoothie.id">
      <!-- <div class="card-action container"> -->
      <i class="material-icons edit" @mouseover="mouseOverEdit" @mouseout="mouseOutEdit">edit</i>
      <i class="material-icons delete" @mouseover="mouseOverDelete" @mouseout="mouseOutDelete">delete</i>
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
        console.log('mouseover no red')
        deleteIcon.classList.add('red')
      }
    },
    mouseOutDelete() {
      const deleteIcon = document.querySelector('.delete')
      if (deleteIcon.classList.contains('red')) {
        console.log('mouseout no red')
        deleteIcon.classList.remove('red')
      }
    },
    mouseOverEdit() {
      const editIcon = document.querySelector('.edit')
      if (!editIcon.classList.contains('purple')) {
        console.log('mouseover no Purple')
        editIcon.classList.add('purple')
      }
    },
    mouseOutEdit() {
      const editIcon = document.querySelector('.edit')
      if (editIcon.classList.contains('purple')) {
        console.log('mouseout no Purple')
        editIcon.classList.remove('purple')
      }
    }
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
