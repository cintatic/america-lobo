<template>
  <div class="carousel-wrapper">
    <client-only>
      <carousel v-bind="options">
        <slide v-for="promo in promos" :key="promo.name" class="img-wrapper">
          <nuxt-img :src="promo.image" />
        </slide>
      </carousel>
    </client-only>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const promos = await $content('productos', 'promociones').fetch()
    return {
      promos,
    }
  },
  data() {
    return {
      options: {
        autoplay: true,
        loop: true,
        perPage: 1,
        paginationEnabled: false,
      },
    }
  },
}
</script>

<style lang="scss"></style>
