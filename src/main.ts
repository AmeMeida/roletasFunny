import './style.css'
import { setupCouples } from './displayCouples'
import groups from './groups'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Gerador de casais</h1>

  <h2>Grupos</h2>
  <p>Selecione os grupos para gerar os casais</p>

  <div id="groups">
    <select id="group1">
      ${Array.from(groups.keys()).map(key => `<option value="${key}">${key}</option>`).join('\n')}
    </select>
    <select id="group2">
      ${Array.from(groups.keys()).map(key => `<option value="${key}">${key}</option>`).join('\n')}
    </select>
  </div>

  <h2>Casais</h2>
  <button id="refresh">Gerar casais</button>
  <p>Aperte o botão para gerar os casais</p>

  <hr>
  <h2>Resultado</h2>
  <p>Os casais gerados são:</p>

  <div id="couples">
  </div>
`

const couplesDiv = document.querySelector<HTMLDivElement>('#couples')!;
const refreshButton = document.querySelector<HTMLButtonElement>('#refresh')!;
const groupSelector1 = document.querySelector<HTMLSelectElement>('#group1')!;
const groupSelector2 = document.querySelector<HTMLSelectElement>('#group2')!;

setupCouples(couplesDiv, refreshButton, groupSelector1, groupSelector2);
