<template>
  <section class="text-gray-600 body-font relative">
    <div class="absolute inset-0 bg-gray-300">
      <iframe
        marginheight="0"
        marginwidth="0"
        title="map"
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.463446767305!2d-99.07201298462633!3d19.34907554835903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fd8f399c2077%3A0x3c1b3e8cefb5c998!2sAmerica%20Lobo%20Cheff%20MX!5e0!3m2!1sen!2smx!4v1646689154433!5m2!1sen!2smx"
        width="100%"
        height="100%"
        frameborder="0"
      ></iframe>
    </div>
    <div class="container px-5 py-32 mx-auto flex">
      <div
        class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
      >
        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
          CONTACTO
        </h2>
        <p class="leading-relaxed mb-5 text-gray-600">
          ¿Tienes alguna pregunta, duda o comentario? no dudes en ponerte en
          contacto.
        </p>
        <!--
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-600"
            >Email</label
          >
          <input
            id="email"
            type="email"
            name="email"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <label for="message" class="leading-7 text-sm text-gray-600"
            >Message</label
          >
          <textarea
            id="message"
            name="message"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <button
          class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Button
        </button>
        -->
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
          <li>
            <a href="mailto:ventas@americalobochef.com">
              <font-awesome-icon
                class="text-3xl text-indigo-900 hover:text-red-500"
                :icon="['fas', 'envelope']"
              />
            </a>
          </li>
        </ul>
        <p class="text-xs text-gray-500 mt-3"></p>
      </div>
    </div>
  </section>
</template>
