import { Name } from "./Name";

const NamesTbody: HTMLElement = document.getElementById("Names")!;

function renderNamesInTable(names: Name[]): void {
  names.forEach((c) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML =
      "<td><${c.id}</td><td><${c.name}</td><td><${c.company}</td><td><${c.seasons}</td><td><${c.}</td>";

    NamesTbody.appendChild(trElement);
  });
  calcularTemporadasPromedio(series);
function calcularTemporadasPromedio(series: Serie[]){
  let totalTemporadas = 0;
  series.forEach(serie =>{
    totalTemporadas += serie.seasons;
  });
  promedioNum.innerHTML = `${totalTemporadas/series.length}`;
}
viewTarjeta(series);
function viewTarjeta(series: Serie[]){
  series.forEach(serie =>{
    let name: HTMLElement = document.getElementById(`tarjeta${serie.idSerie}`)!;
    name.addEventListener('click', ()=>{
      const tarjeta: HTMLElement = document.getElementById('tarjeta')!;
      let tarjetaInfo: HTMLElement = document.createElement('div');
      tarjetaInfo.innerHTML = `
      <div class="card" style="width: 20rem;">
      <img src="${serie.img}" class="img-fluid">
        <div class="card-body">
          <h5 class="card-title">${serie.name}</h5>
          <p class="card-text">${serie.description}</p>
          <a href="${serie.webSite}" class="btn btn-primary">serie.webSite</a>
        </div>
      </div>`
      tarjeta.appendChild(tarjetaInfo);
      tarjeta.replaceChild(tarjetaInfo, tarjeta.childNodes[0]);
    });
  });
}
