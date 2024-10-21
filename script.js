import { project } from "./createproject.js";
const dialog=document.querySelector("dialog")
const showDialogBtn=document.querySelector("#AddProjects"); 
const submitDialogBtn=document.querySelector("[type='submit']"); 
const inputName=document.querySelector("#ProjectName"); 
const inputDesc=document.querySelector("#ProjectDesc"); 
const sideHeader=document.querySelector("#SideHeader"); 
const taskContent=document.querySelector("#TaskContent"); 
function createObject(a,b){
    return ({
        name:a, 
        desc:b

    })
}
showDialogBtn.addEventListener("click",()=>{
    document.getElementById("myform").reset();
    dialog.showModal(); 
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

sideHeader.addEventListener("click",(e)=>{
    if(e.target && e.target.className=="project-list"){
        console.log("Hallelujah")
        let projectid=e.target.id; 
        let projectContent
        for(let i=0; i<project.projectList.length; i++){
            if (project.projectList[i].name==projectid){
                projectContent=project.projectList[i]; 
            }
        }
        taskContent.innerHTML=`<div id="${projectContent.name}">${projectContent.name}</div> <div>${projectContent.description}</div>`;
    }

})