const app = Vue.createApp({
  data(){
    return {
      result : 0,
      finalResult : 37
    }
  },
  computed:{
    thirtySeven(){
      if (this.result < this.finalResult) {
        return "Not there yet"
      } else if (this.result > this.finalResult) {
        return "Too much!"
      } else {
        return this.result;
      }
    }
  },
  watch: {
    result(value){
        const that = this;
        setTimeout(function () { 
          if(value >= 37) {
            return that.result = 0;
          } 
      }, 5000);  
      }
  },
  methods : {
    add(num){
      return this.result = this.result + num;
    }
  },
});

app.mount('#assignment');