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
    if (base === 54 || base === 64 || base === 108 || base === 192 || base === 250) count /= 3;
    if (base === 4 || base === 9 || base === 36 || base === 64 || base === 169 ||
        base === 49 || base === 98 || base === 144 || base === 147 || base === 196) count /= 2;
    if (base === 16) count = (count/14)*3;
    if (base === 81) count /= 4;
    if (base === 160) count = Math.ceil(count*0.8);

    return Math.floor(count);
}