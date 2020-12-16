<template>
    <div id="Product">
        <!-- <h3>Nombre: {{Nombre}}</h3>
        <h3>Categoría: {{Categoria}}</h3>
        <h3>Precio: {{Precio}}</h3>
        <h3>Unidad: {{Unidad}}</h3>
        <h3>Proveedor: {{Proveedor}}</h3>
        <h3>Disponibilidad: {{Disponibilidad}}</h3> -->
        <b-card v-bind:title="Nombre" img-src="https://i.pinimg.com/originals/c5/12/e1/c512e1cba1b6867fca63d6889b69fde3.png" img-alt="Image" img-top>
            <b-card-text>
                <h3 style="color: #FF0000">${{ formatPrice(Precio) }}</h3>
                <small class="text-muted">Unidades disponibles: {{ Disponibilidad }}</small>
            </b-card-text>
            <template #footer>
                <b-button v-b-modal="Nombre" variant="warning">Editar</b-button>
                <edit-product
                    v-bind:Nombre="Nombre"
                    v-bind:Categoria="Categoria"
                    v-bind:Precio="Precio"
                    v-bind:Unidad="Unidad"
                    v-bind:Proveedor="Proveedor"
                    v-bind:Disponibilidad="Disponibilidad"
                ></edit-product>
            </template>
        </b-card>
    </div>
</template>

<script>
import EditProduct from './EditProduct.vue'
    export default {
  components: { EditProduct },
        name: "Product",
        
        props: {
            Nombre: String,
            Categoria: String,
            Precio: Number,
            Unidad: String,
            Proveedor: String,
            Disponibilidad: Number,
            idSelect: String
        },

        methods: {
            formatPrice(value) {
                let val = (value/1).toFixed(2).replace('.', ',')
                return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            }
        }
    }
</script>