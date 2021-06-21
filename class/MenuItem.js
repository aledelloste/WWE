class MenuItem{
    constructor(name, func, subMenu){
        this.name = name;
        this.func = func;
        this.subMenu = subMenu;
    }
    render(){
        var it = document.createElement("div");
        it.innerHTML = this.name;
        it.className = "menuItem";
        it.addEventListener("mousedown", () => {
            if (this.func != undefined)
                this.func();
            else if (this.subMenu != undefined)
                this.toggleSub();
            });

        if(this.subMenu){
            //FIX!!!
            this.subMenu.positionTop = it.offsetTop;
            this.subMenu.positionLeft = it.offsetLeft;
        }
        return it;
    }
    toggleSub(){
        this.subMenu.toggle();
    }
    closeSub(){
        this.subMenu.close();
    }
}
