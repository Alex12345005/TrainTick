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
      // Logge die Daten, die gesendet werden
      console.log("Sending to backend:", { username: this.username, password: this.password });

      try {
        const response = await axios.post('http://127.0.0.1:8000/token', {
          username: this.username,
          password: this.password
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        localStorage.setItem('access_token', response.data.access_token);
        alert('Login erfolgreich');
        this.$router.push({ name: 'HomeView' });
      } catch (error) {
        console.error(error);
        alert('Login fehlgeschlagen: ' + error.response.data.detail);
      }
    }
  }
}
</script>
