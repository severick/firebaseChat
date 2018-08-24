<template>
  <div id="app" class="container">
    <h1>Chat Room</h1>
    <div v-for="message in messages" class="card">
      <div class="card-body">
        <h6 class="card-subtitle mb-2 text-muted">{{ message.nickname }}</h6>
        <p class="card-text">{{ message.text }}</p>
      </div>
    </div>
    <hr>
    <form @submit.prevent="storeMessage">
      <div class="form-group">
        <label>Message:</label>
        <textarea v-model="messageText" class="form-control"></textarea>
      </div>
      <div class="form-group">
        <label>Nickname:</label>
        <input v-model="nickname" class="form-control"/>
      </div>
      <button class="btn btn-primary">Send</button>
    </form>
  </div>
</template>

<script>

export default{
  name: 'App',
  data(){
    return {
      messages: [],
      messageText: '',
      nickname: 'severick'
    }
  },

  methods: {
    storeMessage() {
      this.messages.push({text: this.messageText, nickname: this.nickname})
      this.messageText = ''
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
