//This class defines a system tray bar displayed at the edge of the desktop, useful to have infos and launch applications

class SysTray{
    static SysTrayPosition = Object.freeze({
        TOP_EDGE: Symbol("top_edge"),
        BOTTOM_EDGE: Symbol("bottom_edge"),
        LEFT_EDGE: Symbol("left_edge"),
        RIGHT_EDGE: Symbol("right_edge"),
    })
    
    constructor(position = SysTray.SysTrayPosition.TOP_EDGE){
        this.position = position;
        this.widgets = new Map();

        this.element = document.createElement("div");
        this.element.className = "sysTray";

        if(position == SysTray.SysTrayPosition.TOP_EDGE || position == SysTray.SysTrayPosition.BOTTOM_EDGE){
            //horizontal bar
            this.element.style.width = "100%";
            this.element.style.height = "30px";
            if(position == SysTray.SysTrayPosition.TOP_EDGE)
                this.element.style.top = "0";
            else
                this.element.style.bottom = "0";
        }else{
            //vetical bar
            this.element.style.width = "30px";
            this.element.style.height = "100%";
            if(position == SysTray.SysTrayPosition.LEFT_EDGE)
                this.element.style.left = "0";
            else
                this.element.style.right = "0";
        }
        
        //Create central widget div
        this.centralWidget = document.createElement("div");
        this.centralWidget.className = "sysTray centralWidget";
        this.element.appendChild(this.centralWidget);

        //Create widget space
        this.widgetSpace = document.createElement("div");
        this.widgetSpace.className = "sysTray widgetSpace";
        this.element.appendChild(this.widgetSpace);

        //prevents right click
        this.element.addEventListener("contextmenu", (e) => {e.preventDefault()});
        //add the tray to desktop
        document.body.appendChild(this.element);
    }
    addWidget(id, widget){
        //Aggiungi a una lista di widget per successiva eliminazione o aggiornamento
        //widget.element.style.marginLeft = "5%";
        this.widgets.set(id, widget);
        this.widgetSpace.appendChild(widget.element);
    }
    addCentralWidget(widget){
        this.centralWidget.appendChild(widget.element);
    }
    removeWidget(id){
        this.widgetSpace.removeChild(this.widgets.get(id).element);
        return this.widgets.delete(id);
    }
}

class TrayWidget{
    static TrayWidgetType = {
        ICON: Symbol("icon"),
        TEXT: Symbol("text")
    }
    constructor(type, text){
        if(type == TrayWidget.TrayWidgetType.ICON){
            //text is a path to an image
        }else{
            //text is used as widget
            this.element = document.createElement("div");
            this.element.innerText = text;
        }
    }
}