<template>
  <div class="bg-gradient-to-bl from-gray-400 via-gray-100 to-gray-400">
    <div class="py-12 bg-gradient-to-bl from-gray-400 via-gray-100 to-gray-400">
      <section
        class="text-6xl font-bold text-gray-900 tracking-wide text-center font-bold underline-offset-8"
      >
        PRODUCTOS
      </section>
    </div>
    <!--PROMOCIONES-->
    <section class="text-gray-900 body-font font-bold">
      <div
        class="container px-5 py-8 mx-auto bg-gradient-to-b from-red-500 to-red-800 shadow-lg"
      >
        <h1 class="py-2 text-white text-4xl mb-4">PROMOCIONES</h1>
        <div class="flex flex-wrap -m-4">
          <div
            v-for="producto in promociones"
            :key="producto.name"
            class="lg:w-1/3 md:w-1/2 p-4 w-full"
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
                    class="text-gray-200 text-xs tracking-widest title-font mb-1"
                  >
                    {{ producto.model }}
                  </h3>
                  <h2 class="text-gray-100 title-font text-lg font-medium">
                    {{ producto.name }}
                  </h2>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="text-gray-900 body-font font-bold">
      <div
        class="container px-5 py-24 mx-auto bg-gradient-to-bl from-gray-400 via-gray-100 to-gray-400 rounded shadow"
      >
        <h1 class="py-2 text-4xl mb-4">LOBO MX</h1>
        <div class="flex flex-wrap -m-4">
          <div
            v-for="producto in loboMx"
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
                    format="webp"
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

    <section class="text-gray-900 body-font font-bold">
      <div
        class="container px-5 py-24 mx-auto bg-gradient-to-bl from-gray-400 via-gray-100 to-gray-400 rounded shadow"
      >
        <h1 class="py-2 text-4xl mb-4">KING MASTER</h1>
        <div class="flex flex-wrap -m-4">
          <div
            v-for="producto in kingMaster"
            :key="producto.name"
            class="lg:w-1/4 md:w-1/2 p-4 w-full"
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
                    format="webp"
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

    <section class="text-gray-900 body-font font-bold">
      <div
        class="container px-5 py-24 mx-auto bg-gradient-to-bl from-gray-400 via-gray-100 to-gray-400 rounded shadow"
      >
        <h1 class="py-2 text-4xl mb-4">KING</h1>
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
                    format="webp"
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

    <section class="text-gray-900 body-font font-bold">
      <div
        class="container px-5 py-24 mx-auto bg-gradient-to-bl from-gray-400 via-gray-100 to-gray-400 rounded shadow"
      >
        <h1 class="py-2 text-4xl mb-4">ESPECIALES</h1>
        <div class="flex flex-wrap -m-4">
          <div
            v-for="producto in especiales"
            :key="producto.name"
            class="lg:w-1/4 md:w-1/2 p-4 w-full"
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
                    format="webp"
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
    const promociones = await $content('productos', 'promociones').fetch()
    const especiales = await $content('productos', 'especiales').fetch()
    const king = await $content('productos', 'king').fetch()
    const kingMaster = await $content('productos', 'kingMaster').fetch()
    const loboMx = await $content('productos', 'loboMx').fetch()

    return {
      promociones,
      especiales,
      king,
      kingMaster,
      loboMx,
    }
  },
}
</script>
