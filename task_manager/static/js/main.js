let nonImportantClasses = "far fa-star"
let importantClasses = "fas fa-star"
let varIsImportant = false
let varFormHidden = true
function displayTask(task){
    let syntax =`<div id="row-task" style="color: ${task.color}; background-color: rgba(234, 245, 244, 0.568);">
                <div id="left-task">
                    <h3>${task.title}</h3>
                    <p>${task.description}</p>
                </div>
                <div id="right-task">
                <label>Due Date: ${task.dueDate}</label>
                <label>Location: ${task.location}</label>
                <label>Contact: ${task.contact}</label>
                </div>
                <button onclick="this.parentNode.remove()">Remove</button>
                </div>`
    $('#tasks-list').append(syntax)
}

function toggleImportant(){
    if(varIsImportant){
        $("#iImportant").removeClass(importantClasses)
        $("#iImportant").addClass(nonImportantClasses)
        varIsImportant = false
    }else{
        $("#iImportant").removeClass(nonImportantClasses)
        $("#iImportant").addClass(importantClasses)
        varIsImportant = true
    }
}

function toggleForm(){
    if(varFormHidden){
        $("#form").show('slide')
        $("#showHideBtn").html('Hide Task Form')
        varFormHidden = false
    }else{
        $('#form').hide('slide')
        $("#showHideBtn").html('Add Task')
        varFormHidden = true
    }
}

function clearFields(){
    $('#txtTitle').val('')
    $('#dateDueDate').val('')
    $('#txtContact').val('')
    $('#txtLocation').val('')
    $('#txtDescription').val('')
}

function saveTask(e){
    e.preventDefault()
    console.log('save form')
    let title = $('#txtTitle').val()
    let dueDate = $('#dateDueDate').val()
    let contact = $('#txtContact').val()
    let location = $('#txtLocation').val()
    let description = $('#txtDescription').val()
    let color = $('#colorColor').val()
    if(title.length < 1){
        $('#txtTitle').css("background-color", "red")
        return
    }else{
        $('#txtTitle').css("background-color", "white")
    }
    if(!dueDate){
        $('#dateDueDate').css("background-color", "red")
        return
    }else{
        $('#dateDueDate').css("background-color", "white")
    }
    if(contact < 1){
        $('#txtContact').css("background-color", "red")
        return
    }else{
        $('#txtContact').css("background-color", "white")
    }
    if(location.length < 1){
        $('#txtLocation').css("background-color", "red")
        return
    }else{
        $('#txtLocation').css("background-color", "white")
    }
    if(description.length < 1){
        $('#txtDescription').css("background-color", "red")
        return
    }else{
        $('#txtDescription').css("background-color", "white")
    }
    clearFields()
    let newTask = new Task(title, varIsImportant, dueDate, contact, location, description, color)
    displayTask(newTask)
}

function init(){
    console.log('Task manager')
    $("#iImportant").click(toggleImportant)
    $("#showHideBtn").click(toggleForm)
    $("#saveBtn").click(saveTask)
}




window.onload = init