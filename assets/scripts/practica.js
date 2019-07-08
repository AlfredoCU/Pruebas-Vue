const app = new Vue({
  el: '#app',
  data: {
    titulo: 'Mi GYM Vue',
    rutinas: [],
    nuevaRutina: '',
  },
  methods: {
    agregarRutina() {
      this.rutinas.push({
        nombre: this.nuevaRutina,
        hecho: false,
      });
      this.nuevaRutina = '';
      localStorage.setItem('gym-vue', JSON.stringify(this.rutinas));
    },
    editarRutina(index) {
      this.rutinas[index].hecho =true;
      localStorage.setItem('gym-vue', JSON.stringify(this.rutinas));
    },
    eliminarRutina(index) {
      this.rutinas.splice(index, 1);
      localStorage.setItem('gym-vue', JSON.stringify(this.rutinas));
    },
    // para almacenar la info en Json.
    created() {
      let datos = JSON.parse(localStorage.getItem('gym-vue'));
      if(datos === null) {
        this.rutinas = [];
      } else {
        this.rutinas = datos;
      }
    }
  }
})
