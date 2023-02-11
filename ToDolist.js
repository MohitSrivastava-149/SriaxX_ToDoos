var listCount = 1;

document.getElementById("inputBox").addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
        initTodo();
    }
    // do something
  });




document.getElementById('button').onclick = function(){
    initTodo();
}


function initTodo(){
    let inputValue = document.getElementById('inputBox').value;
    
    addToDo(inputValue, document.getElementById('table'));
    listCount++;
    document.getElementById("inputBox").value = "";
}

function addToDo(inputVal, table){
    var tr = document.createElement('tr');
        
    tr.appendChild(getTodoCheckBoxTD());
    tr.appendChild(getTodoTextTD(inputVal));
    tr.appendChild(GetdeleteTodoButton());
    tr.id = "tr"+listCount;
    table.appendChild(tr);
}

function CompleteTodo(checkBoxElement, pElement){
    alert("Hi");
}

function GetdeleteTodoButton(){
    var delButton = document.createElement('button');
    delButton.type = 'button';
    delButton.id = "delButton :- "+listCount;

    var img = document.createElement('img')
    img.setAttribute("src", "fotu.jpeg");
    img.setAttribute("width", "25px");
    img.setAttribute("height", "25px");
    delButton.appendChild(img);

    delButton.addEventListener('click', function(){ 
    var pID = delButton.id.substring(13, delButton.id.length);
    // alert(pID);
    var tr =  document.getElementById("tr"+pID);
    let text = "Press a button!\nEither OK or Cancel.";
    if (confirm(text) == true) {
        document.getElementById("table").removeChild(document.getElementById("tr"+pID));
    }
    })
    return delButton;
}


// (1st)
function getTodoCheckBoxTD(){
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = "cb"+listCount;
    checkbox.addEventListener("click", e => {

        // Check and uncheck todo
        var pID = checkbox.id.substring(2, checkbox.id.length);
        var pEl =  document.getElementById("p"+pID);

        if(checkbox.checked){  
            var valTxt =  pEl.innerHTML;
                pEl.innerHTML = "";
                pEl.appendChild(getDelElement(valTxt, pID));
        }else{
            var delText =  document.getElementById("del"+pID).innerHTML;
                pEl.removeChild(document.getElementById("del"+pID)) ;
                pEl.innerHTML = delText;
        }
    });
    var td = document.createElement('td'); 
    td.appendChild(checkbox);
    return td;
}

function getTodoTextTD(inputV){
    var p = document.createElement('p');
        p.innerHTML =  inputV;
        p.id = "p"+listCount;
        var td = document.createElement('td'); 
        td.appendChild(p);
        return td;
}

function getDelElement(txt, id){
    var del = document.createElement('del'); 
        del.id =  "del"+id;
        del.innerHTML = txt;
        return del;
}