import './tick.js';


const infoSection = document.querySelector(`.info-section`)
const board = document.querySelector('.board')
const count = {
    metal: document.querySelector(`.metal-count`)
}
let activeSota

getGlobal({ activeSota })

tick(tickInterval)

function tick(interv) {
    balance.metal += income.metal
        // log(balance)
    count.metal.replaceChildren(balance.metal)
    setTimeout(tick, interv, interv)
}

function createEl(tag, _class, _src) {
    const elem = document.createElement(tag)
    if (_class) {
        elem.classList.add(_class)
    }
    if (_src) {
        elem.src = _src;
    }
    return elem
}

function createInfoItem() {
    // create elements
    const item = createEl('div', 'item')
    const itemInfo = createEl('p', 'item-info')
    const itemImage = createEl('img', 'item-image', 'img/building.png')
    const itemBuildBtn = createEl('button', 'item-build')

    itemBuildBtn.innerText = `BUILD`;
    itemInfo.innerText = `some discriptional text`;
    //button create
    itemBuildBtn.addEventListener('click', () => {
            if (activeSota.innerHTML === '' && addIncomeSimple('factory')) {

                let sotaImage = createEl('img', 'item-image', 'img/building.png')
                activeSota.append(sotaImage)
                count.metal.replaceChildren(balance.metal)
            } else alert('error')
        })
        // generate DOM
    item.append(itemImage, itemInfo, itemBuildBtn);

    return item;
}



// let pos = 0;



// for (let i = 0; i < sotas.length; i++) {
//     sotas[i].addEventListener('click', () => {
//         //generate new infosection
//         let testItem = createInfoItem();
//         infoSection.replaceChildren(testItem);
//         //get index of sota
//         pos = i;
//         log(pos)
//     })
// }



board.addEventListener('click', (e) => {
    activeSota = e.target.closest(".sota");
    let testItem = createInfoItem();
    infoSection.replaceChildren(testItem);
})