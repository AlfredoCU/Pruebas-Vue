const app = new Vue({
  el: '#app',
  data: {
    mensaje: 'Propiedades Computadas',
    contador: 0
  },
  computed: {
    invertido() {
      return this.mensaje.split('').reverse().join('');
    },
    color() {
      return {
        'bg-danger' : this.contador <= 40,
        'bg-warning' : this.contador > 40 && this.contador < 65,
        'bg-success' : this.contador >= 65
      }
    }
  }
})
