import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { toDoComponent } from './todo.component';

@NgModule({
  declarations: [
    toDoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [toDoComponent]
})
export class AppModule { }
