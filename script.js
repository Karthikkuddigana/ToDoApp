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
const projectDisplay=document.querySelector("#ProjectDisplay"); 
let currentProject; 
//AddTask dialog Button
taskContent.addEventListener("click",(e)=>{
    // console.log("div clicked"); 
    if(e.target && e.target.matches("button#AddTask")){
        dialogTask.showModal(); 
    }
})
//AddProject dialog button 
showDialogBtn.addEventListener("click",(e)=>{
    document.getElementById("myform").reset();
    dialogProject.showModal(); 
})
//AddProject logic 
submitDialogBtn.addEventListener('click',(e)=>{
    // e.preventDefault(); 
    let temp= new project(inputName.value,inputDesc.value)
    if(inputName.value!="" && inputDesc.value!="")
    {
        console.log(project.projectList)
        projectDisplay.insertAdjacentHTML("beforeend",`<div class='project-list' id='${inputName.value}'>${inputName.value}<button class="remove-project" id='${inputName.value}'>Remove Project</button></div>`)
    }

    // document.getElementById("myform").reset(); 
    // dialog.close(); 


})
// Add task logic
submitTaskBtn.addEventListener('click',()=>{
    // console.log(currentProject.tasks)
    currentProject.tasks.push(inputTask.value); 
    // console.log(currentProject.tasks)
    let taskListToDisplay=""; 
    for(let i in currentProject.tasks){
        taskListToDisplay+=`<div>${currentProject.tasks[i]}<span><button id='${i}' class="delete-task">Delete</button></span></div>`
    }
    console.log(taskListToDisplay)
    taskContent.innerHTML=`<div id="${currentProject.name}">${currentProject.name} <div>${currentProject.description}</div><button id="AddTask">Add Task</button></div>${taskListToDisplay}`;
})

//RemoveTask logic
taskContent.addEventListener("click",(e)=>{
    console.log("delete task button clicked",e.target); 
    if(e.target && e.target.matches(".delete-task")){
        let taskIndex=e.target.getAttribute("id"); 
        console.log(taskIndex); 
        console.log("delete task clicked"); 
        currentProject.tasks.splice(taskIndex,1); 
        let taskListToDisplay=""; 
    for(let i in currentProject.tasks){
        taskListToDisplay+=`<div>${currentProject.tasks[i]}<span><button id='${i}' class="delete-task">Delete</button></span></div>`
    }
    // console.log(taskListToDisplay)
    taskContent.innerHTML=`<div id="${currentProject.name}">${currentProject.name} <div>${currentProject.description}</div><button id="AddTask">Add Task</button></div>${taskListToDisplay}`;
    }
})
// Project load logic 
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
        console.log(currentProject.tasks); 
        for(let i in currentProject.tasks){
            console.log(i)
            taskListToDisplay+=`<div>${(currentProject.tasks)[i]}<span><button id='${i}' class="delete-task">Delete</button></span></div>`
        }
        console.log(taskListToDisplay)
        taskContent.innerHTML=`<div id="${projectContent.name}">${projectContent.name} <div>${projectContent.description}</div><button id="AddTask">Add Task</button>${taskListToDisplay}`;
    }

})

//Remove Project 
sideHeader.addEventListener("click",(e)=>{
    if(e.target && e.target.matches(".remove-project")){
        console.log("delete project clicked"); 
        for(let i in project.projectList){
            if(project.projectList[i].name==e.target.id){
                project.projectList.splice(i,1)
            }
        }
        console.log(project.projectList)
        projectDisplay.innerHTML=""
        // sideHeader.insertAdjacentHTML("beforeend",`<div class='project-list' id='${inputName.value}'>${inputName.value}<button class="remove-project" id='${inputName.value}'>Remove Project</button></div>`)
        for(let j of project.projectList){
            projectDisplay.insertAdjacentHTML("beforeend",`<div class='project-list' id='${j.name}'>${j.name}<button class="remove-project" id='${j.name}'>Remove Project</button></div>`)
        }
        taskContent.innerHTML=""; 
        currentProject=null; 
    }
})