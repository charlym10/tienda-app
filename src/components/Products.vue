<template>
    <div id="Products" class="vld-parent">
        <loading
        :active.sync="isLoading"
        :can-cancel="false"
        :is-full-page="fullPage"
        loader="dots"
        color="#17a2b8"
        :height="128"
        :width="128"
        ></loading>
        <b-container class="bv-example-row">
            <b-row class="text-center">
                <b-col></b-col>
                <b-col cols="10">
                    <b-card-group columns>
                        <product
                            v-for="producto in productos"
                            v-bind:key="producto.id"
                            v-bind:id="producto.id"
                            v-bind:nombre="producto.nombre"
                            v-bind:categoria="producto.categoria"
                            v-bind:precio="producto.precio"
                            v-bind:unidad="producto.unidad"
                            v-bind:proveedor="producto.proveedor"
                            v-bind:disponibilidad="producto.disponibilidad"
                            v-bind:url="producto.url"
                            v-bind:getProducts="getProducts"
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

        data: function(){
            return {
                productos: [],
                idSelect: '',
                isLoading: false,
                fullPage: true
            }
        },

        methods: {
            getProducts: function() {

                let self = this

                this.isLoading = true;

                axios.get("https://tienda-virtual-api.herokuapp.com/api/v1/products")
                    .then((result) => {
                        this.isLoading = false;
                        self.productos = result.data;
                    })
                    .catch((error) => {
                        this.isLoading = false;
                        alert(error);
                    });
            }
        },

        created: function() {
            this.getProducts()            
        }
    }
</script>
