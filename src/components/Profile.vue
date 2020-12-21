<template>
    <div>
        <loading
        :active.sync="isLoading"
        :can-cancel="false"
        :is-full-page="fullPage"
        loader="dots"
        color="#17a2b8"
        :height="128"
        :width="128"
        ></loading>
        <b-tabs content-class="mt-3">
            <b-tab title="General" active>
                <b-container class="bv-example-row">
                    <b-row>
                        <b-col></b-col>

                        <b-col cols="10">
                            <b-card :title="'@' + usuario.usuario" :sub-title="'Estado: ' + usuario.estado">
                                <b-card-text>
                                <p>
                                    <em><strong>Nombre:</strong></em> {{ usuario.nombre }} <br/>
                                    <em><strong>Apellido:</strong></em> {{ usuario.apellido }} <br/>
                                    <em><strong>Rol:</strong></em> {{ usuario.rol }}
                                </p>
                                </b-card-text>
                                <b-button variant="dark">Editar</b-button>
                            </b-card>
                        </b-col>

                        <b-col></b-col>
                    </b-row>
                </b-container>
            </b-tab>
            <b-tab title="Avanzado" disabled><p>I'm a disabled tab!</p></b-tab>
        </b-tabs>
    </div>
</template>

<script>
    import axios from 'axios';
    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';


    export default {
        name: "Profile",

        data: function() {
            return {
                usuario: {},
                isLoading: false,
                fullPage: true,
                is_auth: localStorage.getItem('isAuth') || false,
                current_username: localStorage.getItem('current_username') || false
            }
        },

        components: {
            Loading,
        },

        methods: {
            getUser: function() {

                let self = this

                this.isLoading = true;

                axios.get("https://tienda-virtual-api.herokuapp.com/api/v1/user?usuario=" + self.current_username)
                    .then((result) => {
                        this.isLoading = false;
                        self.usuario = result.data;
                    })
                    .catch((error) => {
                        this.isLoading = false;
                        alert(error);
                    });
            }
        },

        created: function() {
            if (this.is_auth != false) {
                this.getUser()
            } else {
                this.$router.push({name: "user_auth"});
            }           
        }
}
</script>