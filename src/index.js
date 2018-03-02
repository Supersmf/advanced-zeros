module.exports = function getZerosCount(number, base) {
  let count = 0;
    let num = number;
    let currBase = base;
    let divider = null;
    let divide = () => 1 <= (num / divider);

    for (let i = 2; i <= currBase; i++) {
        while (!(currBase % i)) {
            currBase /= i;
            divider = i;
        }
    }

    while (divide()) {
        num = Math.floor(num / divider);
        count += num;
    }
    // if(base > 100) count /= 2;
    // if(base > 200) count /= 3;
    return Math.floor(count);
}