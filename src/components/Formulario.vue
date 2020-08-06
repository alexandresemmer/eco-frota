<template>
  <div v-for="cp in campos" :key="cp.vlrid">
          <template v-if="cp.type == 'password'">
            <q-input
                filled
                v-model="valores[cp.vlrid]"
                :label=cp.label
                :type="isPwd ? 'password' : 'text'"
                lazy-rules
                :rules="[ validarCampo(cp) ]"
                :hint=cp.hint>
               <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"  @click="isPwd = !isPwd"
                  />
                </template>
            </q-input>
          </template>
          <template v-else>
              <q-input
              filled
              v-model="valores[cp.vlrid]"
              :label=cp.label
              lazy-rules
              :rules="[ validarCampo(cp) ]"
              :mask=cp.mask
              :hint=cp.hint
            />
          </template>
        </div>
</template>

<script>

export default {
  data(){
    return {
       isPwd: true,
       campos: [{
                  vlrid:0,
                  label: "teset",
                  type: "text",
                  required: false,
                  hint:'',
                  mask:''
                },{
                  vlrid:1,
                  label: "teset e",
                  type: "text",
                  required: false,
                  hint:'',
                  mask:''
                }
              ],
       valores : []
    }
  },

  methods: {
        setCampos(c){
          this.campos = c
        },
        setValores(v){
          this.valores = v
        },
        getCampos(){
          return this.campos
        },
        getValores(){
          return this.valores
        },
       validarCampo(obj){
        if( obj.required ){
          return val => val && val.length > 0 || obj.label+' é obrigatório '
        }
          return null
        }
    }
}
</script>

<style>

</style>
