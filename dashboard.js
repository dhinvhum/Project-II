$(function() {
    $.get("data/products.json", function(data) {
        var i =0
        for(i=0;i<=data.length;i++){
         var x=0;
         x += i;
        }
        $("#products").append(x);
    });
    $.get("data/customers.json", function(data) {
        var i =0
        for(i=0;i<=data.length;i++){
         var x=0;
         x += i;
        }
        $("#customers").append(x);
    });
    $.get("data/suppliers.json", function(data) {
        var i =0
        for(i=0;i<=data.length;i++){
         var x=0;
         x += i;
        }
        $("#suppliers").append(x);
    });
    $.get("data/orders.json", function(data) {
        var i =0
        for(i=0;i<=data.length;i++){
         var x=0;
         x += i;
        }
        $("#orders").append(x);
    });
});