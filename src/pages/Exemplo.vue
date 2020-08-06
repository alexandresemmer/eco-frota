<template>
    <Formulario />
</template>

<script>
import Formulario from 'components/Formulario.vue'
export default {
   data(){
     return{
       campos: [{
          vlrid:0,
          label: "Nome",
          type: "text",
          required: false,
          hint:'',
          mask:''
        }, {
          vlrid:1,
          label: "Login",
          type: "text",
          required: true,
          hint:'',
          mask:''
        }, {
          vlrid:2,
          label: "Senha",
          type: "password",
          required: true,
          hint:'',
          mask:''
        }, {
          vlrid:3,
          label: "Celular",
          type: "text",
          required: false,
          hint:'Ex.: (45) 9 8888-7777',
          mask:'(##) # ####-####'
        }]
     }
   },
    mounted () {
      //Formulario.setCampos(this.campos)
  },
}
</script>

<style>

</style>
