function alterarStatus(num){
    let item = document.getElementById(`game-${num}`);
    let img = item.querySelector('div');
    let btn = item.querySelector('a');

    if (img.classList.contains("dashboard__item__img--rented")){
        img.classList.remove("dashboard__item__img--rented");
        btn.classList.remove("dashboard__item__button--return");
        btn.innerHTML = 'Alugar';

    } else {
        img.classList.add("dashboard__item__img--rented");
        btn.classList.add("dashboard__item__button--return");
        btn.innerHTML = 'Devolver';
    }
}