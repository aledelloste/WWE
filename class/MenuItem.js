class MenuItem{
    constructor(name, func){
        this.name = name;
        this.func = func;
    }
    render(){
        var it = document.createElement("div");
        it.innerHTML = this.name;
        it.className = "menuItem";
        it.addEventListener("mousedown", () => {this.func();})
        return it;
    }
}
