let app = window.app || {}
let areas = {
    a: null,
    b: null,
    c: null
}


app.init = function () {
    document.querySelector(`.neutralArea`).addEventListener(`click`, (e)=>{
        console.log(e.target)
    })


    document.querySelectorAll(`.item`).forEach(item => {
        item.addEventListener(`dragstart`, app.dragstart );
        item.addEventListener(`dragend`, app.dragend );
    })

    document.querySelectorAll(`.area`).forEach(item => {
        item.addEventListener(`dragover`, app.dragover );
        item.addEventListener(`dragleave`, app.dragleave );
        item.addEventListener(`drop`, app.drop );
    })

    document.querySelectorAll(`.neutralArea`).forEach(item => {
        item.addEventListener(`dragover`, app.neutralDragover );
        item.addEventListener(`dragleave`, app.neutralDragleave );
        item.addEventListener(`drop`, app.neutralDrop );
    })
}
app.dragover = function (e) {
    if(e.currentTarget.querySelector(`.item`) === null){
        e.preventDefault();
        e.currentTarget.classList.add(`hover`);
    }
    //console.log(`passou por cima`);
}
app.dragleave = function (e) {
    console.log(`saiu de area dragable`);
    e.currentTarget.classList.remove(`hover`);
}

app.dragstart = function (e) {
    e.currentTarget.classList.add(`dragging`)
}

app.dragend = function (e) {
    e.currentTarget.classList.remove(`dragging`)
}

app.drop = function (e) {
    e.currentTarget.classList.remove(`hover`);
    if(e.currentTarget.querySelector(`.item`) === null){
        let d = document.querySelector(`.item.dragging`);
        e.currentTarget.appendChild(d);
    }
    app.atualizarAreas()
}

app.neutralDragover = function (e) {
    e.preventDefault()
    e.currentTarget.classList.add(`hover`);


}
app.neutralDragleave = function (e) {
    e.currentTarget.classList.remove(`hover`);
}
app.neutralDrop = function (e) {
    e.currentTarget.classList.remove(`hover`);
    let d = document.querySelector(`.item.dragging`);
    e.currentTarget.appendChild(d);

    app.atualizarAreas()
}

app.atualizarAreas = function (){
    document.querySelectorAll(`.area`).forEach(area=> {
        //console.log(area)
        let n = area.getAttribute(`data-name`);
        //console.log(n)
        if(area.querySelector(`.item`) !== null){
            //console.log(area.querySelector(`.item`).innerHTML)
            areas[n] = area.querySelector(`.item`).innerHTML;
        }
        else
            areas[n] = null;

        if(areas.a == 1 && areas.b == 2 && areas.c == 3)
            document.querySelector(`.areas`).classList.add(`correct`);
        else
            document.querySelector(`.areas`).classList.remove(`correct`);

        console.log(areas);
    })

}

app.init();