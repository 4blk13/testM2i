function exo1(chaine) {
    return chaine.split("").reverse().join("");
}

console.log(exo1("maison"));

function exo2(chaine) {
    let res = "";
    Array.from(chaine).forEach(s => {
       res += s.repeat(2);
    });
    return res;
}

console.log(exo2("abc"));

function atLeastTwo(tableau, callback) {
    let cmpt = 0;
    for (let element of tableau) {
        if (callback(element)) {
            cmpt++;
        }
        if (cmpt == 2) {
            return true;
        }
    }
    return false;
}

console.log(atLeastTwo(['abc', 'cba', 'ccc'], (e) => {return e.contains('a');}));