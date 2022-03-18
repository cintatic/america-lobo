<template>
  <div>
    <div class="mt-12">
      <section
        class="text-6xl font-bold text-gray-900 tracking-wide text-center font-bold underline-offset-8"
      ></section>
    </div>
    <section class="text-gray-900 font-bold body-font">
      <div class="container px-5 py-24 mx-auto">
        <h1 class="py-2">KING</h1>
        <div class="flex flex-wrap -m-4">
          <div
            v-for="producto in king"
            :key="producto.name"
            class="lg:w-1/5 md:w-1/2 p-4 w-full"
          >
            <div>
              <NuxtLink
                :to="{
                  name: 'productos-slug',
                  params: { slug: producto.slug },
                }"
              >
                <a class="block relative h-48 rounded overflow-hidden">
                  <nuxt-img
                    alt="ecommerce"
                    class="object-cover object-center w-full h-full block"
                    :src="producto.image"
                  />
                </a>
                <div class="mt-4">
                  <h3
                    class="text-gray-500 text-xs tracking-widest title-font mb-1"
                  >
                    {{ producto.model }}
                  </h3>
                  <h2 class="text-gray-900 title-font text-lg font-medium">
                    {{ producto.name }}
                  </h2>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const king = await $content('productos', 'king').fetch()

    return {
      king,
    }
  },
}
</script>
