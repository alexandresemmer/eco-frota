<template>
  <q-page class="row items-baseline  justify-evenly">
    <div class="q-pa-md" style="width:600px">
      <!-- ..................... -->
      <q-toolbar class="bg-primary text-white shadow-2">
        <q-toolbar-title>
          <i class="las la-history"></i> HIstórico
        </q-toolbar-title>
      </q-toolbar>
      <!-------------------------->
      <q-list>
        <div v-for="hist in historico" :key="hist.codigo">
          <q-item  >
            <q-item-section>
              <q-item-label style='font-size:0.9em'>{{ hist.dtfinal }} até {{ hist.dtfinal }} </q-item-label>
                <q-item-label caption>
                <b>{{ hist.usuario }}</b> <br/>
                <b> {{ hist.carro }} - {{ hist.placa }} </b> <br/>
                <i> {{ hist.motivo }} </i> <br/>
                {{ hist.observacao }}
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-separator spaced inset />
        </div>
      </q-list>
      <!-- ..................... -->
    </div>
  </q-page>
</template>

<script>
import EcoFrota from '../services/ecofrota.js'

export default {
  data () {
    return {
      historico: []
    }
  },
  mounted () {
    this.historico = EcoFrota.getHistoricos()
  }
}
</script>

<style>

</style>
