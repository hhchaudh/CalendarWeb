function eraseText() {
    $("#output").val("");
}

function saveText() {
    localStorage.setItem("lastname", "Smith");
    document.getElementById("result").innerHTML = localStorage.getItem("lastname");
}

function passString(month){
    window.localStorage.setItem("option", month);
}

function displayString()
{
    var month = window.localStorage.getItem("option").value;
    console.log(month);
}

function openWeek(id) {
    alert(id);
}

function addTable() {
    var myTableDiv = document.getElementById("metric_results")
    var table = document.createElement('TABLE')
    var tableBody = document.createElement('TBODY')

    table.border = '0'
    table.appendChild(tableBody);

    var heading = new Array();
    heading[0] = "Sun"
    heading[1] = "Mon"
    heading[2] = "Tues"
    heading[3] = "Wed"
    heading[4] = "Thurs"
    heading[5] = "Fri"
    heading[6] = "Sat"

    var f = 6 //first day, VARIABLE TO MONTH
    var l = 30 //last day, VARIABLE TO MONTH
    var x = 1

    var cal = new Array()

    for (var i = 0; i < 6; i++) {
        cal[i] = new Array(7)
    }


    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 7; j++) {
            cal[i][j] = ""
        }
    }

    startOfWeek = f
    for (var i = 0; i < 6; i++) {
        for (var j = startOfWeek; j < 7; j++) {
            cal[i][j] = x
            if (7 * i + j > l + f - 2) {
                i = 6
                j = 7
            }
            x++
            startOfWeek = 0
        }
    }

    //TABLE COLUMNS
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);
    for (i = 0; i < heading.length; i++) {
        var th = document.createElement('TH')
        th.width = '75';
        th.appendChild(document.createTextNode(heading[i]));
        tr.appendChild(th);
    }

    //TABLE ROWS
    for (i = 0; i < cal.length; i++) {
        var tr = document.createElement('TR');
        if (f + l >= 35 || i < 5)
            tr.setAttribute("class", "days")
        tr.setAttribute("id", "week" + i)
        tr.setAttribute("onclick", "openWeek(" + i + ")")
        //"row1"  -> "row" + i
        //var oldThingThatYouWant = document.getElementByID("week0")

        for (j = 0; j < cal[i].length; j++) {
            var td = document.createElement('TD')
            td.appendChild(document.createTextNode(cal[i][j]));
            tr.appendChild(td)
        }
        tableBody.appendChild(tr);
    }
    myTableDiv.appendChild(table)
}
