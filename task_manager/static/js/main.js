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

function retreiveTask(){
    $.ajax({
        type: 'Get',
        url: 'https://fsdiapi.azurewebsites.net/api/tasks',
        success: function(response){
            console.log(`All Data: ${response}`)
            let list = JSON.parse(response)
            for(i=0;i<list.length;i++){
                if(list[i].name === 'TreySch'){
                    displayTask(list[i])
                }
            }
        },
        error: function(error){
            console.log(error)
        }
    })
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
    let dataStr = JSON.stringify(newTask)
    $.ajax({
        type: 'POST',
        url: 'https://fsdiapi.azurewebsites.net/api/tasks/',
        data: dataStr,
        contentType: 'application/json',
        success: function(response){
            console.log(response)
        },
        error: function(error){
            console.log(error)
        }
    })
    displayTask(newTask)
}

function init(){
    console.log('Task manager')
    $("#iImportant").click(toggleImportant)
    $("#showHideBtn").click(toggleForm)
    $("#saveBtn").click(saveTask)
    retreiveTask()
}




window.onload = init