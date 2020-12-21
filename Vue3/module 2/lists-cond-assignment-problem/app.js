const app = Vue.createApp({
  data(){
    return {
      taskInput : '',
      taskList : [],
      listHided : true,
      invisible : "Invisible",
      visible : "Visible"
    }
  },
  methods: {
    addTask(){  
      this.taskList.push(this.taskInput);
    },
    hideList(){
      this.listHided =! this.listHided; 
    },
    deleteTask(idx){
      this.taskList.splice(idx,1);
    }
  }
});

app.mount('#assignment');