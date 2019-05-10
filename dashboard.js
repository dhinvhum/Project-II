$(function() {
    $.get("data/products.json", function(data) {
        var i =0
        for(i=0;i<=data.length;i++){
         var x=0;
         x += i;
        }
        $("#products").append(x);
    });
    $.get("customers.json", function(data) {
        var i =0
        for(i=0;i<=data.length;i++){
         var x=0;
         x += i;
        }
        $("#customers").append(x);
    });
    $.get("suppliers.json", function(data) {
        var i =0
        for(i=0;i<=data.length;i++){
         var x=0;
         x += i;
        }
        $("#suppliers").append(x);
    });
    $.get("orders.json", function(data) {
        var i =0
        for(i=0;i<=data.length;i++){
         var x=0;
         x += i;
        }
        $("#orders").append(x);
    });
});