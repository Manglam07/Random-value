function makeid(length) {
    var result = ''
    let capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let small = "abcdefghijklmnopqrstuvwxyz"
    let num = "0123456789"
    let special = "~@#$%^&*_`.,':;"
    const total = capital + small + num + special
    var totallength = total.length;
    console.log(totallength)
    for (var i = 0; i < length; i++) {
        result += total.charAt(Math.floor(Math.random() * totallength));
    }
    return result;
}

document.write(makeid(8))