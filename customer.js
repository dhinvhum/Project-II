
$(function() {
    $.get("data/customers.json", function(data) {

    console.log(data);
        var i = 0
        for (i = 0;i< data.length;i++){
         var j = i +1;
         htmlString = '<tr><th scope ="row">'+j+'</th><td>'+data[i].customerID+'</td><td><a href="custdetail.html" onclick="setCookies('+i+')">'
         +data[i].companyName+'</td><td>'+data[i].contactName+'</td><td>'+data[i].contactTitle+'</td></tr>';
      
     $('#data').append(htmlString);
        }
    
    });
  });

  function setCookies(i){
    document.cookie = i;
  }