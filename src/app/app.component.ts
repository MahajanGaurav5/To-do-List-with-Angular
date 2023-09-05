import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-do-List with Angular';
  list:any[]=[];
  isTextCentered: boolean = true;

  addTask(value: string) {
    if (value) {
      this.list.push({ name: value, id: this.list.length + 1 });
      this.isTextCentered = false;
    }
  }
  

  // addTask(item:String)
  // {
  //   this.list.push({id:this.list.length,name:item})
  //   console.warn(this.list);
  // }

  removeTask(id:number)
  {
    console.warn(id)
    this.list=this.list.filter(item=>item.id!==id)

  }
}
