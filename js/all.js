
const todoApp = {
    data() {
      return {
        newTask: '',
        todoTask: [],
      }
    },
    methods: {
        addNewTask(){
            let task = this.newTask;
            if(task === ''){
                alert('Please type your task');
                return
            }
            this.todoTask.push({
                todoItem: task,
                status: false,
                edit: true
            })
            this.newTask = '';
        },
        deleteTask(index){
            this.todoTask.splice(index,1);
        },
        editTask(edit , index){
            edit = !edit;
            this.todoTask[index].edit = edit;  
            console.log(this.todoTask[index].edit);  
        },
        checkEdit(todoItem,index){
            let task = document.querySelector('.editEnter');
            this.todoTask[index].todoItem = task.value; ;
            this.todoTask[index].edit = !this.todoTask[index].edit;   
        }
    },
  }
  
  Vue.createApp(todoApp).mount('#todo')