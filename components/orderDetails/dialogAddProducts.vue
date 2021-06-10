<template>
    <v-dialog v-model="dialog" persistent max-width="700">
        <v-card>
            <v-col class="py-6 px-4">
                <v-row> <h2> Add the new product </h2> </v-row>
                <v-row id="form" class="pt-2">
                    <v-form ref="form" lazy-validation >
                        <v-row>
                            <v-col cols="12" class="pa-0">
                                <label for="name">Name</label>
                                <v-text-field ref="name" id="name" name="name" type="text" v-model="newProduct.name" required :rules="rules.name" title="This field is required" background-color="#F5F5F5" shaped dense solo flat style="border-radius:10px" />
                            </v-col>
                            <v-col cols="12" sm="4" class="py-0 pl-0 pr-1">
                                <label for="sku">SKU</label>
                                <v-text-field ref="sku" id="sku" name="sku" type="text" v-model="newProduct.sku" :rules="rules.sku" required title="This field is required" background-color="#F5F5F5" shaped dense solo flat style="border-radius:10px" />
                            </v-col>
                            <v-col cols="6" sm="4" class="py-0 px-1">
                                <label for="quantity">Quantity</label>
                                <v-text-field ref="quantity" id="quantity" name="quantity" type="text" v-model="newProduct.quantity" :rules="rules.quantity" required title="This field is required" background-color="#F5F5F5" shaped dense solo flat style="border-radius:10px" />
                            </v-col>
                            <v-col cols="6" sm="4" class="py-0 pl-1 pr-0">
                                <label for="price">Price</label>
                                <v-text-field ref="price" id="price" name="price" type="text" v-model="newProduct.price" :rules="rules.price" required title="This field is required" background-color="#F5F5F5" shaped dense solo flat style="border-radius:10px" />
                            </v-col>
                            <v-col cols="12" class="pa-0">
                                <label for="image-url">Image URL - Optional</label>
                                <v-text-field ref="image-url" id="image-url" name="image-url" type="text" v-model="newProduct.imageUrl" background-color="#F5F5F5" shaped dense solo flat style="border-radius:10px" />
                            </v-col>
                        </v-row>
                    </v-form>
                </v-row>
                <v-row justify="end"> 
                    <v-btn color="#F64C72" class="mr-1" text @click="closeDialog()">Close</v-btn>
                    <v-btn color="#F64C72" class="ml-1 site-btn" style="width: 100px" :disabled="validateForm" @click="saveProduct()">Save</v-btn>
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
                quantity: [ v => !!v || 'Quantity is required', v => /^(|[1-9][0-9]*)$/.test(v) || 'Quantity must be a valid number', ],
                price: [ v => !!v || 'Price is required', v => /^[0-9]+(\.[0-9]{1,2})?$/.test(v) || 'Price must be a valid number',],
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
            if(this.newProduct.sku != '' && this.newProduct.name != '' &&  this.newProduct.quantity != '' && /^(|[1-9][0-9]*)$/.test(this.newProduct.quantity) 
            && this.newProduct.price != '' && /^[0-9]+(\.[0-9]{1,2})?$/.test(this.newProduct.price) )
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