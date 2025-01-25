// -------------------------------------------------------------------------------------------------------------------------
// Объявление переменных
let selected_from = null;
let selected_to = null;

let fromArr = ['Варшава', 'Кишинев', 'Балице'];
let toArr = ['Париж', 'Нью-Йорк', 'Лондон'];
let tmpArr = [];


// -------------------------------------------------------------------------------------------------------------------------
// Дизайн - выпадающие pop-ы
const from_cell = document.querySelector('.logo_table_cell_pop_from');
const to_cell = document.querySelector('.logo_table_cell_pop_to');
const button_find_clk = document.querySelector('.button_find');


const from_clk = document.querySelector('#from_cell');
const switch_clk = document.querySelector('#switch_cell');
const to_clk = document.querySelector('#to_cell');
const date_clk = document.querySelector('#date_cell');
const pass_clk = document.querySelector('#pass_cell');

// -------------------------------------------------------------------------------------------------------------------------
// Объявление функций

function closePopFrom() {
    from_cell.style.display = 'none';
}
//setInterval (closePopFrom, 500);

function closePopTo() {
    to_cell.style.display = 'none';
}

// -------------------------------------------------------------------------------------------------------------------------

from_clk.addEventListener('click', ()=> {
    from_cell.style.display = 'block';
})


to_clk.addEventListener('click', ()=> {
    to_cell.style.display = 'block';
})

button_find_clk.addEventListener('click', ()=> {
    from_cell.style.display = 'none';
    to_cell.style.display = 'none';
})
// -------------------------------------------------------------------------------------------------------------------------
// 1. Начало - обработчик для "Откуда"

const from_label_clk = document.querySelector('#from_label');
from_label_clk.textContent = fromArr[0];
const from_label = document.querySelector('.logo_table_cell-text-desc-from');
from_label.style.display = 'block';

const logo_table_cell_pop_desc_selected_from = document.querySelector('.logo_table_cell_pop-desc-selected-from');

const row_from_selected = document.querySelector('#from_selected');
row_from_selected.textContent = fromArr[0];

const from_label_logo = document.querySelector('#from_label_logo');


const from_0_item = document.querySelector('#from_0');
const from_1_item = document.querySelector('#from_1');
const from_2_item = document.querySelector('#from_2');

from_0_item.textContent = fromArr[0];
from_1_item.textContent = fromArr[1];
from_2_item.textContent = fromArr[2];

const row_from_selected_item = document.querySelector('#row_from_selected');
const row_from_0_item = document.querySelector('#row_from_0');
const row_from_1_item = document.querySelector('#row_from_1');
const row_from_2_item = document.querySelector('#row_from_2');

row_from_0_item.style.display = 'none';

row_from_0_item.addEventListener('click', ()=> { 
    logo_table_cell_pop_desc_selected_from.style.display = 'block';
    from_label_logo.style.fontSize = 'small';
    from_cell.style.height = '230px';
    from_label_clk.textContent = fromArr[0];
    row_from_selected.textContent = fromArr[0];
    row_from_0_item.style.display = 'none';
    row_from_1_item.style.display = 'flex';
    row_from_2_item.style.display = 'flex';
    selected_from = fromArr[0];
    console.log(selected_from);
    //from_cell.style.display = 'none';
    //closePopFrom();
    setInterval (closePopFrom, 500);
})

row_from_1_item.addEventListener('click', ()=> {
    logo_table_cell_pop_desc_selected_from.style.display = 'block';
    from_label_logo.style.fontSize = 'small';
    from_cell.style.height = '230px';
    from_label_clk.textContent = fromArr[1];
    row_from_selected.textContent = fromArr[1];
    row_from_0_item.style.display = 'flex';
    row_from_1_item.style.display = 'none';
    row_from_2_item.style.display = 'flex';
    selected_from = fromArr[1];
    console.log(selected_from);
    //from_cell.style.display = 'none';
    //closePopFrom();
    setInterval (closePopFrom, 500);
})

row_from_2_item.addEventListener('click', ()=> {
    logo_table_cell_pop_desc_selected_from.style.display = 'block';
    from_label_logo.style.fontSize = 'small';
    from_cell.style.height = '230px';
    from_label_clk.textContent = fromArr[2];
    row_from_selected.textContent = fromArr[2];
    row_from_0_item.style.display = 'flex';
    row_from_1_item.style.display = 'flex';
    row_from_2_item.style.display = 'none';
    selected_from = fromArr[2];
    console.log(selected_from);
    //from_cell.style.display = 'none';
    //closePopFrom();
    setInterval (closePopFrom, 500);
})

