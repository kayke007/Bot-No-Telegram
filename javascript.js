/* global resposta */

function sendText() {
    var htpp = document.getElementById("htpp").value;
    var luo = new XMLHttpRequest();
    var resposta = document.getElementById("lua");
    luo.open('GET', htpp, true);
    luo.onload = function (e) {
        if (this.status === 200) {
       
            var body = this.responseText;
            var jsonData = JSON.parse(body);
            var result = jsonData.result;
            if (result.length > 0) {
                msg = "";
                for (i = result.length - 1; i >= 0; i--) {
                    var text = result[i].message.text;
                    var nome = result[i].message.from.first_name;
                    var hora = result[i].message.date;
                    var d = new Date(hora * 1000);
                    var data = d.toLocaleDateString();
                    var horaF = d.toLocaleTimeString();

                    document.title = result.length + " " + " @MestreDosMagoss_bot"; 
                    //msg = "<p>" + msg + "<span class=\"parag\">" + (data + " - " + horaF + " " + " " + nome + ": </span>" + "</br><span class=\"texto\"> " + text) + "</span></p>";
                    msg = "<p>" + msg + "<span class=\"parag\">" + data + " - " + horaF + " " + nome + ": </span>" + "</p>" + "<p>" + "<span class=\"texto\">" + text + "</span>" + "</p>"; 
                    resposta.innerHTML = msg;
                    
                }
            }
        }
    };
    luo.send();
}

setInterval(sendText, 1000);
