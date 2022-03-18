<template>
  <div>
    <Promos />

    <!--Index header -->
    <div
      class="relative h-fit flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0 bg-gradient-to-bl from-gray-400 via-gray-100 to-gray-400"
    >
      <div
        class="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl"
      >
        <div data-aos="fade-up" class="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <div class="max-w-xl mb-6">
            <h2
              class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-indigo-900 sm:text-4xl sm:leading-none"
            >
              TU PROYECTO EN LAS MEJORES MANOS<br class="hidden md:block" />
              CON NUESTRAS
              <span class="inline-block text-red-600">SOLUCIONES</span>
            </h2>
            <p class="text-base font-bold text-gray-900 md:text-lg">
              Diseñamos, fabricamos o equipamos tu proyecto.
              <span class="inline-block font-bold text-red-600 uppercase"
                >cocinas, restaurantes, hoteles, vehículos</span
              >
              <br />
              La fabricación y el diseño es 100% mexicano al igual que nuestras
              refacciones.
            </p>
          </div>
          <div class="flex flex-col items-center md:flex-row">
            <a
              href="/"
              class="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-indigo-900 hover:bg-red-600 focus:shadow-outline focus:outline-none"
            >
              CONTÁCTANOS
            </a>
          </div>
        </div>
      </div>
      <div
        class="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0"
      >
        <nuxt-img
          class="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
          format="webp"
          src="/img/primera.jpg"
          alt=""
        />
      </div>
    </div>

    <!-- Index text intro -->
    <div
      class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div class="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
        <h2
          data-aos="fade-up"
          class="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-red-600 sm:text-4xl sm:leading-none md:mb-6 group"
        >
          <span class="inline-block mb-1 sm:mb-4"> LINEAS DE PRODUCCION </span>
          <div
            class="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100"
          ></div>
          <p class="text-indigo-900 lg:text-base lg:max-w-md">
            Fabricación y diseño de cocinas industriales
          </p>
        </h2>
      </div>
      <div
        data-aos="fade-up"
        class="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2"
      >
        <NuxtLink to="/productos/lobo-mx" aria-label="View Item">
          <div
            class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl"
          >
            <img
              class="object-cover w-full h-56 md:h-64 xl:h-80"
              src="/img/pll.jpg"
              alt=""
            />
            <div
              class="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100"
            >
              <p class="mb-4 text-lg font-bold text-gray-100">LINEA LOBO MX</p>
              <p class="text-sm tracking-wide text-gray-300">
                FABRICACIÓN SOBRE MEDIDA, ESTUFAS, PLANCHAS, FREIDORES,
                SALAMANDRAS, ASADORES.<br />
                LOS MEJORES QUIPOS SELECCIONADOS.
              </p>
            </div>
          </div>
          <p class="m-4 text-center font-bold">LINEA LOBO MX</p>
        </NuxtLink>
        <NuxtLink to="/productos/king" aria-label="View Item">
          <div
            class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl"
          >
            <img
              class="object-cover w-full h-56 md:h-64 xl:h-80"
              src="/img/plk.jpg"
              alt=""
            />
            <div
              class="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100"
            >
              <p class="mb-4 text-lg font-bold text-gray-100">LINEA KING</p>
              <p class="text-sm tracking-wide text-gray-300">
                LAVA LOZA DE 100 A 1000 COMENSALES, TRITURADORES DE
                DESPERDICIOS, MONDADORAS DE PAPAS
              </p>
            </div>
          </div>
          <p class="m-4 text-center font-bold">LINEA KING</p>
        </NuxtLink>
        <NuxtLink to="/productos/king-master" aria-label="View Item">
          <div
            class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl"
          >
            <img
              class="object-cover w-full h-56 md:h-64 xl:h-80"
              src="/img/plkm.jpg"
              alt=""
            />
            <div
              class="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100"
            >
              <p class="mb-4 text-lg font-bold text-gray-100">
                LINEA KING MASTER
              </p>
              <p class="text-sm tracking-wide text-gray-300">
                LOZA LIMPIA, LOZA SUCIA, BARRA DE AUTOSERVICIO, CARROS PARA
                CHAROLAS, ANAQUELES.
              </p>
            </div>
          </div>
          <p class="m-4 text-center font-bold">LINEA KING MASTER</p>
        </NuxtLink>
        <NuxtLink to="/productos/especiales" aria-label="View Item">
          <div
            class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl"
          >
            <img
              format="webp"
              class="object-cover w-full h-56 md:h-64 xl:h-80"
              src="/img/pe.jpg"
              alt=""
            />
            <div
              class="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100"
            >
              <p class="mb-4 text-lg font-bold text-gray-100">ESPECIALES</p>
              <p class="text-sm tracking-wide text-gray-300">
                EQUIPAMOS Y ADAPTAMOS CUALQUIER TIPO DE VEHICULOS CON NUESTROS
                EQUIPOS AMERICA LOBO CHEF
              </p>
            </div>
          </div>
          <p class="m-4 text-center font-bold">ESPECIALES</p>
        </NuxtLink>
      </div>
      <div class="text-center">
        <Nuxt-Link
          to="/productos"
          aria-label=""
          class="inline-flex items-center font-semibold transition-colors duration-200 text-red-600 hover:text-indigo-900"
        >
          P R O D U C T O S
          <svg
            class="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path
              d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"
            ></path>
          </svg>
        </Nuxt-Link>
      </div>
    </div>

    <!-- Index values-->
    <div class="bg-gradient-to-bl from-gray-500 via-gray-100 to-gray-500">
      <div
        class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      >
        <div class="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
          <h2
            class="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-red-600 sm:text-4xl sm:leading-none md:mb-6 group"
          >
            <span data-aos="fade-up" class="inline-block mb-1 sm:mb-4">
              MARCAS</span
            >
            <div
              class="h-1 ml-auto duration-300 origin-left transform scale-x-30 group-hover:scale-x-100"
            ></div>
            <p
              data-aos="fade-up"
              class="text-indigo-900 lg:text-base lg:max-w-md"
            >
              Algunas de las marcas con las que trabajamos.
            </p>
          </h2>
        </div>
        <div
          data-aos="fade-up"
          class="grid gap-5 row-gap-5 sm:grid-cols-1 lg:grid-cols-3"
        >
          <div class="px-12 text-center sm:px-0">
            <div class="flex items-center justify-center mx-auto mb-4">
              <nuxt-img
                class="w-28"
                format="webp"
                src="/img/marcas/imbera.png"
              />
            </div>
          </div>
          <div class="px-12 text-center sm:px-0">
            <div class="flex items-center justify-center mx-auto mb-4">
              <nuxt-img
                class="w-32"
                format="webp"
                src="/img/marcas/migsa.png"
              />
            </div>
          </div>
          <div class="px-12 text-center sm:px-0">
            <div class="flex items-center justify-center mx-auto mb-4">
              <nuxt-img
                class="w-48"
                format="webp"
                src="/img/marcas/rhino.png"
              />
            </div>
          </div>
          <div class="px-12 text-center sm:px-0">
            <div class="flex items-center justify-center mx-auto mb-4">
              <nuxt-img
                class="w-48"
                format="webp"
                src="/img/marcas/mexcut.png"
              />
            </div>
          </div>
          <div class="px-12 text-center sm:px-0">
            <div class="flex items-center justify-center mx-auto mb-4">
              <nuxt-img
                class="w-40"
                format="webp"
                src="/img/marcas/turmix.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- diseno a la medida-->
    <div class="bg-red-700">
      <div
        class="relative flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full"
      >
        <div
          class="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center"
        >
          <nuxt-img
            data-aos="fade-up"
            src="/img/foodtruck.jpg"
            class="object-cover format-webp object-right w-full h-auto lg:w-auto lg:h-full"
            format="webp"
            alt="foto food truck"
          />
        </div>
        <div
          class="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl"
        >
          <div class="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
            <div data-aos="fade-up" class="max-w-xl mb-6">
              <div>
                <p
                  class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-gray-50 uppercase rounded-full bg-teal-accent-400"
                >
                  DISEÑO Y FABRICACION A LA MEDIDA
                </p>
              </div>
              <h2
                class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none"
              >
                ADAPTACION DE<br class="hidden md:block" />
                VEHICULOS
              </h2>
              <p class="text-base text-gray-300 md:text-lg">
                Fabricamos y diseñamos sobre medida.<br />
                Adaptamos nuestros productos a cualquier vehículo.
              </p>
            </div>

            <form>
              <div class="flex items-center mt-4">
                <a
                  href="https://api.whatsapp.com/send?phone=528134421227&text=%C2%A1Hola!%20Me%20gustar%C3%ADa%20agendar%20una%20cita.%20"
                  class="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-gray-100 transition duration-200 rounded shadow-md bg-gray-900 hover:bg-red-400 focus:shadow-outline focus:outline-none"
                >
                  COTIZA
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const lineas = await $content('lineas').fetch()

    return {
      lineas,
    }
  },
}
</script>

<style scoped lang="scss"></style>
