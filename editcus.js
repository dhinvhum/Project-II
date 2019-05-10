$(function () {
    $.get("data/customers.json", function (data) {
        console.log(data);

        var Search = data;

        var customers = Search[document.cookie];
        var id = customers.customerID
        $("#id").val(id);
        console.log(id);

        var name = customers.companyName
        $("#name").val(name);
        console.log(name);
        var contactname = customers.contactName
        $("#contactname").val(contactname);
        console.log(contactname);
       
        var contacttitle = customers.contactTitle
        $("#contacttitle").val(contacttitle);
        console.log(contacttitle);
        var address = customers.address.street+customers.address.city + customers.address.region 
        +customers.address.postalCode + customers.address.country + customers.address.phone ;
        $("#address").val(address);
        console.log(address);

    });
});