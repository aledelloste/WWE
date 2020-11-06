class Window{

    //Constructor builds an empty window and returns the main div
    constructor(id, width = "500px", height = "200px", top = "10%", left = "10%", title = "", isResizable = true, min_w = 100, min_h = 50){
        this.element = document.createElement("div");
        this.id = id;
        this.element.id = id;
        this.element.className = "window";
        this.element.style.top = top;
        this.element.style.left = left;
        this.element.style.width = width;
        this.element.style.height = height;
        this.title = title;
        this.isResizable = isResizable;
        this.min_w = min_w;
        this.min_h = min_h;

        this.element.addEventListener("mousedown", () => this.select());

        this.element.appendChild(this.createTopBar());

        if(this.isResizable){
            var rsz = document.createElement("div");
            rsz.className = "resizeIcon";
            rsz.addEventListener("mousedown", e => this.resize());
            this.element.appendChild(rsz);
        }

    }


    resize(e){
        e = e || window.event;
        e.preventDefault();

        window.onmouseup = e => {this.closeDragElement()};
        window.onmousemove = e => {this.elementResize(e)};
    }
    elementResize(e){
        var w = e.pageX - this.element.getBoundingClientRect().left;
        var h = e.pageY - this.element.getBoundingClientRect().top;

        if(w > this.min_w){
            this.element.style.width = w + 'px';
        }
        if (h > this.min_h) {
            this.element.style.height = h + 'px';
        }
    }

    //Create the top bar of the window
    createTopBar(){
        var bar = document.createElement("div");
        bar.className = "window topBar";
        bar.addEventListener("mousedown", e => {
            this.drag(e);
        });
        var img = document.createElement("img");
        img.src = "img/icon/close_icon.gif";
        img.addEventListener("mousedown", e => {
            this.destroyWindow();
        });
        img.className = "barIcon";
        img.style.left = "2px";
        bar.appendChild(img);

        var title = document.createElement("text");
        title.textContent = this.title;
        title.className = "windowTitle"
        bar.appendChild(title);

        return bar;
    }

    //Destroy the window
    destroyWindow(){
        win = this.element.remove();
    }

    drag(e){
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        this.pos3 = e.clientX;
        this.pos4 = e.clientY;
        //this.element.children[0]
        window.onmouseup = e => {this.closeDragElement()};
        //this.element.children[0]
        window.onmousemove = e => {this.elementDrag(e)};
    }

      elementDrag(e) {
        e = e || window.event;
        e.preventDefault();

        if((e.clientX > 10 && e.clientX < window.innerWidth - 10)
            &&
            (e.clientY > 10 && e.clientY < window.innerHeight - 10)){
            // calculate the new cursor position:
            this.pos1 = this.pos3 - e.clientX;
            this.pos2 = this.pos4 - e.clientY;
            this.pos3 = e.clientX;
            this.pos4 = e.clientY;
            // set the element's new position:
            this.element.style.top = (this.element.offsetTop - this.pos2) + "px";
            this.element.style.left = (this.element.offsetLeft - this.pos1) + "px";
        }

      }

      closeDragElement() {
        // stop moving when mouse button is released:
        // var elmnt = this.element.children[0];
        // elmnt.onmouseup = null;
        // elmnt.onmousemove = null;

        window.onmousemove = null;
        window.onmouseup = null;
      }

      select(){
          this.element.style.zIndex = 1;
      }
      deselect(){
          this.element.style.zIndex = 0;
      }

}

class TextEditor extends Window{
    constructor(){
        super("textEditor", "500px", "500px", undefined, undefined, "Text Editor", true, 100, 100);
        var body = document.createElement("TEXTAREA");
        body.style.backgroundColor = "white";
        body.style.width = "100%";
        body.style.height = "100%";

        this.element.appendChild(body);
    }
}

function createWindow(id){
    win = new Window(id, "500px", "200px", "15%", "25%", "Finder", false, undefined, undefined);
    document.body.appendChild(win.element);
}
function createEditor(id) {
    txt = new TextEditor();
    document.body.appendChild(txt.element);
}
