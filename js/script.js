var suscriberId = "";

$(window).on('load', function(){
    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    suscriberId = urlParams.get('suscriberId');    // ..
});

function save() {
    // get values
    var name = $("#name").val();
    var business = $("#business").val();
    var manager = $("#manager").val();

    var data = {
      "subscriber_id": suscriberId,
      "fields": [
        {
          "field_name": "nameBusiness",
          "field_value": name
        },
        {
          "field_name": "typeBusiness",
          "field_value": business
        },
        {
          "field_name": "manager",
          "field_value": manager
        }
      ]
    }


    $.post({
      url : 'https://api.manychat.com/fb/subscriber/setCustomFields',
      data : data,
      headers: {'Authorization': 'Bearer 100416871767043:45c9933567510b76ec8470a6fcd2fc8e',
      'accept':'application/json',
      'Content-Type':'application/json'},
      // El resto del código
      success: function (data){
        $("#name").val("");
        $("#businesssw").val("");
        $("#manager").val("");

        $("#result").val("El registro se realizo con exito!!! Te llegara un mensaje a tu messenger de confirmacion.");


      },
      error: function (data){

        $("#name").val("");
        $("#businesssw").val("");
        $("#manager").val("");

        $("#result").html("El registro se realizo con exito!!! Te llegara un mensaje de coofirmacion a tu messenger.");

      }

    });



}
