const app = Vue.createApp({
data() {
  return {
    name : '',
  };
},
methods : {
  showalert() {
    alert("Alert Showed");
  },
  showInput(event){
    this.name = event.target.value;
  }
}
});

app.mount('#assignment');