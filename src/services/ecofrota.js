export default {
  getCamposUsuarios: () =>{
    var campos  = [{
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
    return campos
  },
  getUsuarios: () => {
    var usuarios = [
      {
        codigo: 1,
        nome: "Fulano",
        login: "fulano",
        senha: "12345",
        fone: "(45) 9 8888-7777",
        grupo: 1,
        stt_cod: 1
      },
      {
        codigo: 1,
        nome: "Ciclano",
        login: "ciclano",
        senha: "12345",
        fone: "(45) 9 9873-5555",
        grupo: 1,
        stt_cod: 1
      },
      {
        codigo: 1,
        nome: "Beltrano",
        login: "beltrano",
        senha: "12345",
        fone: "(45) 9 9833-1122",
        grupo: 1,
        stt_cod: 1
      }
     ]
    return usuarios
  },
  getHistoricos: () => {
    var hist = [
      {
        id: 1,
        dtinicial: '30/07/2020 17:34:00',
        dtfinal: '30/07/2020 17:34:09',
        usuario: 'Fulano',
        carro: 'UNO',
        placa: 'BDX4C63',
        kminicial: 1545,
        kmfinal: 1457,
        motivo: 'Ir na padaria',
        observacao: 'Fui comprar pão'
      }, {
        id: 2,
        dtinicial: '12/08/2020 10:00:00',
        dtfinal: '12/08/2020 11:12:09',
        usuario: 'Ciclano',
        carro: 'Ka',
        placa: 'CCC-8888',
        kminicial: 7985,
        kmfinal: 7998,
        motivo: 'Mercado',
        observacao: 'Fazer o rancho'
      }
    ]

    return hist
  },
  getVeiculos: () => {
    var veiculos = [
      {
        codigo: 1,
        marca: "FIAT",
        modelo: "Uno",
        ano: 2020,
        placa: "BDX4C63",
        quilometragem: "7900",
        ultima_revisao: "15-07-2020",
        situacao: 1,
        usuario: ""
      },
      {
        codigo: 2,
        marca: "GM",
        modelo: "Onyx",
        ano: 2019,
        placa: "BDX9956",
        quilometragem: "15000",
        ultima_revisao: "15-07-2020",
        situacao: 1,
        usuario: ""
      },
      {
        codigo: 3,
        marca: "Ford ",
        modelo: "Ka",
        ano: 2001,
        placa: "ASD154",
        quilometragem: "98000",
        ultima_revisao: "15-07-2020",
        situacao: 2,
        usuario: "Fulano"
      }
    ]
    return veiculos
  },
  getCamposVeiculo: () => {
    var veiculos = [
      {
        vlrid:0,
        label: "Marca",
        type: "text",
        required: false,
        hint:'',
        mask:''
      }, {
        vlrid:1,
        label: "Modelo",
        type: "text",
        required: false,
        hint:'',
        mask:''
      }, {
        vlrid:2,
        label: "Ano",
        type: "text",
        required: false,
        hint:'',
        mask:''
      }, {
        vlrid:3,
        label: "Placa",
        type: "text",
        required: false,
        hint:'',
        mask:''
      }, {
        vlrid:4,
        label: "Quilometragem",
        type: "text",
        required: false,
        hint:'',
        mask:''
      }, {
        vlrid:5,
        label: "Ultima Revisão",
        type: "text",
        required: false,
        hint:'',
        mask:''
      }
    ]
    return veiculos
  },
  getAtividades: () => {
    var atividades = [
      {
        codigo: 1,
        usuario: "Fulano",
        veiculo: 3,
        inicio: "05-07-2020",
        fim: "",
        kminicial: 98000,
        kmfinal: 0,
        observacao: "buscar pão",
        motivo: "Casa até a padaria",
        situacao: 1
      }
    ]
    return atividades
  }
}
