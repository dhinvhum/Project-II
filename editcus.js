$(function () {
    $.get("data/customers.json", function (data) {

        var Search = data;

        var customers = Search[document.cookie];
        var id = customers.customerID
        $("#id").val(id);

        var name = customers.companyName
        $("#name").val(name);
        
        var contactname = customers.contactName
        $("#contactname").val(contactname);
        
        var contacttitle = customers.contactTitle
        $("#contacttitle").val(contacttitle);
        
        var street = customers.address.street;
        $("#street").val(street);

        var city = customers.address.city;
        $("#city").val(city);

        var region = customers.address.region;
        $("#region").val(region);

        var postalCode = customers.address.postalCode;
        $("#postalCode").val(postalCode);

        var country = customers.address.country;
        $("#country").val(country);

        var phone = customers.address.phone;
        $("#phone").val(phone);

        var address = customers.address.street + customers.address.city + customers.address.region
            + customers.address.postalCode + customers.address.country + customers.address.phone;
        $("#address").val(address);
        

    });
});