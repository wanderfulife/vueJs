const app = Vue.createApp({
  data() {
    return {
      name: 'Jonathan',
      age: 28,
      image: 'https://images-na.ssl-images-amazon.com/images/I/41c20oxdQcL._SY445_QL70_ML2_.jpg',
      prepopulate: "Balance ton mail :"
    };
  },
  methods: {
    agePlusFive() {
      return this.age + 5;
    },
    random() {
      return Math.random()
    },
    grab() {

    }
  }
});
app.mount('#assignment');