import Building from './5-building.js';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {

    evacuationWarningMessage() {
        console.log("El motodo si fue heredado");
    }
}

try {
    new TestBuilding(200)
}
catch(err) {
    console.log(`${err.message}`);
};



