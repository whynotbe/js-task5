/**
 * Created by luzhaolin on 2017/6/7.
 */

window.onload = function(){
    clearInput();
    getInput();
    post();
};

var clearInput = function(){
    var usernameInput = document.getElementById("usernameInput");
    usernameInput.onfocus = function(){
        if(usernameInput.value == "用户名"){
            usernameInput.setAttribute("value","");
        }
    }
    var passwordInput = document.getElementById("passwordInput");
    passwordInput.onfocus =function(){
        if(passwordInput.value =="密码"){
            passwordInput.setAttribute("value","");
        }
    }
}


var getInput = function () {
    var usernameInput = document.getElementById("usernameInput");
    var passwordInput = document.getElementById("passwordInput");


    usernameInput.onblur =function(){
        username = usernameInput.value;
        console.log(username);
    };
    passwordInput.onblur = function(){
        password = passwordInput.value;
        console.log(password);
    };

}

var post = function(){
    var login = document.getElementById("submit");
    var ajax = new XMLHttpRequest();
    login.onclick = function(){
        ajax.open('POST','/carrots-admin-ajax/a/login',true);
        ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        var data = "name="+document.getElementById("usernameInput").value+"&pwd="+document.getElementById("passwordInput").value;
        ajax.send(data);
        console.log(data);
        console.log("成功");
    }
    ajax.onreadystatechange = function(){
        if(ajax.readyState === 4 ) {
            if (ajax.status === 200) {
                console.log("返回值");
                feedback = JSON.parse(ajax.responseText);
                if(feedback.message =="success"){
                    console.log(feedback.message);
                    window.location.href = "2-backend.html";
                }
                else{
                    alert("账号密码有误,请重新输入");
                    document.getElementById("result").innerHTML = "未通过验证";
                }
            }
            else{
                alert("出现错误:"+JSON.parse(ajax.responseText).code+","+JSON.parse(ajax.responseText).message);
            }
        }
    }
}



















var calculate = function(){
    var life =1728;
    var def = 0.652;
    var e = 258;
    var atk = 167;
    var jg =0.04;
    var rk = 0.08;
    var q = 79;
    var rate = 1;
    var currentLife = life - (2*rk*life+2*jg*life+e)*def;
    console.log(currentLife);
    for(var i = 0;i<6;i++){
        if(i == 0||i == 2){
            currentLife = currentLife - (rk*currentLife+life*jg+atk+q)*def;
            console.log(currentLife);
        }
        else{
            currentLife = currentLife - (rk*currentLife+life*jg+atk+q)*def;
            console.log(currentLife);
        }

    }
}




