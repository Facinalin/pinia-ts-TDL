import { defineStore } from 'pinia'
import { ToDoItem } from '../types/data'
import request from '../utils/request'

export const mainStore = defineStore('mainStore',{
    state:()=>{
        return{ 
            toDoList:[] as ToDoItem[],
            active: 'All'
        }
    },
    actions:{
        //<ToDoItem[]>泛型的概念
        async getToDoList(){
           const { data } = await request.get<ToDoItem[]>('/')
           this.toDoList = data
           
        },
        //刪除單筆
        async deleteItem(id:number){
        await request.delete(`/${id}`)
        this.getToDoList();
        },
        //根據指定id更新每一個資料物件的任一屬性
        async updateToDo(id:number,key:string,value:boolean | string){
        await request.patch(`/${id}`,{
            [key]:value
        })
        this.getToDoList();
        },
        //新增事項
        async addToDo(title:string){
        await request.post(`/`,{
         title,
         done: false
        })  
        //id不用是因為json-server會自帶
        this.getToDoList(); 
        },
        async updateAllStatus(done:boolean){
        const arrPromise = this.toDoList.map(item=>{
        return this.updateToDo(item.id,'done',done)
        })
        await Promise.all(arrPromise)
        this.getToDoList();
        }
    },
    getters:{
       //如果類型報錯有兩種方法
       //法一：
    //    mainRadioStatus():boolean {
    //     return this.toDoList.every(item=> item.done)
    //    }
       //法二：
       //使用state會上方找state自動推斷
        mainRadioStatus(state) {
        return state.toDoList.every((item)=> item.done)
       }
    }
})
