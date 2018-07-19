<template>
  <div class="index container"> 
      <div class="card blue-grey darken-1" v-for="smoothie in smoothies" :key="smoothie.id">
        <div class="card-content white-text">
          <h2 class="card-title">{{ smoothie.title }}</h2>
          <ul class="ingredients">
            <li v-for="(ingredient, index) in smoothie.ingredients" :key="index">
              <span class="chip">{{ ingredient }}</span>
            </li>
          </ul>
        </div>
        <div class="card-action container">
        <a href="" class="btn-floating large orange">
          <router-link to="">
            <i class="material-icons">edit</i>
          </router-link>
        </a>
          <a href="" class="btn-floating large red">
          <router-link to="">
            <i class="material-icons">delete</i>
          </router-link>
        </a>
        </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      smoothies: [
        {
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index {
  display: flex;
  flex-direction: row;
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
}
</style>
