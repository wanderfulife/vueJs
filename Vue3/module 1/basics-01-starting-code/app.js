const app = Vue.createApp({
  data() {
    return {
      courseGoal: 'Finish the course and learn Vue !',
      vueLink: 'https://vuejs.org/',
      outputGoal1 : 'Learn Vue like a Jedi',
      outputGoal2 : 'Master Vue like a Jedi',
    };  
  },
  methods : {
    outputGoal(){
      const randomNumber = Math.random();
      if (randomNumber > 0.5){
        return this.outputGoal1;
      } else {
        return this.outputGoal2;
      }
    }
  } 
});

app.mount("#user-goal");
