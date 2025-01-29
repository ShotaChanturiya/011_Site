// -------------------------------------------------------------------------------------------------------------------------
// Объявление переменных
let selected_from = null;
let selected_to = null;

let fromObj = [ //fromArr
    {city: 'Варшава', code: 'WAW'},
    {city: 'Кишинев', code: 'RMO'},
    {city: 'Балице', code: 'KRK'}
]

let toObj = [ //toArr
    {city: 'Париж', code: 'PAR'},
    {city: 'Нью-Йорк', code: 'NYC'},
    {city: 'Лондон', code: 'LON'},
]

let tmpArr = []; //tmpArr


// -------------------------------------------------------------------------------------------------------------------------
// Дизайн - выпадающие pop-ы
const from_cell = document.querySelector('.logo_table_cell_pop_from');
const to_cell = document.querySelector('.logo_table_cell_pop_to');
const pass_cell = document.querySelector('.logo_table_cell_pop_pass');
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

function closePopTo() {
    to_cell.style.display = 'none';
}

// -------------------------------------------------------------------------------------------------------------------------
// Действие - выпадающие pop-ы

let showfrom = false;
let showto = false;
let showpass = false;

from_clk.addEventListener('click', ()=> {
    if(showfrom) {
        from_cell.style.display = 'none';
        
    } else {
        from_cell.style.display = 'block';
        to_cell.style.display = 'none';
        pass_cell.style.display = 'none';
        showto = false;
        showpass = false;

    }
    showfrom = !showfrom
})

to_clk.addEventListener('click', ()=> {
    if(showto) {
        to_cell.style.display = 'none';
        //to_clk.style.border = 'none';
    } else {
        from_cell.style.display = 'none';
        to_cell.style.display = 'block';
        pass_cell.style.display = 'none';
        showfrom = false;
        showpass = false;
        //to_clk.style.border = '2px solid blue';
    }
    showto = !showto
})

pass_clk.addEventListener('click', ()=> {
    if(showpass) {
        pass_cell.style.display = 'none';
        //to_clk.style.border = 'none';
    } else {
        from_cell.style.display = 'none';
        to_cell.style.display = 'none';
        pass_cell.style.display = 'block';
        showfrom = false;
        showto = false;        
        //to_clk.style.border = '2px solid blue';
    }
    showpass = !showpass
})


button_find_clk.addEventListener('click', ()=> {
    from_cell.style.display = 'none';
    to_cell.style.display = 'none';
})
// -------------------------------------------------------------------------------------------------------------------------
// 1. Начало - обработчик для "Откуда"

const from_label_clk = document.querySelector('#from_label');
from_label_clk.textContent = fromObj[0].city;
const from_label = document.querySelector('.logo_table_cell-text-desc-from');
from_label.style.display = 'block';

const logo_table_cell_pop_desc_selected_from = document.querySelector('.logo_table_cell_pop-desc-selected-from');

const row_from_selected = document.querySelector('#from_selected');
row_from_selected.textContent = fromObj[0].city;

const code_from_selected = document.querySelector('#from_selected_code');
code_from_selected.textContent = fromObj[0].code;


const from_label_logo = document.querySelector('#from_label_logo');


const from_0_item = document.querySelector('#from_0');
const from_1_item = document.querySelector('#from_1');
const from_2_item = document.querySelector('#from_2');

from_0_item.textContent = fromObj[0].city;
from_1_item.textContent = fromObj[1].city;
from_2_item.textContent = fromObj[2].city;

const from_0_item_code = document.querySelector('#from_0-code');
const from_1_item_code = document.querySelector('#from_1-code');
const from_2_item_code = document.querySelector('#from_2-code');

from_0_item_code.textContent = fromObj[0].code;
from_1_item_code.textContent = fromObj[1].code;
from_2_item_code.textContent = fromObj[2].code;

const row_from_selected_item = document.querySelector('#row_from_selected');
const row_from_0_item = document.querySelector('#row_from_0');
const row_from_1_item = document.querySelector('#row_from_1');
const row_from_2_item = document.querySelector('#row_from_2');

row_from_0_item.style.display = 'none';

row_from_0_item.addEventListener('click', ()=> { 
    logo_table_cell_pop_desc_selected_from.style.display = 'block';
    from_label_logo.style.fontSize = 'small';
    from_cell.style.height = '230px';
    from_label_clk.textContent = fromObj[0].city;
    row_from_selected.textContent = fromObj[0].city;
    code_from_selected.textContent = fromObj[0].code;
    row_from_0_item.style.display = 'none';
    row_from_1_item.style.display = 'flex';
    row_from_2_item.style.display = 'flex';
    selected_from = fromObj[0].city;
    console.log(selected_from);
    //from_cell.style.display = 'none';
    //closePopFrom();
    //setInterval (closePopFrom, 500);
})

row_from_1_item.addEventListener('click', ()=> {
    logo_table_cell_pop_desc_selected_from.style.display = 'block';
    from_label_logo.style.fontSize = 'small';
    from_cell.style.height = '230px';
    from_label_clk.textContent = fromObj[1].city;
    row_from_selected.textContent = fromObj[1].city;
    code_from_selected.textContent = fromObj[1].code;
    row_from_0_item.style.display = 'flex';
    row_from_1_item.style.display = 'none';
    row_from_2_item.style.display = 'flex';
    selected_from = fromObj[1].city;
    console.log(selected_from);
    //from_cell.style.display = 'none';
    //closePopFrom();
    //setInterval (closePopFrom, 500);
})

