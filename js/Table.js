export class Table {
    constructor() {

        this.isDragable = false;
        this.table = this.#createTable()

        this.table.addEventListener("dblclick", e => this.#getInTable(e))
        // this.table.addEventListener("contextmenu", this.#getOutTable)
        this.isHidden = true;

        this.table.addEventListener("mousedown", e => this.#mouseDown(e))
        this.table.addEventListener("mouseup", e => this.#mouseUp(e))

        this.table.addEventListener("mousemove", e => this.#mouseMove(e))

        this.insertDivX
        this.insertDivY


    }
    #mouseMove(e) {
        
        
        if (this.isDragable && this.isHidden) {
            
            this.table.style.left = `${e.clientX - this.insertDivX}px`;
            this.table.style.top = `${e.clientY - this.insertDivY}px`;

        }

    }

    render() {

    }
    #createTable() {
        const table = document.createElement('div')
        table.classList.add("table");
        document.body.appendChild(table);
        return table;
    }

    #getInTable() {
        console.log(this.isHidden)

        if (this.isHidden) {   

            this.isHidden = !this.isHidden
            this.table.classList.add("showtable")

            

        } else {
            this.isHidden = !this.isHidden
            this.table.classList.remove("showtable")
        }


    }
    #getOutTable() {
        if (this.isHidden) {
            this.isDragable = !this.isDragable
            console.log("conterx")
            this.classList.remove("showtable")
            !this.isShowed
        }
    }

    #mouseDown(e) {
        // console.log("na dół")
        this.isDragable = !this.isDragable
        this.insertDivX = e.offsetX
        this.insertDivY = e.offsetY
       


    }
    #mouseUp() {

        this.isDragable = !this.isDragable
    }

}



