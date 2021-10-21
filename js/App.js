export class Table {
    constructor() {
        console.log(this)
        this.table = this.#createTable()

        this.table.addEventListener("click", this.#getIntoTable)
        this.table.addEventListener("dblclick ", this.#getIntoTable)
    }
    
    render() {
        
    }
    #createTable() {
        const table = document.createElement('div')
        table.classList.add("table");
        
        document.body.appendChild(table);
        return table;
    }
    
    #getIntoTable() {
        this.classList.add("showtable")
    }
}

    const costam = new Table();
    costam.render();
  
