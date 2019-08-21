let Rat = function (name, weight, speed,) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.status = true;

    this.setNameRats = function (nameRats) {
        this.name = nameRats;
    };

    this.getNameRats = function () {
        return this.name;
    };

    this.setWeight = function (val) {
        this.weight = val;
    };

    this.getWeight = function () {
        return this.weight;
    };

    this.setStatus = function (cat) {
        if (this.status) {
            if (cat.status) {
                this.status = Boolean(Math.round(Math.random()))
            }
        }

    };

    this.getStatus = function () {
        return this.status;
    };

    this.speedRange = function () {
        if (this.status) {
            this.speed = Math.round(Math.random() * (70 - 50 + 1)) + 50;
        }

    };

    this.getSpeedRat = function () {
        return this.speed;
    }
};