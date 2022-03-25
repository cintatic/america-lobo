<template>
  <div class="">
    <Nav />

    <a
      href="https://api.whatsapp.com/send?phone=525532156875&text=%C2%A1Hola!%20Me%20gustar%C3%ADa%20cotizar%20un%20equipo.%20"
      class="float"
      target="_blank"
    >
      <font-awesome-icon
        :icon="['fab', 'whatsapp']"
        class="fa fa-whatsapp my-float text-white"
      />
    </a>
    <Nuxt />
    <Footer />
  </div>
</template>
<style lang="scss">
/* Boton Whatsapp */
.float {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: rgb(17 24 39);
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 2px 2px 3px #999;
  z-index: 100;
}

.my-float {
  margin-top: 16px;
}
</style>
