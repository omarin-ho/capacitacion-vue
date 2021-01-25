<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col>
          <p>Nombre: {{usuario.nombre}}</p>
          <p>Año de nacimiento: {{usuario.anioNacimiento}}</p>
          <p>Edad: {{usuario.edad}}</p>
          <p>Eres: {{clasificacion}}</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ComponenteA",
  components:{

  },
  props:{
    usuario:{
      nombre:"",
      anioNacimiento:0,
      edad:0
    }
  },
  data:()=>({
    clasificacion:""
  }),
  created() {
    this.clasifica(this.usuario.edad);
  },
  mounted() {
    this.obtenerDatos();
    this.obtenerMasDatos();
  },
  methods:{
    /**
     * Funcion para clasificar la edad
     * @param edad
     */
    clasifica(edad){
      switch (edad){
        case 20:
          this.clasificacion = "Eres Joven";
          break;
        case 30:
          this.clasificacion = "Ya estas viejo";
          break;
      }
    },
    obtenerDatos(){
      axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
          .then((result) => {
            console.log(result.data);
          });
    },
    obtenerMasDatos(){
      this.$http.get("https://picsum.photos/v2/list")
          .then(response => {
            if (response.data){
              let resultado = response.data;
              console.log(resultado);
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