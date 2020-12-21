<template>
    <div id="Product">
        <b-card v-bind:title="nombre" v-bind:img-src="url" img-alt="Image" img-top>
            <b-card-text>
                <h3 style="color: #FF0000">${{ formatPrice(precio) }}</h3>
                <small class="text-muted">Unidades disponibles: {{ disponibilidad }}</small>
            </b-card-text>
            <template #footer>
                <b-button v-b-modal="nombre" v-bind:disabled="!is_auth" variant="warning">Editar</b-button>
                <edit-product
                    v-bind:id="id"
                    v-bind:nombre="nombre"
                    v-bind:categoria="categoria"
                    v-bind:precio="precio"
                    v-bind:unidad="unidad"
                    v-bind:proveedor="proveedor"
                    v-bind:disponibilidad="disponibilidad"
                    v-bind:url="url"
                    v-bind:getProducts="getProducts"
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
            id: Number,
            nombre: String,
            categoria: String,
            precio: Number,
            unidad: String,
            proveedor: String,
            disponibilidad: Number,
            url: String,
            getProducts: Function,
            idSelect: String,
        },
        
        data: function(){
            return {
                is_auth: localStorage.getItem('isAuth') || false
            }
        },

        methods: {
            formatPrice(value) {
                let val = (value/1).toFixed(2).replace('.', ',')
                return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            }
        }
    }
</script>