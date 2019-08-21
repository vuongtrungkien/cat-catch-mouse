let Cat = function (name, weight, speed) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.status = false;

    this.setName = function (name) {
        this.name = name;
    };

    this.getNameCat = function () {
        return this.name;
    };

    this.setWeight = function (val) {
        this.weight = val;
    };

    this.getWeight = function () {
        return this.weight;
    };

    this.setSpeed = function (val) {
        this.speed = val;
    };

    this.speedRange = function () {
        if (!this.status) {
            this.speed = Math.round(Math.random()*(66 - 55)) + 55;
        }

    };

    this.getSpeed = function () {
        return this.speed;
    };


    this.eatRats = function (rat) {
        if (this.status && rat.status) {
            this.weight += rat.weight;
            rat.setWeight(0);
            rat.status = false;
        }
    };

    this.catchTheMouse = function (rat) {
        if (this.speed > rat.speed) {
            this.status = true;
        } else {
            this.status = false;
        }
    };

    this.getStatusCat = function () {
        return this.status;
    }


};