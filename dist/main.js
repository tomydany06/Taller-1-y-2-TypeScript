import { Serie } from './serie.js';
import { dataSeries } from './data.js';
// 1. Referencia a los elementos del DOM
let seriesTbody = document.getElementById('series');
const seasonsAvgElm = document.getElementById('seasons-average');
const serieDetailElm = document.getElementById('serie-detail');
renderSeriesInTable(dataSeries);
seasonsAvgElm.innerHTML = `${getSeasonsAverage(dataSeries)}`;
// 2. Función para renderizar las series en la tabla
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.style.cursor = 'pointer';
        trElement.innerHTML = `<td>${serie.id}</td>
                           <td class="text-primary">${serie.name}</td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
        trElement.onclick = () => showSerieDetail(serie);
        seriesTbody.appendChild(trElement);
    });
}
// 3. Función para mostrar el detalle de una serie en el Card
function showSerieDetail(serie) {
    serieDetailElm.innerHTML = `
    <div class="card">
      <img class="card-img-top" src="${serie.imageUrl}" alt="${serie.name}">
      <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>
        <p class="card-text">${serie.description}</p>
        <a href="${serie.serieUrl}" target="_blank" class="card-link">${serie.serieUrl}</a>
      </div>
    </div>`;
}
// 4. Función para calcular el promedio de temporadas
function getSeasonsAverage(series) {
    let totalSeasons = 0;
    series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
    return Math.round(totalSeasons / series.length);
}
//# sourceMappingURL=main.js.map