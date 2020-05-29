

function createNode(element) {
    return document.createElement(element);
  }
  
  function append(parent, el) {
    return parent.appendChild(el);
  }
  

const EMP_UL = document.getElementById("nomarret");
const URL =
    "https://qqmz7pdnvbtvwtn-db202005041712.adb.ca-montreal-1.oraclecloudapps.com/ords/tp2/arret";
fetch(URL)
    .then((resp) => resp.json())
    .then(function (data) {
        let arrets = data.items;
        return arrets.map(function (arret) {
            let li = createNode("li"),
                span = createNode("span");
            span.innerHTML = `${arret.nom_arret} ${arret.numero_arret} ${arret.horaire}`;
            append(li, span);
            append(EMP_UL, li);
        });

    })
    .catch(function (error) {
        console.log(JSON.stringify(error));
    });