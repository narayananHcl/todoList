import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './todo.component.html'
 
})
export class toDoComponent {
  todoArray=[];
  todo;
  showTodo = false;
  userName;
  Password;
  toDoCount=0;
  
  submit(){
    let userName=this.userName ;
    let pswd = this.Password;    
    if(pswd!='' && pswd!=undefined && userName!='' && userName!=undefined){
    if(userName== "admin" && pswd == "admin"){
       this.showTodo = true;
    }else{
      alert("Not Authorized User");
    }
    }else{
      alert("Please enter Username and Password");
    }
   
  }
  logOut(){
    this.showTodo = false;
    this.userName='';
    this.Password='';

  }
    addTodo(value){     
    if(value!==""){
     this.todoArray.push(value)   
    this.toDoCount = this.todoArray.length;
  }else{
    alert('Enter the Text')
  }
      }

    deleteItem(todo){
  	for(let i=0 ;i<= this.todoArray.length ;i++){
  		if(todo== this.todoArray[i]){
  			this.todoArray.splice(i,1)
  		}
  	}
     this.toDoCount = this.todoArray.length;
  }

  
 
}




