const
    log = console.log,
    sota = document.querySelectorAll('.sota'),
    infoSection = document.querySelector(`.info-section`);

function createEl(tag, _class, _src) {
    const elem = document.createElement(tag);
    if (_class) {
        elem.classList.add(_class)
    }
    if (_src) {
        elem.src = _src;
    }
    return elem
}

function createInfoItem() {
    const
    // create elements
        item = createEl('div', 'item'),
        itemInfo = createEl('p', 'item-info'),
        itemImage = createEl('img', 'item-image', 'img/building.png');
    itemBuildBtn = createEl('button', 'item-build')
    itemBuildBtn.innerText = `BUILD`;
    itemInfo.innerText = `some discriptional text`;
    //button create
    itemBuildBtn.addEventListener('click', () => {
            if (sota[pos].innerHTML === '') {
                let sotaImage = createEl('img', 'item-image', 'img/building.png')
                sota[pos].append(sotaImage)
            } else alert('already exist!')
        })
        // generate DOM
    item.append(itemImage, itemInfo, itemBuildBtn)
    return item
}



let pos = 0;
for (let i = 0; i < sota.length; i++) {
    sota[i].addEventListener('click', () => {
        //clear infoSection
        infoSection.innerHTML = ``;
        //generate new infosection
        let testItem = createInfoItem();
        infoSection.append(testItem);
        //get index of sota
        pos = i;
        log(pos)
    })

}