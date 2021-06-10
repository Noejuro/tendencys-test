<template>
    <v-dialog v-model="dialog" persistent max-width="700">
        <v-card>
            <v-col class="py-6">
                <v-row> <p style="font-size: 14px"> <span class="obligatory-field">*</span>Campos Obligatorios </p> </v-row>
                <v-row id="form">
                    <v-form ref="form" lazy-validation >
                        <v-row>
                            <v-col cols="12" class="pa-0">
                                <label for="sku"><span class="obligatory-field">*</span>SKU</label>
                                <v-text-field ref="sku" id="sku" name="sku" type="text" v-model="newProduct.sku" :rules="rules.sku" required title="This field is required" background-color="#F5F5F5" shaped dense solo flat style="border-radius:10px" />
                            </v-col>
                            <v-col cols="12" class="pa-0">
                                <label for="name"><span class="obligatory-field">*</span>Name</label>
                                <v-text-field ref="name" id="name" name="name" type="text" v-model="newProduct.name" required :rules="rules.name" title="This field is required" background-color="#F5F5F5" shaped dense solo flat style="border-radius:10px" />
                            </v-col>
                            <v-col cols="12" class="pa-0">
                                <label for="quantity"><span class="obligatory-field">*</span>Quantity</label>
                                <v-text-field ref="quantity" id="quantity" name="quantity" type="text" v-model="newProduct.quantity" :rules="rules.quantity" required title="This field is required" background-color="#F5F5F5" shaped dense solo flat style="border-radius:10px" />
                            </v-col>
                            <v-col cols="12" class="pa-0">
                                <label for="price"><span class="obligatory-field">*</span>Price</label>
                                <v-text-field ref="price" id="price" name="price" type="text" v-model="newProduct.price" :rules="rules.price" required title="This field is required" background-color="#F5F5F5" shaped dense solo flat style="border-radius:10px" />
                            </v-col>
                            <v-col cols="12" class="pa-0">
                                <label for="image-url">Image URL</label>
                                <v-text-field ref="image-url" id="image-url" name="image-url" type="text" v-model="newProduct.imageUrl" background-color="#F5F5F5" shaped dense solo flat style="border-radius:10px" />
                            </v-col>
                        </v-row>
                    </v-form>
                </v-row>
                <v-row justify="end"> 
                    <v-btn color="error" @click="closeDialog()">Close</v-btn>
                    <v-btn color="success" :disabled="validateForm" @click="saveProduct()">Save</v-btn>
                </v-row>
            </v-col>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: { dialog: Boolean },
    data() {
        return {
            newProduct: {
                sku: '',
                name: '',
                quantity: '',
                price: '',
                imageUrl: '',
            },
            rules: {
                name: [ v => !!v || 'Name is required', ],
                sku: [ v => !!v || 'Sku is required', ],
                quantity: [ v => !!v || 'Quantity is required', ],
                price: [ v => !!v || 'Price is required', ],
            }
        }
    },
    methods: {
        saveProduct() {
            this.$emit('saveProduct', this.newProduct)
            this.resetInputs();
            this.$refs.form.resetValidation();
        },
        resetInputs() {
            this.newProduct = {
                sku: '',
                name: '',
                quantity: '',
                price: '',
                imageUrl: '',
            }
        },
        closeDialog() {
            this.$emit('closeDialog');
            this.resetInputs();
            this.$refs.form.resetValidation();
        }
    },
    computed: {
        validateForm() {
            if(this.newProduct.sku != '' && this.newProduct.name != '' &&  this.newProduct.quantity != '' &&  this.newProduct.price != '' )
                return false;
            else
                return true;
        }
    }
}
</script>

<style scoped>
    .obligatory-field { color: red; font-weight: 700; }
</style>