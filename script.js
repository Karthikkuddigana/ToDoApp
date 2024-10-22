import { project } from "./createproject.js";
const dialogProject=document.querySelector("dialog#AddProject")
const dialogTask=document.querySelector("dialog#AddTask")
const showDialogBtn=document.querySelector("#AddProjects"); 
const submitDialogBtn=document.querySelector("input#SubmitProject"); 
const submitTaskBtn=document.querySelector("input#SubmitTask") ;
const inputName=document.querySelector("#ProjectName"); 
const inputDesc=document.querySelector("#ProjectDesc"); 
const sideHeader=document.querySelector("#SideHeader"); 
const taskContent=document.querySelector("#TaskContent"); 
const inputTask=document.querySelector("#TaskName"); 
let currentProject; 
taskContent.addEventListener("click",(e)=>{
    // console.log("div clicked"); 
    if(e.target && e.target.matches("button#AddTask")){
        dialogTask.showModal(); 
    }
})
showDialogBtn.addEventListener("click",(e)=>{
    document.getElementById("myform").reset();
    dialogProject.showModal(); 
})
submitDialogBtn.addEventListener('click',(e)=>{
    // e.preventDefault(); 
    let temp= new project(inputName.value,inputDesc.value)
    if(inputName.value!="" && inputDesc.value!="")
    {
        console.log(project.projectList)
        sideHeader.insertAdjacentHTML("beforeend",`<div class='project-list' id='${inputName.value}'>${inputName.value}</div>`)
    }

    // document.getElementById("myform").reset(); 
    // dialog.close(); 


})
submitTaskBtn.addEventListener('click',()=>{
    // console.log(currentProject.tasks)
    currentProject.tasks.push(inputTask.value); 
    // console.log(currentProject.tasks)
    let taskListToDisplay=""; 
    for(let i of currentProject.tasks){
        taskListToDisplay+=`<div>${i}</div>`
    }
    console.log(taskListToDisplay)
    taskContent.innerHTML=`<div id="${currentProject.name}">${currentProject.name} <div>${currentProject.description}</div><button id="AddTask">Add Task</button></div>${taskListToDisplay}`;
})

sideHeader.addEventListener("click",(e)=>{
    if(e.target && e.target.className=="project-list"){
        console.log("button clicked"); 
        let projectid=e.target.id; 
        let projectContent; 
        for(let i=0; i<project.projectList.length; i++){
            if (project.projectList[i].name==projectid){
                projectContent=project.projectList[i]; 
            }
        }
        currentProject=projectContent; 
        let taskListToDisplay=""; 
        console.log(projectContent.tasks,currentProject.tasks); 
        for(let i of currentProject.tasks){
            taskListToDisplay+=`<div>${i}</div>`
        }
        console.log(taskListToDisplay)
        taskContent.innerHTML=`<div id="${projectContent.name}">${projectContent.name} <div>${projectContent.description}</div><button id="AddTask">Add Task</button></div>${taskListToDisplay}`;
    }

})