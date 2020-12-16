<template>
    <div id="Products">
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
    export default {
        name: "Products",

        components: {Product},

        data:function(){
            return {
                productos: [],
                idSelect: ''
            }
        },

        created: function() {

            let self = this

            axios.get("https://tienda-virtual-api.herokuapp.com/api/v1/productos/")
                .then((result) => {
                    self.productos = result.data
                })
                .catch((error) => {
                  alert(error);
                });
        }
    }
</script>
