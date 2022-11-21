import './script.js';
const buildings = [{ name: 'factory', cost: { metal: 10 }, income: { metal: 1 } },
    { name: 'market', cost: { metal: 15 }, income: { metal: 2 } },
]
const log = console.log
const tickInterval = 1000
let balance = { metal: 0 }
let income = { metal: 1 }
    // log(balance)


function addIncome(arr, _name) {
    const newBuilding = arr.find(nam => nam.name === _name)
    if (newBuilding.cost.metal <= balance.metal) {
        balance.metal -= newBuilding.cost.metal
        income.metal += newBuilding.income.metal
        return true
            // log(income, balance)
    } else log('Not enought founds')
}

function addIncomeSimple(_name) {
    const newBuilding = buildings.find(nam => nam.name === _name)
    if (newBuilding.cost.metal <= balance.metal) {

        balance.metal -= newBuilding.cost.metal
        income.metal += newBuilding.income.metal
        return true
            // log(income, balance)
    } else log('Not enought founds')
}

let { entries } = Object


function getGlobal(...objs) {
    for (let obj of objs) {
        for (let [key, value] of entries(obj)) {
            window[key] = value
        }
    }
}
getGlobal({ balance }, { addIncomeSimple }, { getGlobal }, { tickInterval }, { income }, { buildings }, { log })
log(balance)