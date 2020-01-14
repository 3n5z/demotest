<template>
  <el-form :model="user">
    <el-form-item label="用户名">
      <el-input v-model="user.username" placeholder></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="user.password" placeholder></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onLogin">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    onLogin() {
      this.$store.dispatch("saveUser", this.user);
      this.$router.replace({ path: "main" });
    }
  }
};
</script>

<style>
</style>