<template>
  <q-page class="row items-baseline  justify-evenly">
    <div class="q-pa-md" style="width:600px">
      <!-- ..................... -->
      <q-toolbar class="bg-primary text-white shadow-2">
        <q-toolbar-title><i class="las la-car" > &nbsp; </i> Disponível</q-toolbar-title>
      </q-toolbar>
      <q-list bordered>
        <div v-for="veic in veiculos" :key="veic.codigo">
        <q-item  v-if="veic.situacao=='1'"
          class="q-my-sm" clickable v-ripple
          @click="selecionar(veic.codigo,'d')">
          <q-item-section avatar>
            <q-avatar color="primary" text-color="white">
              {{ veic.modelo }}
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ veic.marca }} / {{ veic.modelo }}</q-item-label>
            <q-item-label caption lines="1">{{ veic.placa }}</q-item-label>
          </q-item-section>
        </q-item>
        </div>
      </q-list>
      <!-- ..................... -->
      <q-toolbar class="bg-dark text-white shadow-2">
        <q-toolbar-title><i class="las la-car-alt" > &nbsp; </i> Utilizando</q-toolbar-title>
      </q-toolbar>
      <q-list bordered>
        <div v-for="veic in veiculos " :key="veic.codigo">
          <q-item  v-if="veic.situacao=='2'"
            class="q-my-sm" clickable v-ripple
            @click="selecionar(veic.codigo,'u')">
            <q-item-section avatar>
              <q-avatar color="dark" text-color="white">
                {{ veic.modelo }}
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ veic.marca }} / {{ veic.modelo }}</q-item-label>
              <q-item-label caption lines="2">
                {{ veic.placa }} <br/> {{ veic.usuario }}
              </q-item-label>
            </q-item-section>
          </q-item>
        </div>
      </q-list>
      <!-- ..................... -->
    </div>
    <!-- ..................... -->
    <q-dialog v-model="janela" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6"> {{ janTitulo }}  {{ veiculo.marca }} {{ veiculo.modelo }}</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-input
            filled
            v-model="atividade.motivo"
            label='Motivo'
          />
          <q-input
            filled
            v-model="atividade.observacao"
            label='Observação'
            autogrow
          />
          <div v-if="this.devolver==true"  >
            <br/>
            <q-badge color="primary" style="padding:10px; ">
            KM Final: {{ atividade.kmfinal }} KM
            </q-badge>
            <q-slider v-model="atividade.kmfinal" :min="atividade.kminicial" :max="atividade.kminicial + 500"/>
            <q-input filled v-model="atividade.usuario" label="Usuário" hint="" :dense="true" readonly />
          </div>
        </q-card-section>
        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Salvar" @click="salvar()" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!-- ..................... -->

    <!-- ..................... -->
  </q-page>
</template>

<script>
import EcoFrota from '../services/ecofrota.js'

export default {
  data () {
    return {
      valuekm: 0,
      usuario: "Ciclano",
      janela: false,
      janTitulo: "Devolver",
      devolver: true,
      utilizar: false,
      veiculo: {},
      veiculos: [],
      atividade: {},
      atividades: []
    }
  },
  mounted () {
    this.veiculos = EcoFrota.getVeiculos()
    this.atividades = EcoFrota.getAtividades()
  },
  methods: {
    salvar () {
      if (this.devolver) {
        // Atualiza na atividade
        var id = 0
        var tmpid = this.atividade.codigo
        this.atividades.forEach(function(elem,index){
          if ( elem.codigo == tmpid ) {
            id = index
          }
        });
        this.atividades[id] = this.atividade
        // Atualiza no veiculo
        var id = 0
        var vid = this.atividade.veiculo
        this.veiculos.forEach( function(elem,index) {
            if(elem.codigo == vid){
              id = index
            }
        });
        if( id > 0 ){
          this.veiculos[id].situacao = 1
          this.veiculos[id].usuario  = ''
        }
      }else{
        // Atualiza no veiculo
        var id = 0
        var vid = this.atividade.veiculo
        this.veiculos.forEach(function(elem,index){
          if(elem.codigo == vid){
            id = index
          }
        });
        if( id > 0 ){
          this.veiculos[id].situacao = 2
          this.veiculos[id].usuario  = this.usuario
        }
        // Inclui na atividade
        this.atividades.push(this.atividade)
      }
        this.atividade = {}
        this.veiculo   = {}
    },
    selecionar(codigo,v) {
      var id = 0;
      this.veiculos.forEach(function(elem,index){
        if(elem.codigo == codigo){
          id = index
        }
      });
      this.veiculo = this.veiculos[id]
      if ( v=='d' ) {
        // disponivel
        this.utilizar   = true
        this.devolver   = false
        this.janTitulo  = "Utilizar"
        this.atividade = {}
      }else{
        // utilizando
        this.devolver   = true
        this.utilizar   = false
        this.janTitulo  = "Devolver"
        var id = 0;
        this.atividades.forEach(function(elem,index){
      if(elem.veiculo == codigo){
        id = index
      }
      });
        this.atividade = this.atividades[id]
        this.atividade.kmfinal =  this.atividade.kminicial
      }
      this.janela = true
    }
  }
}
</script>

<style>

</style>
