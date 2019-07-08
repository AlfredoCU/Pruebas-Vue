const app = new Vue({
  // La id que afectara al elemeneto.
  el: '#app',
  // Objetos.
  data: {
    // Propiedades como atributos, arreglos y objetos.
    titulo: 'Hola mundo desde vue',
    frutas: ['Manzana', 'Mango', 'Pera'],
    personas: [
      {nombre: 'Alfredo', edad: 22},
      {nombre: 'Angelica', edad: 25},
      {nombre: 'Victor', edad: 30},
      {nombre: 'Samantha', edad: 15}
    ],
    nuevaPersona: '',
    totalEdad: 0
  },
  // Métodos.
  methods: {
    agregarPersona () {
      // this. para indicar que queremos una propiedad de data.
      this.personas.push({
        nombre: this.nuevaPersona, edad: 17
      });
      // Limpiamos campos.
      this.nuevaPersona = '';
    }
  },
  // También es un objeto. La ventaja es que se actualiza.
  computed: {
    sumarEdades() {
      this.totalEdad = 0;
      for(persona of this.personas) {
        this.totalEdad = this.totalEdad + persona.edad;
      }
      return this.totalEdad;
    }
  }
})
