document.write('<br><h3>Task 3 | Function basics</h3>');

// --- Rectangle 5 x 8
printRectangleInfo(5, 8);

// --- Rectangle 3 x 10
printRectangleInfo(3, 10);

function printRectangleInfo(a, b) {
    const perimeter = 2 * a + 2 * b;
    const square = a * b;

    document.write('Rectangle ' + a + ' x ' + b + '<br>');
    document.write('Perimeter is ' + perimeter + '<br>');
    document.write('Square is ' + square + '<br>');
    document.write('----------------------' + '<br><br>');
};