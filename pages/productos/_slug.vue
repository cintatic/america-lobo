<template>
  <div>
    <div>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <nuxt-img
              format="webp"
              alt="ecommerce"
              class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              :src="producto.image"
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">
                {{ producto.linea }}
              </h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                {{ producto.name }}
              </h1>
              <p class="leading-relaxed">
                {{ producto.description }}
              </p>
              <div
                class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"
              ></div>
              <div class="flex">
                <button
                  class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                >
                  COTIZA
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const producto = await $content('productos', params.slug).fetch()

    return {
      producto,
    }
  },
}
</script>
