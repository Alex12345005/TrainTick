<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div>
          <label for="username">Benutzername:</label>
          <input id="username" v-model="username" type="text" required>
        </div>
        <div>
          <label for="password">Passwort:</label>
          <input id="password" v-model="password" type="password" required>
        </div>
        <button type="submit">Einloggen</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      async login() {
        const formData = new FormData();
        formData.append('username', this.username);
        formData.append('password', this.password);
  
        try {
          const response = await axios.post('http://127.0.0.1:8000/token', formData);
          // Speichere das Token irgendwo, z.B. im localStorage
          localStorage.setItem('access_token', response.data.access_token);
          alert('Login erfolgreich');
          this.$router.push({ name: 'HomeView' });
        } catch (error) {
          alert('Login fehlgeschlagen');
        }
      }
    }
  }
  </script>
  