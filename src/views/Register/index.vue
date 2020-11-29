<template>
  <div>Register.....</div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style lang="less" scoped>
</style>
