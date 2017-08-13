/**
 * Created by luzhaolin on 2017/7/11.
 */

window.onload =function(){
    click();
}

var click = function(){
    var div1=document.getElementById("div1");
    div1.onclick = function(){
        loadXMLDoc2();
    }
}

var loadXMLDoc =function(){
    xmlhttp = new XMLHttpRequest();
    /*xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState==4&&xmlhttp.status==200){
            document.getElementById("div1").innerHTML = xmlhttp.responseText;
        }
    }*/
    xmlhttp.open("GET","test.txt",false);
    xmlhttp.send();
    document.getElementById("div1").innerHTML = xmlhttp.responseText;

}
var loadXMLDoc2 = function(){
    xmlhttp1 = new XMLHttpRequest();
    xmlhttp1.onreadystatechange = function(){

        if(xmlhttp1.readyState==4 && xmlhttp1.status == 200){
            var text ="";
            var books = xmlhttp1.responseXML;
            var x = books.getElementsByTagName("title");
            for(var i = 0;i < x.length;i++){
                text = text + x[i].innerHTML +"<br />";  //没有构造节点，直接用innerHTML,也可以
            }
            document.getElementById("div1").innerHTML = text;
        }
    }
    xmlhttp1.open("GET","books.xml",true);
    xmlhttp1.send();
}