row_from_2_item.addEventListener('click', ()=> {
    logo_table_cell_pop_desc_selected_from.style.display = 'block';
    from_label_logo.style.fontSize = 'small';
    from_cell.style.height = '230px';
    from_label_clk.textContent = fromObj[2].city;
    row_from_selected.textContent = fromObj[2].city;
    code_from_selected.textContent = fromObj[2].code;
    row_from_0_item.style.display = 'flex';
    row_from_1_item.style.display = 'flex';
    row_from_2_item.style.display = 'none';
    selected_from = fromObj[2].city;
    console.log(selected_from);
    //from_cell.style.display = 'none';
    //closePopFrom();
    //setInterval (closePopFrom, 500);
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
    //setInterval (closePopFrom, 500);
})

// -------------------------------------------------------------------------------------------------------------------------
// 2. Начало - обработчик для "Куда"
const to_label_clk = document.querySelector('#to_label');

const to_label = document.querySelector('.logo_table_cell-text-desc-to');
const to_label_logo = document.querySelector('#to_label_logo');


const to_0_item = document.querySelector('#to_0');
const to_1_item = document.querySelector('#to_1');
const to_2_item = document.querySelector('#to_2');

to_0_item.textContent = toObj[0].city;
to_1_item.textContent = toObj[1].city;
to_2_item.textContent = toObj[2].city;


const to_0_item_code = document.querySelector('#to_0-code');
const to_1_item_code = document.querySelector('#to_1-code');
const to_2_item_code = document.querySelector('#to_2-code');

to_0_item_code.textContent = toObj[0].code;
to_1_item_code.textContent = toObj[1].code;
to_2_item_code.textContent = toObj[2].code;


const row_to_selected_item = document.querySelector('#row_to_selected');
const row_to_selected = document.querySelector('#to_selected');
const code_to_selected = document.querySelector('#to_selected_code');

const row_to_0_item = document.querySelector('#row_to_0');
const row_to_1_item = document.querySelector('#row_to_1');
const row_to_2_item = document.querySelector('#row_to_2');

code_to_selected.textContent = toObj[0].code;


const logo_table_cell_pop_desc_selected_to = document.querySelector('.logo_table_cell_pop-desc-selected-to');

row_to_0_item.addEventListener('click', ()=> {
    logo_table_cell_pop_desc_selected_to.style.display = 'block';
    to_cell.style.display = 'none';
    to_label.style.display = 'flex';
    to_label_clk.textContent = toObj[0].city
    row_to_selected.textContent = toObj[0].city
    row_to_0_item.style.display = 'none';
    row_to_1_item.style.display = 'flex';
    row_to_2_item.style.display = 'flex';
    to_cell.style.height = '230px';
    to_label_logo.style.fontSize = 'small';
    selected_to = toObj[0].city;
    code_to_selected.textContent = toObj[0].code;
    console.log(selected_to);
    //setInterval (closePopTo, 500);
})

row_to_1_item.addEventListener('click', ()=> {
    logo_table_cell_pop_desc_selected_to.style.display = 'block';
    to_cell.style.display = 'none';
    to_label.style.display = 'flex';
    to_label_clk.textContent = toObj[1].city
    row_to_selected.textContent = toObj[1].city
    row_to_0_item.style.display = 'flex';
    row_to_1_item.style.display = 'none';
    row_to_2_item.style.display = 'flex';
    to_cell.style.height = '230px';
    to_label_logo.style.fontSize = 'small';
    selected_to = toObj[1].city;
    code_to_selected.textContent = toObj[1].code;
    console.log(selected_to);
    //setInterval (closePopTo, 500);
})

row_to_2_item.addEventListener('click', ()=> {
    logo_table_cell_pop_desc_selected_to.style.display = 'block';
    to_cell.style.display = 'none';
    to_label.style.display = 'flex';
    to_label_clk.textContent = toObj[2].city
    row_to_selected.textContent = toObj[2].city
    row_to_0_item.style.display = 'flex';
    row_to_1_item.style.display = 'flex';
    row_to_2_item.style.display = 'none';
    to_cell.style.height = '230px';
    to_label_logo.style.fontSize = 'small';
    selected_to = toObj[2].city;
    code_to_selected.textContent = toObj[2].code;
    console.log(selected_to);
    //setInterval (closePopTo, 500);
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
    //setInterval (closePopTo, 500);
})

// -------------------------------------------------------------------------------------------------------------------------
// 3. Начало - обработчик для  инверсия: Откуда <> Куда

const switch_cell_clk = document.querySelector('#switch_cell');

switch_cell_clk.addEventListener('click', ()=> {

    tmpArr = fromArr.map(function (elem) {return elem }); // fromObj[0].city
    fromArr = toArr.map(function (elem) {return elem });  // fromObj[0].city
    toArr = tmpArr.map(function (elem) {return elem });

    from_0_item.textContent = fromObj[0].city;
    from_1_item.textContent = fromObj[1].city;
    from_2_item.textContent = fromObj[2].city;

    to_0_item.textContent = toArr[0];
    to_1_item.textContent = toArr[1];
    to_2_item.textContent = toArr[2];

    if (from_label_clk) {
    from_label_clk.textContent = fromObj[0].city;
    }
    if (row_from_selected) {
    row_from_selected.textContent = fromObj[0].city;
    }

    if (to_label_clk) {
    to_label_clk.textContent = toObj[0];
    }
    if (row_to_selected) {
    row_to_selected.textContent = toObj[0];
    }

})

// -------------------------------------------------------------------------------------------------------------------------
// 4. Начало - обработчик для пассажиры

