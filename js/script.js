// -------------------------------------------------------------------------------------------------------------------------
// Объявление переменных

let fromObj = [ //бывший массив fromArr
    {city: 'Варшава', code: 'WAW'},
    {city: 'Кишинев', code: 'RMO'},
    {city: 'Балице', code: 'KRK'}
]

let toObj = [ //бывший массив toArr
    {city: 'Париж', code: 'PAR'},
    {city: 'Нью-Йорк', code: 'NYC'},
    {city: 'Лондон', code: 'LON'},
]

let tmpArr = []; //tmpArr

let selected_from = fromObj[0].city;
let selected_to = null;

let date_forward = null;    // дата туда
let date_back = null;       // дата обратно

let adult = 1;              // количество взрослых
let children = 0;           // количество детей
let baby = 0;               // количество младенцев
let pass_quantity = adult + children + baby;
let pass_class = 'любой';

class UserRequest {

}

// -------------------------------------------------------------------------------------------------------------------------
// Дизайн - выпадающие pop-ы
const from_cell = document.querySelector('.logo_table_cell_pop_from');      //выпадающие pop-ы с содержимым (выборка по классам)
const to_cell = document.querySelector('.logo_table_cell_pop_to');          
const forward_cell = document.querySelector('.logo_table_cell_pop_forward');
const back_cell = document.querySelector('.logo_table_cell_pop_back');
const date_cell_head = document.querySelector('.logo_table_cell_pop_desc-date-comm'); // заголовок pop-а с датами
const pass_cell = document.querySelector('.logo_table_cell_pop_pass');
const button_find_clk = document.querySelector('.button_find');


const from_clk = document.querySelector('#from_cell');          //заголовки ячеек (окошечки) / (выборка по id-шникам)
const switch_clk = document.querySelector('#switch_cell');
const to_clk = document.querySelector('#to_cell');
const forward_clk = document.querySelector('#forward_cell');
const back_clk = document.querySelector('#back_cell'); // <------- сделать действия для этой шняги
const pass_clk = document.querySelector('#pass_cell');

// -------------------------------------------------------------------------------------------------------------------------
// Объявление функций

function closePopFrom() {
    from_cell.style.display = 'none';
}

function closePopTo() {
    to_cell.style.display = 'none';
}

function getById(id) {
    return document.getElementById(id);
}


// -------------------------------------------------------------------------------------------------------------------------
// Действие - выпадающие pop-ы

let showfrom = false;
let showto = false;
let showforward = false;
let showback = false; // <------- сделать activity для showback такие же как для showforward
let showpass = false;


from_clk.addEventListener('click', ()=> {
    if(showfrom) {
        from_cell.style.display = 'none';
        from_clk.style.border = 'none';
        from_clk.style.borderRight = '1px solid gray';
    } else {
        from_cell.style.display = 'block';
        to_cell.style.display = 'none';
        forward_cell.style.display = 'none';
        back_cell.style.display = 'none';
        pass_cell.style.display = 'none';
        showto = false;
        showforward = false;
        showback = false;
        showpass = false;
        from_clk.style.border = '1px solid blue';
//убираю бордеры
        to_clk.style.border = 'none';
        forward_clk.style.border = 'none';
        back_clk.style.border = 'none';
        pass_clk.style.border = 'none';
    }
    showfrom = !showfrom;
})

to_clk.addEventListener('click', ()=> {
    if(showto) {
        to_cell.style.display = 'none';
        to_clk.style.border = 'none';
    } else {
        from_cell.style.display = 'none';
        to_cell.style.display = 'block';
        forward_cell.style.display = 'none';
        back_cell.style.display = 'none';
        pass_cell.style.display = 'none';
        showfrom = false;
        showforward = false;
        showback = false;
        showpass = false;
        to_clk.style.border = '1px solid blue';
//убираю бордеры
        from_clk.style.border = 'none';
        from_clk.style.borderRight = '1px solid gray';
        forward_clk.style.border = 'none';
        back_clk.style.border = 'none';
        pass_clk.style.border = 'none';
    }
    showto = !showto;
})

