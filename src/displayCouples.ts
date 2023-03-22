import { genCouples } from './couples';
import groups from './groups';

export function setupCouples(element: HTMLDivElement, refresh: HTMLButtonElement, groupSelector1: HTMLSelectElement, groupSelector2: HTMLSelectElement) {
    function setCouples() {
        const group1 = groups.get(groupSelector1.value) || [];
        const group2 = groups.get(groupSelector2.value) || [];

        element.innerHTML = `
        <ul>
            ${genCouples(group1, group2).map(couple => `<li><i>${couple[1]}</i> & <i>${couple[2]}</i></li>`).join('\n')}
        </ul>
        `
    }

    refresh.addEventListener('click', setCouples);
    groupSelector1.addEventListener('change', setCouples);
    groupSelector2.addEventListener('change', setCouples);
    setCouples();
}

