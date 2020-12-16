<template>
  <div id="app">

    <div>
      <b-navbar toggleable="lg" type="dark" variant="info" fixed = "top">
        <b-navbar-brand>Tienda Virtual</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item>Categorias</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Buscar"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Buscar</b-button>
            </b-nav-form>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>Mi Cuenta</em>
              </template>
              <b-dropdown-item href="#">Perfil</b-dropdown-item>
              <b-dropdown-item href="#">Cerrar sesión</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <div class="main-component" style="margin-top: 60px">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'App',

    components: {},

    data: function(){
      return {
        
      }
    },

    methods: {

    },

    beforeCreate: function(){
      this.$router.push({name: "products"})
    }
  }
</script>

<style>

</style>
