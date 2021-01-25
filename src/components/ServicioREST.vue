<template>
  <div>
    <div v-for="imagen in lstImagenes" :key="imagen.id">
      <img :src="imagen.download_url">
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ServicioREST",
  data:()=>({
    atributo:1,
    objeto:{
      userId:Number,
      id:"",
      title:String,
      completed:Boolean

    },
    objeto2:[
      {
        body:"",
        id:0
      }
    ],
    lstImagenes:[{
      id:"",
      author:"",
      width:"",
      height:"",
      url:"",
      download_url:""
    }]
  }),
  mounted() {
    this.obtenerDatos().then(()=> {
      this.obtenerImagenes();
      this.obtenerLista();
    });

  },
  methods:{
    obtenerDatos(){
      return new Promise((resolve, reject) => {
        axios.get('https://jsonplaceholder.typicode.com/todos/' + this.atributo)
            .then((result) => {
              console.log('Datos del servicio rest: ', result.data);
              this.objeto = result.data;
              resolve(result.data);
            }).catch(error => {
          console.log(error);
          reject(error);
        });
      });
    },
    obtenerLista(){
      axios.get('https://jsonplaceholder.typicode.com/posts')
          .then((result) => {
            console.log('Datos del servicio 2 rest: ', result.data);
            this.objeto2 = result.data;
          });
    },
  obtenerImagenes(){
    this.$http.get("https://picsum.photos/v2/list")
        .then(response => {
          if (response.data){
            let resultado = response.data;


            resultado.forEach((item) => {
              console.log(item);
              this.lstImagenes.push(item);
            });

          }
        }).catch(error => {
      console.log(error);
    });
  }
  }
}
</script>

<style scoped>

</style>