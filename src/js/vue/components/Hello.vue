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
    </div>
  </div>
</template>

<script>
  module.exports = {
    name: 'hello',
    computed: {
      count: function () {
        return MyApplication.store.state.count;
      }
    },
    data: function () {
      return {
        greeting: "Hello World"
      }
    },
    methods: {
      increment: function () {
        MyApplication.store.commit('increment');
      },
      decrement: function () {
        MyApplication.store.commit('decrement');
      }
    }
  }
</script>

<style>
  p {
    color: green;
  }
</style>