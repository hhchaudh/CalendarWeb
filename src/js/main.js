function eraseText() {
    $("#output").val("");
}

function saveText() {
    localStorage.setItem("lastname", "Smith");
    document.getElementById("result").innerHTML = localStorage.getItem("lastname");
}

function dataSave()
{
    var user = document.getElementById("user").value ;
    //localStorage["user"] = user ;
    localStorage.setItem("user", user) ;
    alert("gmail id saved") ;
    console.log("gmail id saved")
}

function dataLoad()
{
    var user = localStorage["user"] ;
    document.getElementById("user").value = user ;
}

function passString(month){
    window.localStorage.setItem("option", month);
}

function displayString()
{
    var month = window.localStorage.getItem("option").value;
    console.log(month);
}

$("#btn_a").on("click", function() {
    alert("a is clicked");
});


$("#btn_b").on("click", function() {
    return doSomething(p,q,null);
});


function doSomething(p,q,r){
    if(r != null){
alert("r is not null");
    } else {
        alert("r is null");
//do something for btn_b and return
    }

}
