import { Injectable, signal, SimpleChange, WritableSignal } from '@angular/core';
import {data} from '../data.module'
import { TTask } from '../types';

@Injectable({
    providedIn: 'root'
})

export class TasksService {
    static tasks:WritableSignal<TTask[]> =  signal<TTask[]>(TasksService.init())

    static init(){
      let storedTask = localStorage.getItem('tasks')
      storedTask ?? this.saveTasks(data) 

      storedTask = localStorage.getItem('tasks')

      const tasks = storedTask ? JSON.parse(storedTask) : []

      return tasks
    }

    static saveTasks(tasks: TTask[]){
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    static reLoading(){
      const storedTask = localStorage.getItem('tasks')
      const tasks = storedTask ? JSON.parse(storedTask) : []

      TasksService.tasks.set(tasks)

    }

    static updateName(id: number, name: string) {
      const newTasks = TasksService.tasks().map(task => task.id == id ? {...task, name: name} : task)
      TasksService.saveTasks(newTasks)
      
      this.reLoading()
    }

    static updateDescription(id: number, description: string){
      const newTasks = TasksService.tasks().map(task => task.id == id ? {...task, description: description} : task)
      TasksService.saveTasks(newTasks)

      this.reLoading()
    }
    static updateDone(id: number, done: boolean) {
      const newTasks = TasksService.tasks().map(task => task.id == id ? {...task, done: done} : task)
      TasksService.saveTasks(newTasks)

      this.reLoading()
    }

}
