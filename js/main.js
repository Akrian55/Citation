const texts = document.querySelectorAll("p")
const addTitle = document.querySelector("h2")
const up = document.getElementById("up")
const down = document.getElementById("down")

let click = null

texts.forEach(function(text) {
    text.classList.add("unset")
    text.addEventListener("click", function(){
        changeClass(this)
        addText()
    })
})

function changeClass(text) {
    if (click === text) {
        text.classList.toggle("set")
        text.classList.toggle("unset")
        click = null
    }else if (click === null) {
        click = text
        text.classList.toggle("set")
        text.classList.toggle("unset")
    }else{
        click.classList.remove("set")
        click.classList.add("unset")
        click = text
        text.classList.toggle("set")
        text.classList.toggle("unset")
    }
}

function addText() {
    if (click === document.getElementById("r1")) {
        addTitle.innerHTML = "La réplique 1 est séléctionée"
    }else if (click === document.getElementById("r2")) {
        addTitle.innerHTML = "La réplique 2 est séléctionée"
    }else if (click === document.getElementById("r3")) {
        addTitle.innerHTML = "La réplique 3 est séléctionée"
    }else if (click === document.getElementById("r4")) {
        addTitle.innerHTML = "La réplique 4 est séléctionée"
    }else{
        addTitle.innerHTML = "Aucune réplique n'est séléctionnée"
    }
}

function moveText() {
    up.addEventListener("click", function(){
        if (click) {
            const totalItems = texts.length;
            const clickedOrder = parseInt(click.style.order);

            for (let i = 0; i < totalItems; i++) {
                let currentOrder = parseInt(texts[i].style.order);
                if (currentOrder === 1) {
                    texts[i].style.order = totalItems;
                } else {
                    texts[i].style.order = currentOrder - 1;
                }
            }

            click.style.order = clickedOrder === 1 ? totalItems : clickedOrder - 1;
        }
    });

    down.addEventListener("click", function(){
        if (click) {
            const totalItems = texts.length;
            const clickedOrder = parseInt(click.style.order);

            for (let i = 0; i < totalItems; i++) {
                let currentOrder = parseInt(texts[i].style.order);
                if (currentOrder === totalItems) {
                    texts[i].style.order = 1;
                } else {
                    texts[i].style.order = currentOrder + 1;
                }
            }

            click.style.order = clickedOrder === totalItems ? 1 : clickedOrder + 1;
        }
    });
}

moveText();