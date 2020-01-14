<template>
  <div>
    <h2>主界面</h2>
    <p>{{$store.getters.user.username}}</p>
    <p>{{$store.getters.user.password}}</p>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>