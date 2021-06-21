class Menu{
    constructor(){
        this.items = [];
        this.element;
        this.opened = false;
        this.positionTop;
        this.positionLeft;
    }
    addItem(item){
        this.items.push(item);
    }
    render(){
        this.element = document.createElement("div");
        this.element.className = "menu";
        //this.element.style.position = "absolute";
        this.element.style.left = this.positionLeft;
        this.element.style.top = this.positionTop+2;
        alert(this.positionTop);
        for (var i of this.items) {
            this.element.appendChild(i.render());
        }
        document.body.appendChild(this.element);
    }
    destroy(){
        this.element.remove();
        for (var item of this.items) {
            if(item.subMenu)
                item.closeSub();
        }
    }
    close(){
        this.opened = false;
        this.destroy();
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
