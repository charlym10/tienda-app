<template>
  <div id="app">

    <div>
      <b-navbar toggleable="lg" type="dark" variant="info" fixed = "top">
        <b-navbar-brand>Tienda Virtual</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item v-on:click="$router.push({name: 'products'})">Productos</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Buscar"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Buscar</b-button>
              <p>&nbsp; &nbsp;</p>
            </b-nav-form>

            <b-nav-form v-if="!is_auth">
              <b-button
              pill variant="light"
              size="sm"
              class="my-2 my-sm-0"
              v-on:click="$router.push({name: 'user_auth'})"
              >Iniciar sesión</b-button>
            </b-nav-form>

            <b-nav-item-dropdown right v-if="is_auth">
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>Mi Cuenta</em>
              </template>
              <b-dropdown-item v-on:click="$router.push({name: 'profile'})">Perfil</b-dropdown-item>
              <b-dropdown-item v-on:click="logOut">Cerrar sesión</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    
    <div class="main-component" style="margin-top: 60px">
      <router-view v-on:log-in="logIn"></router-view>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'App',

    components: {},

    data: function(){
      return {
        is_auth: localStorage.getItem('isAuth') || false,
        boxTwo: '',
      }
    },

    methods: {
      updateAuth: function() {
        var self = this
        self.is_auth  = localStorage.getItem('isAuth') || false

        if(self.is_auth == false) {
          self.$router.push({name: "user_auth"})
        }
      },

      logIn: function(username) {
        localStorage.setItem('current_username', username)
        localStorage.setItem('isAuth', true)
        this.updateAuth()
      },

      logOut: function() {
        localStorage.removeItem('isAuth')
        localStorage.removeItem('current_username')
        this.updateAuth()
      },
      showMsgBoxTwo: function() {
        this.boxTwo = ''

        const h = this.$createElement

        const messageVNode = h('div', { class: ['foobar'] }, [
          h('p', { class: ['text-center'] }, [
            h('strong', 'Usuario: '),
            'charly',
          ]),
          h('p', { class: ['text-center'] }, [
            h('strong', 'Contraseña: '),
            '123456',
          ]),
        ])
        this.$bvModal.msgBoxOk([messageVNode], {
          title: 'Credenciales',
          buttonSize: 'sm',
          centered: true, size: 'sm'
        })
      }
    },

    beforeCreate: function(){
      // this.$router.push({name: "products"})
      if (this.$route.name === "root") {
        this.$router.push({name: "products"})
      }
    },

    created: function(){
      this.showMsgBoxTwo()
    }
  }
</script>

<style>

</style>
