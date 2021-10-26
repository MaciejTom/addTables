import { Table } from "./Table.js";
import { Person } from "./Person.js";


class App {
    constructor() {

        const addBtn = document.querySelector(".add_table_btn");

        addBtn.addEventListener("click", e => this.addTable(e));

        this.arrayOfTables = [];

    }
    addTable(e) {

        const table = new Table();

        this.arrayOfTables.push(table);

        this.serializeArrayOfTables(this.arrayOfTables)

    }
    serializeArrayOfTables(tables) {

        const serializedArrayOfTable = tables.map(table => {
            const container = {};
            
            container[table.id] = JSON.stringify(table)

            return container;

        })
        this.addTablesToLocal(serializedArrayOfTable);

    }
    addTablesToLocal(array) {
        array.forEach(table => {
            
            const key = Object.keys(table)[0];
            const value = table[key]

            localStorage.setItem(key, value)
          
        })
    }
   
}

const app = new App()

window.onload = function () {

    if (localStorage.length) {
        for (let i = 0; i < localStorage.length; i++) {
         
            
            const key = localStorage.key(i)
            
            if (key.length == 13) {
                const value = JSON.parse(localStorage.getItem(key))
            
                const table = new Table(value.leftPx, value.topPx, value.id)
            }
           
           

        }
    }
}