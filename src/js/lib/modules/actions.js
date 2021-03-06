import $ from '../core';

$.prototype.html = function(content) {
    for ( let i = 0; i < this.length; i++){
        if(content){
            this[i].innerHTML = content;
        } else {
            return this[i].innerHTML;
        }
    }

    return this;
};  

$.prototype.eq = function(i) {
    const swap = this[i];
    const objLenght = Object.keys(this).length;

    for (let i = 0; i < objLenght; i++) {
        delete this[i];
    }

    return this;
};  


