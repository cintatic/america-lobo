<template>
  <div
    class="bg-gradient-to-b from-gray-400 via-gray-100 to-gray-400 shadow-lg z-30"
  >
    <div
      class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen md:px-24 lg:px-8"
    >
      <div class="relative flex items-center justify-between">
        <NuxtLink to="/">
          <div class="w-80">
            <nuxt-img format="webp" src="/img/logos/Logo-al.png" />
          </div>
        </NuxtLink>
        <ul class="flex items-center hidden space-x-8 lg:flex text-2xl">
          <li>
            <NuxtLink
              to="/productos"
              aria-label="Our product"
              title="Our product"
              class="font-bold tracking-wide text-indigo-900 hover:text-red-500 transition-colors duration-200"
              >PRODUCTOS</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/nosotros"
              aria-label="Our product"
              title="Our product"
              class="font-bold tracking-wide text-indigo-900 hover:text-red-500 transition-colors duration-200"
              >NOSOTROS</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/blog"
              aria-label="Product pricing"
              title="Product pricing"
              class="font-bold tracking-wide text-indigo-900 hover:text-red-500 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >BLOG</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/contacto"
              aria-label="About us"
              title="About us"
              class="font-bold tracking-wide text-indigo-900 hover:text-red-500 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >CONTACTO</NuxtLink
            >
          </li>
        </ul>
        <ul class="flex items-center hidden space-x-8 lg:flex">
          <li>
            <a href="tel:5628348062">
              <font-awesome-icon
                class="text-2xl ml-5 text-indigo-900 hover:text-red-500"
                :icon="['fas', 'phone']"
              />
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=525532156875&text=%C2%A1Hola!%20Me%20gustar%C3%ADa%20cotizar%20un%20equipo.%20"
            >
              <font-awesome-icon
                class="text-3xl text-indigo-900 hover:text-red-500"
                :icon="['fab', 'whatsapp']"
              />
            </a>
          </li>
          <li>
            <a href="https://g.page/americalobo?share">
              <font-awesome-icon
                class="text-3xl text-indigo-900 hover:text-red-500"
                :icon="['fas', 'location-dot']"
              />
            </a>
          </li>
        </ul>
        <div class="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
            @click="isMenuOpen = true"
          >
            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              ></path>
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              ></path>
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              ></path>
            </svg>
          </button>
          <div v-if="isMenuOpen" class="absolute top-0 left-0 w-full z-30">
            <div class="p-5 bg-gray-100 border rounded shadow-sm">
              <div class="flex items-center justify-between mb-4">
                <div>
                  <a
                    href="/"
                    aria-label="Company"
                    title="Company"
                    class="inline-flex items-center"
                  >
                    <nuxt-img
                      format="webp"
                      src="/img/logos/Logo-al.png"
                      class="w-80"
                    />
                  </a>
                </div>
                <div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    @click="isMenuOpen = false"
                  >
                    <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <nav>
                <ul class="space-y-4">
                  <li>
                    <NuxtLink
                      to="/productos"
                      aria-label="Our product"
                      title="Our product"
                      class="font-bold tracking-wide text-indigo-900 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >Productos</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink
                      to="/nosotros"
                      aria-label="Our product"
                      title="Our product"
                      class="font-bold tracking-wide text-indigo-900 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >Nosotros</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink
                      to="/blog"
                      aria-label="Product pricing"
                      title="Product pricing"
                      class="font-bold tracking-wide text-indigo-900 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >Blog</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink
                      to="/contacto"
                      aria-label="Product pricing"
                      title="Product pricing"
                      class="font-bold tracking-wide text-indigo-900 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >Contacto</NuxtLink
                    >
                  </li>
                  <ul class="flex mt-4 justify-center space-x-4">
                    <li>
                      <a href="tel:5628348062">
                        <font-awesome-icon
                          class="text-2xl mx-5 text-indigo-900"
                          :icon="['fas', 'phone']"
                        />
                      </a>
                      <a
                        href="https://api.whatsapp.com/send?phone=525532156875&text=%C2%A1Hola!%20Me%20gustar%C3%ADa%20cotizar%20un%20equipo.%20"
                      >
                        <font-awesome-icon
                          class="text-3xl mx-5 text-indigo-900"
                          :icon="['fab', 'whatsapp']"
                        />
                      </a>

                      <a href="https://g.page/americalobo?share">
                        <font-awesome-icon
                          class="text-3xl mx-5 text-indigo-900"
                          :icon="['fas', 'location-dot']"
                        />
                      </a>
                    </li>
                  </ul>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    }
  },
}
</script>
