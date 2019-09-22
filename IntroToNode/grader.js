function average(grades) {
    var sum = 0;
    for (var i = 0; i < grades.length; i++) {
        sum += grades[i];
    }
    var avg = Math.round(sum / grades.length);
    return avg;
}

var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));