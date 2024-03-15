<template>
  <div>
    <h1>Willkommen auf der Startseite</h1>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  methods: {
    logout() {
      // Entferne das Token oder den Login-Status
      localStorage.removeItem('access_token');

      // Leite den Benutzer zur Login-Seite um
      this.$router.push({ name: 'Login' });
    }
  }
};
</script>

<style>
/* Stile für Home.vue */
</style>
