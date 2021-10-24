import { Table } from "./Table.js";


class App {
    constructor() {

        const addBtn = document.querySelector(".add_table_btn");

        addBtn.addEventListener("click", this.addTable);
        this.displayFromLocalStorage();

    }
    addTable() {

        const table = new Table();

    }
    displayFromLocalStorage() {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);

            const serializedTable = localStorage.getItem(key);
            const deserializedTable = JSON.parse(serializedTable);
            console.log(deserializedTable)
        }
    }
    displayTables({table}) {
        
    }

}

const app = new App()

