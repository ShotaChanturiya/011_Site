

const from_cell = document.querySelector('.logo_table_cell_pop_from');
const to_cell = document.querySelector('.logo_table_cell_pop_to');
const button_find_clk = document.querySelector('.button_find');


const from_clk = document.querySelector('#from_cell');
const switch_clk = document.querySelector('#switch_cell');
const to_clk = document.querySelector('#to_cell');
const date_clk = document.querySelector('#date_cell');
const pass_clk = document.querySelector('#pass_cell');


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

