<template>
  <div class="layout-default">

    <div class="container">
      <Nuxt />
    </div>

  </div>
</template>

<script>
export default {
  name: 'LayoutDefault'
};
</script>

<style lang="scss" scoped>
.layout-default {
  .container {
    max-width: 100%;
  }
}
</style>
