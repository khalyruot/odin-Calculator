var main_cover = document.querySelector('.main_cover');

function  number_button(){
    for(let i = 0; i < 4; i++){
        var number_row = document.createElement('button');
        number_row.classList.add('number_row');
        main_cover.appendChild(number_row);

        for(let j = 0; j < 4; j++){
            var number_column = document.createElement('button');
            number_column.textContent =j;
            number_row.appendChild(number_column);
            number_column.classList.add('number_column');
        }

    }
}


number_button();
console.log('a');