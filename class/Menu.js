class Menu{
    constructor(){
        this.items = [];
        this.element;
        this.opened = false;
    }
    addItem(item){
        this.items.push(item);
    }
    render(){
        this.element = document.createElement("div");
        this.element.className = "menu";
        for (var i of this.items) {
            this.element.appendChild(i.render());
        }
        document.body.appendChild(this.element);
    }
    destroy(){
        this.element.remove();
    }
    toggle(){
        if(this.opened){
            this.opened = false;
            this.destroy();
        }else{
            this.opened = true;
            this.render();
        }
    }
}
class MenuBar extends Menu{
    constructor(){
        super();
        this.element = document.createElement("div");
        this.element.className = "menu menuBar"
    }
    addItem(item){
        this.items.push(item);
    }
    render(){
        for (var i of this.items) {
            this.element.appendChild(i.render());
        }
    }
}
