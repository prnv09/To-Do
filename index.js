const toDo = document.getElementById("todo")
const addTodoBtn = document.getElementById("add-todo")
const allDoneBtn = document.getElementById("all-done")
const toDoList = document.getElementById("todo-list")

let v = localStorage.getItem("todo")
//console.log(v)

if(v){
    toDoArray = JSON.parse(v)
}
else{
    var toDoArray = []
}

let idCount= toDoArray.length

//printing tasks that stored already
for (let i=0;i<toDoArray.length;i++){
    const msg= document.createTextNode(toDoArray[i])
    const li = document.createElement("li")
    li.setAttribute("id",`${i+1}`)
    li.setAttribute("class","list-item")
    // li.addEventListener("onclick",remove1(li.id))
    li.appendChild(msg)
    const cutP = document.createElement("span")
    cutP.setAttribute("id",`${i+1}`)
    cutP.innerHTML="&nbsp;&nbsp;&nbsp; &#x2702;"
    li.appendChild(cutP)
    // li.innerHTML+="&nbsp;&nbsp;&nbsp; &#x2702;"
    toDoList.insertBefore(li,toDoList.children[0])
    toDo.value=""

}

//Adding tasks
addTodoBtn.addEventListener("click",function(){
    idCount+=1
    const msg= document.createTextNode(toDo.value)
    toDoArray.push(toDo.value)
    localStorage.setItem("todo",JSON.stringify(toDoArray))
    // localStorage.setItem(`${idCount}`,`${toDo.value}`)
    var li = document.createElement("li")
    
    li.setAttribute("id",`${idCount}`)
    li.setAttribute("class","list-item")
 
    li.appendChild(msg)
    const cutP = document.createElement("span")
    cutP.setAttribute("id",`${idCount}`)
    cutP.innerHTML="&nbsp;&nbsp;&nbsp; &#x2702;"
    li.appendChild(cutP)
    toDoList.insertBefore(li,toDoList.children[0])
    toDo.value=""
   
})


//removing all tasks
allDoneBtn.addEventListener("click",function(){
    toDoList.innerHTML=""
    localStorage.clear()
   
})

// removing task which clicked
toDoList.onclick = (e) => {
    const dltId = e.target.id;
    const dltItem = document.getElementById(dltId)
    //console.log(dltItem.innerText[0])
    dltItem.remove() 
    toDoArray = localStorage.getItem("todo")
    toDoArray = JSON.parse(toDoArray)
   toDoArray = arrayRemove(toDoArray,dltItem.innerText[0])
   localStorage.setItem("todo",JSON.stringify(toDoArray))
   // console.log(toDoArray)
    // localStorage.removeItem(`${dltId}`)   
} 
function arrayRemove(arr, value) { 
    
    return arr.filter(function(ele){ 
        return ele != value; 
    });
}