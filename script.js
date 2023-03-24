const item = document.querySelector("#cube")
const toDoBox = document.querySelector("#todo-box")

item.addEventListener(
    "keyup",
    function(event){
        if (event.key == "Enter"){
            addToDo(this.value)
            this.value = ""
        }
    }
)

const addToDo = (item)=>{
    const listItem = document.createElement("li")
    listItem.innerHTML=`${item}
    <span class="material-symbols-outlined">
        close
    </span>`;
    listItem.addEventListener(
        "click",
        function(){
            this.classList.toggle("done");
        }
    )
    listItem.querySelector("span").addEventListener(
        "click",
        function(){
            listItem.remove();
        }
    )
    toDoBox.appendChild(listItem)
}