function listView() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var response=JSON.parse(this.responseText);
          var list=response.list;
          var output="";
          for(var i=0;i<list.length;i++){
              output+="<tr>"
                  output+="<th>"+list[i].no+"</th>"
                  output+="<th>"+list[i].item+"</th>"
                  output+="<th>"+list[i].quantity+"</th>"
                  output+="<th>"+list[i].unit+"</th>"
                  output+="<th>"+list[i].department+"</th>"
                  output+="</tr>"
          }
       document.getElementById("demo").innerHTML = output
      }
    };
    xhttp.open("GET", "list.json", true);
    xhttp.send();
  }