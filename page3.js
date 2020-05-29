
function ins_client(){
    let client_rec={  
    };


    client_rec.nom_de_client = document.getElementById("nom").value;
    //client_rec.date_de_naissance = document.getElementById("na").value;
    client_rec.id_client = document.getElementById("id_client").value;

    const URL = 
    "https://qqmz7pdnvbtvwtn-db202005041712.adb.ca-montreal-1.oraclecloudapps.com/ords/tp2/client/";

    fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(client_rec),
    })    
    .then((resp) => resp.json())
    .then(function (data){
        console.log(data);
    })
    .catch(function (error) {
        console.log(JSON.stringify(error));
    });
}
