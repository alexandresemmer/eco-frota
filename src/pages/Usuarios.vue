<template>
  <q-page class="row items-baseline  justify-evenly">
    <div class="q-pa-md" style="width:600px">
      <!-- ..................... -->
      <q-toolbar class="bg-primary text-white shadow-2">
        <q-toolbar-title>
          <i class="las la-user"></i> Usuários
        </q-toolbar-title>
      </q-toolbar>
      <!-- ..................... -->
 <!-- TAB COM AS OPÇÕES -->
      <q-tabs
        v-model="tab"
        dense
        class="bg-blue text-white shadow-2">
        <q-tab name="form"     label="Cadastro" />
        <q-tab name="listagem" label="Listagem" />
      </q-tabs>
      <!-- xxxxxxxxxxxxxx -->
      <!-- DIALOG DE  MENSAGEM -->
      <q-dialog v-model="dialmsg.visible">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{ dialmsg.titulo}}</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          {{ dialmsg.mensagem }}
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
      </q-dialog>
      <!-- xxxxxxxxxxxxxx -->
      <!-- FORMULÁRIO DE CADASTRO/ALTERAÇÃO -->
      <template v-if="tab == 'form'"> <br/>
        <q-form  @submit="salvarForm" @reset="limparForm" class="q-gutter-md">
        <template v-if=" idUsuario > 0 ">
           <q-input filled v-model="idUsuario" label="Id" hint="" :dense="dense" readonly />
        </template>
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
        <div>
          <q-btn label="Salvar" type="submit" color="primary"/>
          <q-btn label="Limpar" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
        </q-form>
      </template>
      <!-- LISTAGEM COM OS CADASTROS -->
      <template v-else> <br/>
        <q-list bordered separator>
        <div v-for="usr in usuarios" :key="usr.codigo">
          <q-item clickable v-ripple
          @click=envForm(usr) >
            <q-item-section>
              <q-item-label>{{ usr.codigo }} - {{ usr.nome }} </q-item-label>
              <q-item-label caption>{{ usr.fone }}</q-item-label>
            </q-item-section>
          </q-item>
        </div>
        </q-list>
      </template>
      <!-- ..................... -->
    </div>
  </q-page>
</template>

<script>
import EcoFrota from '../services/ecofrota.js'

export default {
  data () {
    return {
      tab: 'listagem',
      dialmsg:  {'visible':false,'titulo':'','mensagem':''},
      isPwd: true,
      idUsuario: 0,dense:true,
      valores: [],
      usuarios: [],
      campos: []
    }
  },
  mounted () {
    this.usuarios = EcoFrota.getUsuarios()
    this.campos = EcoFrota.getCamposUsuarios()
  },

  methods: {
    envForm(obj){
    this.limparForm()
      this.tab = 'form'
      this.idUsuario = obj.codigo
      this.valores.push(obj.nome)
      this.valores.push(obj.login)
      this.valores.push(obj.senha)
      this.valores.push(obj.fone)
    },
    salvarForm () {
      var codigo = this.idUsuario
      if(codigo > 0){
        // altera
        var id = 0;
        this.usuarios.forEach(function(elem,index){
          if(elem.codigo == codigo){
            id = index
          }
        })
        this.usuarios[id] ={
          "codigo":codigo,
          "nome":this.valores[0],
          "login":this.valores[1],
          "senha":this.valores[2],
          "fone":this.valores[3],
          "grupo":"1", "stt_cod":"1"
        }
        this.mostrarMensagem("Alteração","Usuário alterado com sucesso")
      }else{
        // inclui
        codigo = this.usuarios.length + 1
        this.usuarios.push(
          {"codigo":codigo,
          "nome":this.valores[0],
          "login":this.valores[1],
          "senha":this.valores[2],
          "fone":this.valores[3],
          "grupo":"1", "stt_cod":"1"}
        )
        this.mostrarMensagem("Novo Usuário","Usuário cadastrado com sucesso")
      }
      this.idUsuario = codigo

    },
    validarCampo(obj){
    if( obj.required ){
      return val => val && val.length > 0 || obj.label+' é obrigatório '
    }
      return null
    },
    limparForm () {
      this.idUsuario = 0
      this.valores   = []
    },
    mostrarMensagem(titulo,msg){
      this.dialmsg.titulo   = titulo
      this.dialmsg.mensagem = msg
      this.dialmsg.visible  = true
    }

  }
}
</script>

<style>

</style>
