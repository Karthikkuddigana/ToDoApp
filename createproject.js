class project{
    static projectList=new Array();
    constructor(name,description){
        project.projectList.push({
            name:name,
            description:description,
            tasks:[], 
        })
    } 
}
export {project}