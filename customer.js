
$(function () {
  $.get("data/customers.json", function (data) {

    console.log(data);
    var i;
    for (i = 0; i < data.length; i++) {
      var j = i + 1;
      table = '<tr><th scope ="row">' + j + '</th><td>' + data[i].customerID + '</td><td><a href="custdetail.html" onclick="setCookies(' + i + ')">'
        + data[i].companyName + '</td><td>' + data[i].contactName + '</td><td>' + data[i].contactTitle + '</td></tr>';

      $("#datai").append(table);
    }

  });

});

function setCookies(i) {
  document.cookie = i;
}

