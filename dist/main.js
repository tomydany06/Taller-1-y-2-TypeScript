import { Serie } from './serie.js';
import { dataSeries } from './data.js';
let seriesTbody = document.getElementById('series');
const seasonsAvgElm = document.getElementById('seasons-average');
const serieDetailElm = document.getElementById('serie-detail');
renderSeriesInTable(dataSeries);
seasonsAvgElm.innerHTML = `${getSeasonsAverage(dataSeries)}`;
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
function getSeasonsAverage(series) {
    let totalSeasons = 0;
    series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
    return Math.round(totalSeasons / series.length);
}