<template>
    <div id="AuthUser" class="auth_user">
        <div>
            <div class="container h-100" style="margin-top: 120px">
                <div class="row justify-content-center h-100">
                    <div class="col-sm-4 align-self-center text-center">
                        <div class="card shadow">
                            <div class="card-body">
                                <b-icon icon="person-fill" font-scale="8"></b-icon>
                                <br/>
                                <b-form @submit.prevent="processAuthUser" v-if="show">
                                    <b-input-group class="mb-2">
                                        <b-input-group-prepend is-text>
                                            <b-icon icon="person-fill"></b-icon>
                                        </b-input-group-prepend>
                                        <b-form-input
                                        type="text"
                                        v-model="user_in.usuario"
                                        placeholder="ID Usuario"
                                        ></b-form-input>
                                    </b-input-group>

                                    <b-input-group class="mb-2">
                                        <b-input-group-prepend is-text>
                                            <b-icon icon="key-fill"></b-icon>
                                        </b-input-group-prepend>
                                        <b-form-input
                                        type="password"
                                        v-model="user_in.password"
                                        placeholder="Contraseña"
                                        ></b-form-input>
                                    </b-input-group>
                                    <div class="text-center">
                                        <b-button variant="primary" type="submit">Iniciar sesión</b-button>
                                    </div>
                                </b-form>

                            </div>
                        </div>
                        <br/>
                        <div class="text-left">
                            <b-alert
                            :show="dismissCountDown"
                            dismissible
                            variant="danger"
                            @dismissed="dismissCountDown=0"
                            @dismiss-count-down="countDownChanged"
                            >
                            {{ message }}
                            </b-alert>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios';

    export default {
        name: "UserAuth",

        data: function() {
            return {
                user_in: {
                    usuario:"",
                    password:""
                },
                show: true,
                is_auth: localStorage.getItem('isAuth') || false,
                dismissSecs: 5,
                dismissCountDown: 0,
                message: ''
            }
        },

        methods: {
            processAuthUser: function() {
                var self = this

                axios.post("https://tienda-virtual-api.herokuapp.com/api/v1/user/auth", self.user_in,  {headers: {}})
                    .then((result) => {
                        // alert("Autenticación Exitosa");
                        self.$emit('log-in', self.user_in.usuario);
                        self.$router.push({name: "products"})
                    })
                    .catch((error) => {
                        
                        if (error.response.status == "404")
                            self.message = 'El usuario no existe.'
                            self.showAlert()
                        
                        if (error.response.status == "403")
                            self.message = 'Contraseña incorrecta.'
                            self.showAlert()
                    });
            },

            countDownChanged(dismissCountDown) {
                this.dismissCountDown = dismissCountDown
            },

            showAlert() {
                this.dismissCountDown = this.dismissSecs
            }
        },

        created: function() {
            if (this.is_auth != false) {
                this.$router.push({name: "products"});
            }       
        }
}
</script>