row_from_selected_item.addEventListener('click', ()=> {
    row_from_selected.textContent = 'none';
    logo_table_cell_pop_desc_selected_from.style.display = 'none';
    from_label_clk.textContent = null;
    from_label_logo.style.fontSize = 'medium';
    row_from_0_item.style.display = 'flex';
    row_from_1_item.style.display = 'flex';
    row_from_2_item.style.display = 'flex';
    from_cell.style.height = '180px';
    console.log(selected_from);
    //from_cell.style.display = 'none';
    //closePopFrom();
    setInterval (closePopFrom, 500);
})

// -------------------------------------------------------------------------------------------------------------------------
// 2. Начало - обработчик для "Куда"
const to_label_clk = document.querySelector('#to_label');

const to_label = document.querySelector('.logo_table_cell-text-desc-to');
const to_label_logo = document.querySelector('#to_label_logo');


const to_0_item = document.querySelector('#to_0');
const to_1_item = document.querySelector('#to_1');
const to_2_item = document.querySelector('#to_2');

to_0_item.textContent = toArr[0];
to_1_item.textContent = toArr[1];
to_2_item.textContent = toArr[2];



const row_to_selected_item = document.querySelector('#row_to_selected');
const row_to_selected = document.querySelector('#to_selected');
const row_to_0_item = document.querySelector('#row_to_0');
const row_to_1_item = document.querySelector('#row_to_1');
const row_to_2_item = document.querySelector('#row_to_2');


const logo_table_cell_pop_desc_selected_to = document.querySelector('.logo_table_cell_pop-desc-selected-to');

row_to_0_item.addEventListener('click', ()=> {
    logo_table_cell_pop_desc_selected_to.style.display = 'block';
    to_cell.style.display = 'none';
    to_label.style.display = 'flex';
    to_label_clk.textContent = toArr[0];
    row_to_selected.textContent = toArr[0];
    row_to_0_item.style.display = 'none';
    row_to_1_item.style.display = 'flex';
    row_to_2_item.style.display = 'flex';
    to_cell.style.height = '230px';
    to_label_logo.style.fontSize = 'small';
    selected_to = toArr[0];
    console.log(selected_to);
    setInterval (closePopTo, 500);
})

row_to_1_item.addEventListener('click', ()=> {
    logo_table_cell_pop_desc_selected_to.style.display = 'block';
    to_cell.style.display = 'none';
    to_label.style.display = 'flex';
    to_label_clk.textContent = toArr[1];
    row_to_selected.textContent = toArr[1];
    row_to_0_item.style.display = 'flex';
    row_to_1_item.style.display = 'none';
    row_to_2_item.style.display = 'flex';
    to_cell.style.height = '230px';
    to_label_logo.style.fontSize = 'small';
    selected_to = toArr[1];
    console.log(selected_to);
    setInterval (closePopTo, 500);
})

row_to_2_item.addEventListener('click', ()=> {
    logo_table_cell_pop_desc_selected_to.style.display = 'block';
    to_cell.style.display = 'none';
    to_label.style.display = 'flex';
    to_label_clk.textContent = toArr[2];
    row_to_selected.textContent = toArr[2];
    row_to_0_item.style.display = 'flex';
    row_to_1_item.style.display = 'flex';
    row_to_2_item.style.display = 'none';
    to_cell.style.height = '230px';
    to_label_logo.style.fontSize = 'small';
    selected_to = toArr[2];
    console.log(selected_to);
    setInterval (closePopTo, 500);
})

row_to_selected_item.addEventListener('click', ()=> {
    row_to_selected.textContent = 'none';
    logo_table_cell_pop_desc_selected_to.style.display = 'none';
    to_label_clk.textContent = null;
    to_label_logo.style.fontSize = 'medium';
    row_to_0_item.style.display = 'flex';
    row_to_1_item.style.display = 'flex';
    row_to_2_item.style.display = 'flex';
    to_cell.style.height = '180px';
    console.log(selected_from);
    setInterval (closePopTo, 500);
})

// -------------------------------------------------------------------------------------------------------------------------
// 3. Начало - обработчик для  инверсия: Откуда <> Куда

const switch_cell_clk = document.querySelector('#switch_cell');

switch_cell_clk.addEventListener('click', ()=> {

    tmpArr = fromArr.map(function (elem) {return elem });
    fromArr = toArr.map(function (elem) {return elem });
    toArr = tmpArr.map(function (elem) {return elem });

    from_0_item.textContent = fromArr[0];
    from_1_item.textContent = fromArr[1];
    from_2_item.textContent = fromArr[2];

    to_0_item.textContent = toArr[0];
    to_1_item.textContent = toArr[1];
    to_2_item.textContent = toArr[2];

    if (from_label_clk) {
    from_label_clk.textContent = fromArr[0];
    }
    if (row_from_selected) {
    row_from_selected.textContent = fromArr[0];
    }

    if (to_label_clk) {
    to_label_clk.textContent = toArr[0];
    }
    if (row_to_selected) {
    row_to_selected.textContent = toArr[0];
    }

})

// -------------------------------------------------------------------------------------------------------------------------