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

class Alert extends Window{
    constructor(options, func){
        super("alert", "400px", "150px", undefined, undefined, "Alert!", false, undefined, undefined);
        var body = document.createElement("div");
        body.style.backgroundColor = "#ccc";
        body.style.height = "100%";
        var buttons = [];
        for (var i = 0; i < options.length; i++) {
            var b = document.createElement("button");
            b.innerHTML = options[i];
            b.onclick = func[i];
            b.className = "dialogButton"
            b.style.position = "absolute";
            b.style.top = "80%";
            b.style.left = ((i*15) + 5) + "%";
            body.appendChild(b);
        }

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
function createAlert(){
    var al = new Alert(["Win", "Txt"], [createWindow, createEditor]);
    document.body.appendChild(al.element);
}
function init(){

    var n = new Menu();
    n.addItem(new ManuItem("System Informations", function(){alert("AAAAAA")}));
    n.addItem(new ManuItem("SubMenu2", undefined));
    n.addItem(new ManuItem("SubMenu3", undefined));
    n.addItem(new ManuItem("Credits", undefined));

    var m = new MenuBar();
    m.addItem(new ManuItem("System", function(){n.toggle()}));
    m.addItem(new ManuItem("Menu1", undefined));
    m.addItem(new ManuItem("Menu2", undefined));
    m.addItem(new ManuItem("Menu3", undefined));
    m.addItem(new ManuItem("Menu4", undefined));
    m.render();
    document.body.appendChild(m.element);
}
