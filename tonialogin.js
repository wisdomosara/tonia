
$(document).ready(function(){
    $("button").click(function(e){
        e.preventDefault()
    let email = $(".email").val();
    let password = $(".password").val();
    let myJsonObject = {
    email : email,
    password : password
    }
    
    $.post("https://reqres.in/api/login", myJsonObject, function(){
            
                $.get("https://reqres.in/api/users?page=1",function(data) {
                    $(".main").html(data.data[0].email)
            })
        })

    })
})