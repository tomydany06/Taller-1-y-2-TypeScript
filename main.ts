import { Serie } from './serie.js';

import { dataSeries } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const seasonsAvgElm: HTMLElement = document.getElementById('seasons-average')!;
const serieDetailElm: HTMLElement = document.getElementById('serie-detail')!;

renderSeriesInTable(dataSeries);

seasonsAvgElm.innerHTML = `${getSeasonsAverage(dataSeries)}`;

function renderSeriesInTable(series: Serie[]): void {
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

function showSerieDetail(serie: Serie): void {
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

function getSeasonsAverage(series: Serie[]): number {
  let totalSeasons: number = 0;
  series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
  return Math.round(totalSeasons / series.length);
}
