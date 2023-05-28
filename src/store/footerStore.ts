import { defineStore } from 'pinia'

const footerStore = defineStore('footerStore',{
    state:()=>{
        return{ 
            tabs:['All','Active','Completed'],
            active: 'All'
        }
    }
})

export default footerStore