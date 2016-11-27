<template>
  <p>{{ greeting }}</p>
</template>

<script>
  module.exports = {
    name: 'hello',
    data: function () {
      return {
        greeting: "Hello World"
      }
    }
  }
</script>

<style>
  p {
    color: green;
  }
</style>