forward_clk.addEventListener('click', ()=> {
    if(showforward) {
        forward_cell.style.display = 'none';
        forward_clk.style.border = 'none';
    } else {
        from_cell.style.display = 'none';
        to_cell.style.display = 'none';
        forward_cell.style.display = 'block';
        back_cell.style.display = 'none';
        pass_cell.style.display = 'none';
        showfrom = false;
        showto = false;
        showback = false;
        showpass = false;
        forward_clk.style.border = '1px solid blue';
        date_cell_head.textContent = 'Выберите дату туда';
        forward_cell.style.left = '50px'; // сдвигаю pop с датами влево (первоначальное значение в стилях так же 50px)
//убираю бордеры
        from_clk.style.border = 'none';
        from_clk.style.borderRight = '1px solid gray';
        to_clk.style.border = 'none';
        pass_clk.style.border = 'none';
        back_clk.style.border = 'none';
    }
    showforward = !showforward;
})

back_clk.addEventListener('click', ()=> {
    if(showback) {
        forward_cell.style.display = 'none';
        back_clk.style.border = 'none';
    } else {
        from_cell.style.display = 'none';
        to_cell.style.display = 'none';
        forward_cell.style.display = 'block';
        back_cell.style.display = 'none';
        pass_cell.style.display = 'none';
        showfrom = false;
        showto = false;
        showforward = false;
        showpass = false;
        back_clk.style.border = '1px solid blue';
        date_cell_head.textContent = 'Выберите дату обратно';
        forward_cell.style.left = '180px'; // сдвигаю pop с датами вправо
//убираю бордеры
        from_clk.style.border = 'none';
        from_clk.style.borderRight = '1px solid gray';
        to_clk.style.border = 'none';
        pass_clk.style.border = 'none';
        forward_clk.style.border = 'none';
    }
    showback = !showback;
})

pass_clk.addEventListener('click', ()=> {
    if(showpass) {
        pass_cell.style.display = 'none';
        pass_clk.style.border = 'none';
    } else {
        from_cell.style.display = 'none';
        to_cell.style.display = 'none';
        forward_cell.style.display = 'none';
        back_cell.style.display = 'none';
        pass_cell.style.display = 'block';
        showfrom = false;
        showto = false;
        showforward = false;
        showback = false;
        pass_clk.style.border = '1px solid blue';
//убираю бордеры
        from_clk.style.border = 'none';
        from_clk.style.borderRight = '1px solid gray';
        to_clk.style.border = 'none';
        forward_clk.style.border = 'none';
        back_clk.style.border = 'none';
    }
    showpass = !showpass;
})


