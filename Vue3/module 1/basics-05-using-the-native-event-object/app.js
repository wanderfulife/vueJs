const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: ''
    };
  },
   
  watch: {
    counter(value){
      if (value > 50){
        const that =this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    },
  },
    // name(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = value + ' ' + 'Wander';
    //   }
    // }
  

  computed: {
    fullname(){
      if (this.name === '' && this.lastName === '') {
        return '';
      } 
        return this.name + ' ' + this.lastName;
    },
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    }
  }
});

app.mount('#events');