import { Table } from "./Table.js";


class App {
    constructor(){

    const addBtn = document.querySelector(".add_btn");

    addBtn.addEventListener("click", this.addTable);
    }
    addTable() {
        const table = new Table();
      
    }

}

const app = new App()