button_find_clk.addEventListener('click', ()=> {
    from_cell.style.display = 'none';
    to_cell.style.display = 'none';
    forward_cell.style.display = 'none';
    back_cell.style.display = 'none';
    pass_cell.style.display = 'none';
    showfrom = false;
    showto = false;
    showforward = false;
    showback = false;
    showpass = false;

    // необходимо обнулить все ячейки и привести их значения к к значениям по умолчанию
    from_label_clk.textContent = fromObj[0].city;
    to_label_clk.textContent = null;

    //убрать бордеры

    //вывод результата в терминал
    console.log(selected_from);
    console.log(selected_to);
    console.log(adult);
    console.log(children);
    console.log(baby);
    console.log(pass_class);
    
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
    selected_from = null;
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
    selected_to = null;
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

pass_cell.addEventListener('click', (e)=>{
    e.stopPropagation();
})

const pass_total_inf = document.querySelector('#pass_label');
pass_total_inf.textContent = `${pass_quantity} пассажир, ${pass_class}`;


const adult_minus_clk = document.querySelector('#adult_minus');
const adult_quantity_clk = document.querySelector('#adult_quantity');
const adult_plus_clk = document.querySelector('#adult_plus');

const children_minus_clk = document.querySelector('#children_minus');
const children_quantity_clk = document.querySelector('#children_quantity');
const children_plus_clk = document.querySelector('#children_plus');

const baby_minus_clk = document.querySelector('#baby_minus');
const baby_quantity_clk = document.querySelector('#baby_quantity');
const baby_plus_clk = document.querySelector('#baby_plus');

const class_any_clk = document.querySelector('#class_any');
const class_business_clk = document.querySelector('#class_business');
const class_economy_clk = document.querySelector('#class_economy');


adult_quantity_clk.textContent = adult;
children_quantity_clk.textContent = children;
baby_quantity_clk.textContent = baby;

// adult block

adult_plus_clk.addEventListener('click', ()=> {
    
    
    if (pass_quantity < 9) {
    if (adult < 9) {
        adult ++;
        pass_quantity = adult + children + baby;
        pass_total_inf.textContent = `${pass_quantity} пассажир, ${pass_class}`;
        adult_quantity_clk.textContent = adult;
        }
    }
})

adult_minus_clk.addEventListener('click', ()=> {
    if (adult > 1) {
        adult --;
        adult_quantity_clk.textContent = adult;
        pass_quantity = adult + children + baby;
        pass_total_inf.textContent = `${pass_quantity} пассажир, ${pass_class}`;
    }
})

// children block

children_plus_clk.addEventListener('click', ()=> {
    
    
    if (pass_quantity < 9) {
    if (children < 8) {
        children ++;
        children_quantity_clk.textContent = children;
        pass_quantity = adult + children + baby;
        pass_total_inf.textContent = `${pass_quantity} пассажир, ${pass_class}`;

        }
    }
})

children_minus_clk.addEventListener('click', ()=> {
    if (children > 0) {
        children --;
        children_quantity_clk.textContent = children;
        pass_quantity = adult + children + baby;
        pass_total_inf.textContent = `${pass_quantity} пассажир, ${pass_class}`;
    }
})

// baby block

baby_plus_clk.addEventListener('click', ()=> {
    
    
    if (pass_quantity < 9) {
    if (baby < 8) {
        baby ++;
        baby_quantity_clk.textContent = baby;
        pass_quantity = adult + children + baby;
        pass_total_inf.textContent = `${pass_quantity} пассажир, ${pass_class}`;

        }
    }
})

baby_minus_clk.addEventListener('click', ()=> {
    if (baby > 0) {
        baby --;
        baby_quantity_clk.textContent = baby;
        pass_quantity = adult + children + baby;
        pass_total_inf.textContent = `${pass_quantity} пассажир, ${pass_class}`;
    }
})

// блок выбора Класс-а

class_any_clk.addEventListener('click', ()=> {
    pass_class = 'любой';
    class_any_clk.className = 'logo_table_cell_pop-desc-class-button_select';
    class_business_clk.className = 'logo_table_cell_pop-desc-class-button';
    class_economy_clk.className = 'logo_table_cell_pop-desc-class-button';
    pass_total_inf.textContent = `${pass_quantity} пассажир, ${pass_class}`;
})

class_business_clk.addEventListener('click', ()=> {
    pass_class = 'бизнес';
    class_any_clk.className = 'logo_table_cell_pop-desc-class-button';
    class_business_clk.className = 'logo_table_cell_pop-desc-class-button_select';
    class_economy_clk.className = 'logo_table_cell_pop-desc-class-button';
    pass_total_inf.textContent = `${pass_quantity} пассажир, ${pass_class}`;
})

class_economy_clk.addEventListener('click', ()=> {
    pass_class = 'эконом';
    class_any_clk.className = 'logo_table_cell_pop-desc-class-button';
    class_business_clk.className = 'logo_table_cell_pop-desc-class-button';
    class_economy_clk.className = 'logo_table_cell_pop-desc-class-button_select';
    pass_total_inf.textContent = `${pass_quantity} пассажир, ${pass_class}`;
})

// кнопка Ок (подтверждение выбора кол-ва пассажиров и класса

const class_apply_clk = document.querySelector('#class_apply');

class_apply_clk.addEventListener('click', ()=> {
    if(showpass) {
        pass_cell.style.display = 'none';
        pass_clk.style.border = 'none';
    } else {
        from_cell.style.display = 'none';
        to_cell.style.display = 'none';
        forward_cell.style.display = 'none';
        back_cell.style.display = 'none';
        pass_cell.style.display = 'block';
        showfrom = false;
        showto = false;
        showforward = false;
        showback = false;
        pass_clk.style.border = '1px solid blue';
    }
    showpass = !showpass;
})

// -------------------------------------------------------------------------------------------------------------------------
// 5. Начало - обработчик для даты

forward_cell.addEventListener('click', (e)=>{
    e.stopPropagation();
})

const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
];

const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

let date = new Date();
let curMonth = date.getMonth();
let nextMonth = date.getMonth() + 1;
let curYear = date.getFullYear();
let nextYear = date.getFullYear();
let curDay = date.getDate();

let Month = date.getMonth();
let Year = date.getFullYear();

// выводим даты для текущего месяца _+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_<<<<<<<<<<<<<<<<<<<<<
const cur_month_days = document.querySelector('#cur_month_days');


function showCurMonth (curYear, curMonth) {
    console.log(`curYear = ${curYear}`);
    console.log(`curMonth = ${curMonth}`);

let firstDayOfCurMonth = new Date(curYear, curMonth, 1).getDay(); //6-й день по счету
console.log(`firstDayOfCurMonth = ${firstDayOfCurMonth}`);

if(firstDayOfCurMonth === 0){
    firstDayOfCurMonth = 7
}

let lastDayOfCurMonth = new Date(curYear, curMonth+1, 0).getDate(); //28
console.log(`lastDayOfCurMonth = ${lastDayOfCurMonth}`);

let lastDayOfPrevMonth = new Date(curYear, curMonth, 0).getDate();  //31 день в предыдущем месяце
console.log(`lastDayOfPrevMonth = ${lastDayOfPrevMonth}`);

for (i = 1; i <= lastDayOfCurMonth; i+=1) { // предыдущие дни для текущего месяца
    if(i === 1) {
        //let prevMonthDay = lastDayOfPrevMonth - firstDayOfCurMonth + 2; // 31 - 6 = 25
        let curMonthcycleDays = 7 - (8 - firstDayOfCurMonth); // 5
        let prevMonthDay = lastDayOfPrevMonth + 1 - curMonthcycleDays; // 31 + 1 - 5 = 27
        console.log(`prevMonthDayStartfrom = ${prevMonthDay}`);

        for(let j=1; j<=curMonthcycleDays; j+=1){
            let dasy = document.createElement('div');
            dasy.textContent = prevMonthDay;
            cur_month_days.append(dasy);
            dasy.classList.add('date_days_x_cell_u');
            prevMonthDay+=1;
        }
    }
    // let dasy = document.createElement('div'); // текущие дни месяца
    // dasy.textContent = i;
    // cur_month_days.append(dasy);

    if(i === curDay & Month === curMonth & Year === curYear) {  // проверка на сегодня

        let dasy = document.createElement('div');
        dasy.textContent = `Сегодня ${i}`;  // формируем содержание ячейки
        cur_month_days.append(dasy);
        dasy.classList.add('date_days_x_cell_b_c');


    } else {
       let dasy = document.createElement('div'); // текущие дни месяца
        dasy.textContent = i;
        dasy.classList.add('date_days_x_cell_z');
        cur_month_days.append(dasy);
    }

    if(i === lastDayOfCurMonth) { // выводим дни следующего месяца //28
        let lastcurMonthDay = new Date(curYear, curMonth, i).getDay(); // какой по счету недели, последний день месяца // 5-й день недели
        if (lastcurMonthDay > 0) {
            console.log(`lastcurMonthDay = ${lastcurMonthDay}`);
            let counter = 1;
            let remaincurMonthDays = 7 - lastcurMonthDay; // сколько осталось вывести дней для заполнения таблици // 2
            console.log(`remaincurMonthDays = ${remaincurMonthDays}`);

            for(counter; counter <= remaincurMonthDays; counter++){
                let dasy = document.createElement('div');
                dasy.textContent = counter;
                cur_month_days.append(dasy);
                dasy.classList.add('date_days_x_cell_u');
            }
        }
    }
    
}
}

// выводим даты для следующего месяца _+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_>>>>>>>>>>>>>>>>>>
const next_month_days = document.querySelector('#next_month_days');

function showNextMonth (nextYear, nextMonth) {
    console.log(`year = ${nextYear}`);
    console.log(`month = ${nextMonth}`);

let firstDayOfNextMonth = new Date(nextYear, nextMonth, 1).getDay(); // какой по счету первый день следующего месяца
console.log(`firstDayOfNextMonth = ${firstDayOfNextMonth}`);

if(firstDayOfNextMonth === 0){
    firstDayOfNextMonth = 7; ///вопросики
    console.log(`firstDayOfNextMonth = ${firstDayOfNextMonth}`);
}

let lastDayOfNextMonth = new Date(nextYear, nextMonth+1, 0).getDate(); // сколько дней в следующем после следующего месяця
console.log(`lastDayOfNextMonth = ${lastDayOfNextMonth}`);

 let lastDayOfCurMonth2 = new Date(nextYear, nextMonth, 0).getDate(); // сколько дней в следующем месяце
 console.log(`lastDayOfCurMonth2 = ${lastDayOfCurMonth2}`);

for (k = 1; k <= lastDayOfNextMonth; k+=1) {  // предыдущие дни для следующего месяца
    if(k === 1) {
        //let curMonthDay = lastDayOfCurMonth2 - firstDayOfNextMonth + 2;
        let nextMonthcycleDays = 7 - (8 - firstDayOfNextMonth); // 5
        let curMonthDay = lastDayOfCurMonth2 + 1 - nextMonthcycleDays; // 31 + 1 - 5 = 27
        console.log(`curMonthDayStartfrom = ${curMonthDay}`);

        for(let l = 1; l <= nextMonthcycleDays; l+=1){
            let dasb = document.createElement('div');
            dasb.textContent = curMonthDay;
            next_month_days.append(dasb);
            dasb.classList.add('date_days_x_cell_u');
            curMonthDay+=1;
        }
    }
    let dasb = document.createElement('div'); // выводим дни следующего месяца
    dasb.textContent = k;
    dasb.classList.add('date_days_x_cell_b');

    dasb.addEventListener('click', ()=>{
        paintDay(dasb);
    })
    allDays.push(dasb);
    next_month_days.append(dasb);

    if(k === lastDayOfNextMonth) { // выводим дни следующего после следующего месяца
        //let remainnextMonthDay = new Date(nextYear, nextMonth+1, k).getDay();
        let lastNextMonthDay = new Date(nextYear, nextMonth, k).getDay(); // какой по счету недели, последний день месяца // 5-й день недели
        if (lastNextMonthDay > 0) {
            let counter2 = 1;
            let remainnextMonthDays = 7 - lastNextMonthDay; // сколько осталось вывести дней для заполнения таблици 
            for(counter2; counter2 <= remainnextMonthDays; counter2++){
                let dasb = document.createElement('div');
                dasb.textContent = counter2;
                next_month_days.append(dasb);
                dasb.classList.add('date_days_x_cell_u');
            }
        }
    }
 }
}

let counter3 = 0;
let allDays = [];
let clickedDays = [];
let betweenDays = [];

function paintDay(dasb) {    // функция закрашивания ячейки
    if(counter3 > 1) {
        counter3 = 0
        clickedDays.forEach(item => item.style.backgroundColor = 'inherit');
        clickedDays.forEach(item => item.style.color = 'black');
        clickedDays.forEach(item => item.style.borderRadius = '0');
        clickedDays.forEach(item => item.classList = 'date_days_x_cell_b'); 
        
        let r1 = allDays.indexOf(clickedDays[0]);
        r1++;
        clickedDays[0].textContent = `${r1}`;
        
        let r2 = allDays.indexOf(clickedDays[1]);
        r2++;
        clickedDays[1].textContent = `${r2}`;
        clickedDays = [];

        betweenDays.forEach(item => item.style.backgroundColor = 'inherit');
        betweenDays = [];
    }

    if(counter3 === 0) {//если кликнули по первой ячейке -> покрасить, применить текст ТУДА
        let fa = dasb.textContent;
        console.log(`FA = ${fa}`);
        dasb.textContent = `Туда ${fa}`;  // формируем содержание ячейки
        dasb.classList.add('date_days_x_cell_b_c_2');
    }  


    clickedDays.push(dasb);


    //let chkDay = allDays.indexOf(clickedDays[0]);              // если щелкаем по дате раньше 
    //     if(clickedDays.length && +dasb.textContent < chkDay+1){  // если щелкаем по дате раньше
    //     return;                                                 // если щелкаем по дате раньше
    // }                                                           // если щелкаем по дате раньше


    if(counter3 === 1) { //если кликнули по второй ячейке -> покрасить, применить текст ОБРАТНО

        let fb = dasb.textContent;

        dasb.textContent = `Обратно ${fb}`;  // формируем содержание ячейки
        dasb.classList.add('date_days_x_cell_b_c_3');

        let first = allDays.indexOf(clickedDays[0]);
        let last = allDays.indexOf(clickedDays[1]);
        betweenDays = allDays.slice(first+1, last);
        betweenDays.forEach(item => item.style.backgroundColor = 'pink');
        // counter3 = 0
        // clickedDays.forEach(item => item.style.backgroundColor = 'inherit');
        // clickedDays = [];
    }

    
    //clickedDays.push(dasb); 
    dasb.style.backgroundColor = 'rgba(255, 0, 0, 0.65)';
    dasb.style.borderRadius = '5px';
    dasb.style.color = 'white';
    counter3 += 1;
}


// --------------------- стрелочки для месяцев ---------------------

const prevMonth_pic = document.querySelector('#prevMonth');  // стрелочка Предыдущий месяц
const nextMonth_pic = document.querySelector('#nextMonth');  // стрелочка Следующий месяц

const curMonth_label = document.querySelector('#curMonth');  // текущий месяц
curMonth_label.textContent = `${months[curMonth]}  ${curYear}`; // применяем в заголовке текущий месяц

const nextMonth_label = document.querySelector('#curMonthplusone');  // текущий месяц
nextMonth_label.textContent = `${months[nextMonth]}  ${curYear}`; // применяем в заголовке следующий месяц


prevMonth_pic.addEventListener('click', ()=> { // клик на иконке Предыдущий месяц
    cur_month_days.innerHTML =''; // стираем блок Следующий месяц
    next_month_days.innerHTML =''; // стираем блок Следующий месяц

    curMonth--;
    nextMonth--;

    if(curMonth === -1) {
        curMonth = 11;
        curYear--;
    }

    if(nextMonth === -1) {
        nextMonth = 11;
        nextYear--;
    }     

    curMonth_label.textContent = `${months[curMonth]}  ${curYear}`;
    nextMonth_label.textContent = `${months[nextMonth]}  ${nextYear}`;


//  вывожу текущий месяц 
showCurMonth(curYear, curMonth);
//  вывожу следующий месяц
showNextMonth(nextYear, nextMonth);    

})




nextMonth_pic.addEventListener('click', ()=> { // клик на иконке Следующий месяц
    cur_month_days.innerHTML =''; // стираем блок Следующий месяц
    next_month_days.innerHTML =''; // стираем блок Следующий месяц

    curMonth++;
    nextMonth++;

    if(curMonth === 12) {
        curMonth = 0;
        curYear++;
    }

    if(nextMonth === 12) {
        nextMonth = 0;
        nextYear++;
    }

    curMonth_label.textContent = `${months[curMonth]}  ${curYear}`;
    nextMonth_label.textContent = `${months[nextMonth]}  ${nextYear}`;

//  вывожу текущий месяц 
showCurMonth(curYear, curMonth);
//  вывожу следующий месяц
showNextMonth(nextYear, nextMonth);

})


//  первый раз вывожу текущий месяц 
showCurMonth(curYear, curMonth);
//  первый раз вывожу следующий месяц
showNextMonth(nextYear, nextMonth);


console.log('10: Ok');


// let y = date.getFullYear();
// let m = date.getMonth();
// //let d = date.getDate();
// let a = new Date(y, m+1, 0).getDate();

let y = 2024;
let m = 11;
//let d = date.getDate();
let a = new Date(y, m, 1).getDay();

// console.log(y)
// console.log(m)
// //console.log(d)
 console.log(a)

// for (d = 0; d<=28; d+=1) {
// console.log(`new Date(y, m, ${d}).getDay()`)
// }
