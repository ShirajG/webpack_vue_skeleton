<template>
  <div class="container">
    <ul class="nav nav-pills">
      <li role="presentation"><a>Home</a></li>
      <li role="presentation"><a>Login</a></li>
      <li role="presentation"><a>Sign Up</a></li>
    </ul>

    <div class="jumbotron">
      <h1>{{ greeting }}</h1>
      <p>{{ count }}</p>
      <a class="btn btn-info" v-on:click="increment">+</a>
      <a class="btn btn-info" v-on:click="decrement">-</a>
      <a class="btn btn-info" v-on:click="random">???</a>
    </div>
  </div>
</template>

<script>
  module.exports = {
    name: 'index',
    store:  AppVeuxStore,
    computed: {
      count: function () {
        return this.$store.state.count;
      }
    },
    data: function () {
      return {
        greeting: "Check out this counter"
      }
    },
    methods: {
      increment: function () {
        this.$store.commit('increment');
      },
      decrement: function () {
        this.$store.commit('decrement');
      },
      random: function () {
        this.$store.dispatch('random');
      }
    }
  }
</script>

<style scoped>
  p {
    color: green;
  }
</style>
