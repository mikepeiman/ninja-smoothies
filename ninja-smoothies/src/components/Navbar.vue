<template>

  <div class="navbar">
    <nav class="nav-extended indigo darken-2">
      <div class="nav-content">
        <div class="container">
        <router-link to="">
          <span class="nav-title">Ninja Smoothies</span>
        </router-link>
        </div>
      <div class="container-column">
        <a href="" class="btn-floating large blue">
          <router-link to="">
            <i class="material-icons">menu</i>
          </router-link>
        </a>        
        <a href="" class="btn-floating large halfway-fab pulse pink">
          <router-link to="">
            <i class="material-icons">add</i>
          </router-link>
        </a>
      </div>

      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  }
};
</script>

<style scoped>
.navbar nav {
  padding: 0 20px;
  margin: 0;
}
nav .nav-content {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.container-column {
  display: flex;
  align-items: center;
}
nav i.material-icons {
  line-height: 1.7em;
}
</style>
