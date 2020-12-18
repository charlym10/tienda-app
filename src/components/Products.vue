<template>
    <div id="Products" class="vld-parent">
        <loading
        :active.sync="isLoading"
        :can-cancel="false" 
        :on-cancel="onCancel"
        :is-full-page="fullPage"
        loader="dots"
        color="#17a2b8"
        height=128
        width=128></loading>
        <b-container class="bv-example-row">
            <b-row class="text-center">
                <b-col></b-col>
                <b-col cols="10">
                    <b-card-group columns>
                        <product
                            v-for="producto in productos"
                            v-bind:key="producto.Nombre"
                            v-bind:Nombre="producto.Nombre"
                            v-bind:Categoria="producto.Categoría"
                            v-bind:Precio="producto.Precio"
                            v-bind:Unidad="producto.Unidad"
                            v-bind:Proveedor="producto.Proveedor"
                            v-bind:Disponibilidad="producto.Disponibilidad"
                        ></product>
                    </b-card-group>
                </b-col>
                <b-col></b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import axios from 'axios';
    import Product from './Product.vue';
    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';
    
    export default {
        name: "Products",

        components: {
            Product,
            Loading,
        },

        data:function(){
            return {
                productos: [],
                idSelect: '',
                isLoading: false,
                fullPage: true
            }
        },

        created: function() {

            let self = this

            this.isLoading = true;

            axios.get("https://tienda-virtual-api.herokuapp.com/api/v1/productos/")
                .then((result) => {
                    this.isLoading = false;
                    self.productos = result.data;
                })
                .catch((error) => {
                    this.isLoading = false;
                    alert(error);
                });
        }
    }
</script>
