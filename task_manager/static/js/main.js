let nonImportantClasses = "far fa-star"
let importantClasses = "fas fa-star"
let varIsImportant = false
let varFormHidden = true

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
    console.log('here')
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


function init(){
    console.log('Task manager')
    $("#iImportant").click(toggleImportant)
    $("#showHideBtn").click(toggleForm)
}




window.onload = init