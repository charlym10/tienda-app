<template>
    <div id="EditProduct">
        <b-modal @ok="handleOk" v-bind:id="Nombre" size="lg" title="Editar producto">
            <form ref="form" @submit.stop.prevent="handleSubmit">

                <b-form-group
                label="Nombre:"
                label-for="Nombre-input"
                invalid-feedback="El nombre es requerido">
                    <b-form-input
                        id="name-input"
                        :disabled=true
                        v-model="Nombre"
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
                    :options="[{ text: 'Seleccione la categoría', value: null }, 'Accesorios', 'Cámaras', 'Mesas oficina', 'Neveras', 'Sillas oficina']"
                    v-model="Categoria"
                    required>
                    </b-form-select>
                </b-form-group>

                <b-form-group
                label="Precio:"
                label-for="Precio-input"
                invalid-feedback="El precio es requerido">
                    <b-form-input
                        id="Precio-input"
                        v-model="Precio"
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
                        v-model="Unidad"
                        placeholder="Ingrese la unidad del producto"
                        required>
                    </b-form-input>
                </b-form-group> -->

                <b-form-group
                label="Proveedor:"
                label-for="Proveedor-input"
                invalid-feedback="El proveedor es requerido">
                    <b-form-select
                    id="Proveedor-input"
                    class="mb-2 mr-sm-2 mb-sm-0"
                    :options="[{ text: 'Seleccione el proveedor', value: null }, 'COLOMBIANA DE COMERCIO S.A Y/O ALKOSTO S.A', 'MAKRO SUPERMAYORISTA S.A.S']"
                    v-model="Proveedor"
                    required>
                    </b-form-select>
                </b-form-group>

                <b-form-group
                label="Disponibilidad:"
                label-for="Disponibilidad-input"
                invalid-feedback="La disponibilidad es requerida">
                    <b-form-input
                        id="Disponibilidad-input"
                        v-model="Disponibilidad"
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
        Nombre: String,
        Categoria: String,
        Precio: Number,
        Unidad: String,
        Proveedor: String,
        Disponibilidad: Number,
    },

    methods: {
        handleOk(bvModalEvt) {
            // Prevent modal from closing
            // bvModalEvt.preventDefault()
            // Trigger submit handler
            console.log(bvModalEvt)
            let self = this

            var datos = {
                Nombre: self.Nombre,
                Categoría: self.Categoria,
                Precio: self.Precio,
                Unidad: self.Unidad,
                Proveedor: self.Proveedor,
                Disponibilidad: self.Disponibilidad
            }

            axios.put("https://tienda-virtual-api.herokuapp.com/api/v1/producto/actualizacion", datos)
                .then((result) => {
                    // alert("Se modificó el producto satisfactoriamente.");
                    window.location.href = 'products';
                })
                .catch((error) => {
                  alert(error);
                });
        },
    }
}
</script>