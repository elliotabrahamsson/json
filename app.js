const anka = new XMLHttpRequest ();

anka.open('GET', 'structure.json');
anka.send();


const duck = new XMLHttpRequest ();

duck.open('GET', 'cars.json');
duck.send();

anka.onload = () => {

    const keys = JSON.parse(anka.responseText);

    for (var key in keys) {
        console.log(key);

        var header = document.createElement(key);

        header.innerHTML = (keys[key]);

        main.appendChild(header);
    };


   
};

duck.onload = () => {
    const cars = JSON.parse(duck.responseText);

    var list = document.createElement('ul');
    carlist.appendChild(list);

    for (var brand in cars) {
        console.log(brand);

        var listrow = document.createElement('li');
        listrow.innerHTML = (cars[brand]);
        list.appendChild(listrow);
    };
}

loadcars = () => {
    carlist.hidden = false;
}


