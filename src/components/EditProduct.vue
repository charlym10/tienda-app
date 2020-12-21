<template>
    <div id="EditProduct">
        <b-modal @ok="handleOk" v-bind:id="nombre" size="lg" title="Editar producto">
            <form ref="form" @submit.stop.prevent="handleSubmit">

                <b-form-group
                label="Nombre:"
                label-for="nombre-input"
                invalid-feedback="El nombre es requerido">
                    <b-form-input
                        id="name-input"
                        :disabled=true
                        v-model="nombre"
                        placeholder="Ingrese el nombre del producto"
                        required>
                    </b-form-input>
                </b-form-group>

                <b-form-group
                label="Categoria:"
                label-for="Categoria-input"
                invalid-feedback="La categoria es requerida">
                    <b-form-select
                    id="Categoria-input"
                    class="mb-2 mr-sm-2 mb-sm-0"
                    :options="[{ text: 'Seleccione la categoría', value: null }, 'Accesorios', 'Cámaras', 'Mesas oficina', 'Neveras', 'Sillas oficina', 'Celulares', 'Computadores']"
                    v-model="categoria"
                    required>
                    </b-form-select>
                </b-form-group>

                <b-form-group
                label="Precio:"
                label-for="precio-input"
                invalid-feedback="El precio es requerido">
                    <b-form-input
                        id="Precio-input"
                        v-model="precio"
                        type="number"
                        placeholder="Ingrese el Precio del producto"
                        required>
                    </b-form-input>
                </b-form-group>

                <!-- <b-form-group
                label="Unidad:"
                label-for="Unidad-input"
                invalid-feedback="La unidad es requerida">
                    <b-form-input
                        id="name-input"
                        v-model="unidad"
                        placeholder="Ingrese la unidad del producto"
                        required>
                    </b-form-input>
                </b-form-group> -->

                <b-form-group
                label="Proveedor:"
                label-for="proveedor-input"
                invalid-feedback="El proveedor es requerido">
                    <b-form-select
                    id="proveedor-input"
                    class="mb-2 mr-sm-2 mb-sm-0"
                    :options="[{ text: 'Seleccione el proveedor', value: null }, 'COLOMBIANA DE COMERCIO S.A Y/O ALKOSTO S.A', 'MAKRO SUPERMAYORISTA S.A.S']"
                    v-model="proveedor"
                    required>
                    </b-form-select>
                </b-form-group>

                <b-form-group
                label="Disponibilidad:"
                label-for="disponibilidad-input"
                invalid-feedback="La disponibilidad es requerida">
                    <b-form-input
                        id="disponibilidad-input"
                        v-model="disponibilidad"
                        type="number"
                        placeholder="Ingrese la disponibilidad del producto"
                        required>
                    </b-form-input>
                </b-form-group>

            </form>
        </b-modal>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "EditProduct",

    props: {
        id: Number,
        nombre: String,
        categoria: String,
        precio: Number,
        unidad: String,
        proveedor: String,
        disponibilidad: Number,
        url: String,
        getProducts: Function,
    },

    methods: {
        handleOk(bvModalEvt) {
            // Prevent modal from closing
            // bvModalEvt.preventDefault()
            // Trigger submit handler
            console.log(bvModalEvt)
            let self = this

            var datos = {
                id: self.id,
                nombre: self.nombre,
                categoria: self.categoria,
                precio: self.precio,
                unidad: self.unidad,
                proveedor: self.proveedor,
                disponibilidad: self.disponibilidad,
                url: self.url,
            }

            axios.put("https://tienda-virtual-api.herokuapp.com/api/v1/product", datos)
                .then((result) => {
                    // alert("Se modificó el producto satisfactoriamente.");
                    this.getProducts();
                })
                .catch((error) => {
                  alert(error);
                });
        },
    }
}
</script>