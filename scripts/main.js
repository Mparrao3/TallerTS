var NamesTbody = document.getElementById("Names");
function renderNamesInTable(names) {
    names.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML =
            "<td><${c.id}</td><td><${c.name}</td><td><${c.company}</td><td><${c.seasons}</td><td><${c.}</td>";
        NamesTbody.appendChild(trElement);
    });
    calcularTemporadasPromedio(series);
    function calcularTemporadasPromedio(series) {
        var totalTemporadas = 0;
        series.forEach(function (serie) {
            totalTemporadas += serie.seasons;
        });
        promedioNum.innerHTML = "".concat(totalTemporadas / series.length);
    }
    viewTarjeta(series);
    function viewTarjeta(series) {
        series.forEach(function (serie) {
            var name = document.getElementById("tarjeta".concat(serie.idSerie));
            name.addEventListener('click', function () {
                var tarjeta = document.getElementById('tarjeta');
                var tarjetaInfo = document.createElement('div');
                tarjetaInfo.innerHTML = "\n      <div class=\"card\" style=\"width: 20rem;\">\n      <img src=\"".concat(serie.img, "\" class=\"img-fluid\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">").concat(serie.name, "</h5>\n          <p class=\"card-text\">").concat(serie.description, "</p>\n          <a href=\"").concat(serie.webSite, "\" class=\"btn btn-primary\">serie.webSite</a>\n        </div>\n      </div>");
                tarjeta.appendChild(tarjetaInfo);
                tarjeta.replaceChild(tarjetaInfo, tarjeta.childNodes[0]);
            });
        });
    }
}
export {};
