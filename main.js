class Window{
    //Constructor builds an empty window and returns the main div
    constructor(id, width = "500px", height = "200px", top = "10%", left = "10%", title = ""){
        this.element = document.createElement("div");
        this.id = id;
        this.element.id = id;
        this.element.className = "window";
        this.element.style.top = top;
        this.element.style.left = left;
        this.element.style.width = width;
        this.element.style.height = height;
        this.title = title;

        this.element.addEventListener("mousedown", () => this.select());

        this.element.appendChild(this.createTopBar());

        return this.element;
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
        this.element.children[0].onmouseup = e => {this.closeDragElement()};
        this.element.children[0].onmousemove = e => {this.elementDrag(e)};
    }

      elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        this.pos1 = this.pos3 - e.clientX;
        this.pos2 = this.pos4 - e.clientY;
        this.pos3 = e.clientX;
        this.pos4 = e.clientY;
        // set the element's new position:
        this.element.style.top = (this.element.offsetTop - this.pos2) + "px";
        this.element.style.left = (this.element.offsetLeft - this.pos1) + "px";
      }

      closeDragElement() {
        // stop moving when mouse button is released:
        var elmnt = this.element.children[0];
        elmnt.onmouseup = null;
        elmnt.onmousemove = null;
      }

      select(){
          this.element.style.zIndex = 1;
      }
      deselect(){
          this.element.style.zIndex = 0;
      }

}

function createWindow(id){
    win = new Window(id, "500px", "200px", "15%", "25%", "Finder");
    document.body.appendChild(win);
}
