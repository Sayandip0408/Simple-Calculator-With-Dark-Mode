let outputScreen = document.getElementById("output-screen");

function display(num) {
    outputScreen.value += num;
}

function calculate() {
    try {
        outputScreen.value = eval(outputScreen.value);
    }
    catch (err) {
        alert("Invalid");
    }
}

function Clear() {
    outputScreen.value = "";
}

function del() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}

function darkMode() {
    let l = document.getElementById('light-mode');
    let d = document.getElementById('dark-mode');
    let container = document.getElementById('container');
    let calculator = document.getElementById('calculator');
    let output_screen = document.getElementById('output-screen');
    let clear = document.getElementById('clear');
    let del = document.getElementById('del');
    let modulus = document.getElementById('modulus');
    let divide = document.getElementById('divide');
    let multiply = document.getElementById('multiply');
    let minus = document.getElementById('minus');
    let plus = document.getElementById('plus');
    let one = document.getElementById('1');
    let two = document.getElementById('2');
    let three = document.getElementById('3');
    let four = document.getElementById('4');
    let five = document.getElementById('5');
    let six = document.getElementById('6');
    let seven = document.getElementById('7');
    let eight = document.getElementById('8');
    let nine = document.getElementById('9');
    let zero = document.getElementById('0');
    let point = document.getElementById('point');
    let equal = document.getElementById('equal');
    let h1 = document.getElementById('h1');
    let h2 = document.getElementById('h2');

    l.style.display = "none";
    d.style.display = "block";
    container.style.backgroundImage = "linear-gradient(135deg, #2a2f32 , #1e2225)";
    calculator.style.backgroundImage = "linear-gradient(135deg, #4a4e4f , #1d2124)"
    calculator.style.boxShadow = "inset 5px 5px 12px black, 5px 5px 12px black;";
    output_screen.style.backgroundColor = "#606060";
    output_screen.style.boxShadow = "inset -2px -2px 12px #1d1d1d, inset 2px 2px 12px rgba(0, 0, 0, 0.719)";
    output_screen.style.color = "#ecf0f3";
    clear.style.boxShadow = "none";
    del.style.boxShadow = "none";
    modulus.style.boxShadow = "none";
    minus.style.boxShadow = "none";
    plus.style.boxShadow = "none";
    multiply.style.boxShadow = "none";
    divide.style.boxShadow = "none";
    one.style.boxShadow = "none";
    two.style.boxShadow = "none";
    three.style.boxShadow = "none";
    four.style.boxShadow = "none";
    five.style.boxShadow = "none";
    six.style.boxShadow = "none";
    seven.style.boxShadow = "none";
    eight.style.boxShadow = "none";
    nine.style.boxShadow = "none";
    zero.style.boxShadow = "none";
    point.style.boxShadow = "none";
    equal.style.boxShadow = "none";
    h2.style.color = "white";

    console.log("dark mode activated");
}

function lightMode() {
    let l = document.getElementById('light-mode');
    let d = document.getElementById('dark-mode');
    let container = document.getElementById('container');
    let calculator = document.getElementById('calculator');
    let output_screen = document.getElementById('output-screen');
    let clear = document.getElementById('clear');
    let del = document.getElementById('del');
    let modulus = document.getElementById('modulus');
    let divide = document.getElementById('divide');
    let multiply = document.getElementById('multiply');
    let minus = document.getElementById('minus');
    let plus = document.getElementById('plus');
    let one = document.getElementById('1');
    let two = document.getElementById('2');
    let three = document.getElementById('3');
    let four = document.getElementById('4');
    let five = document.getElementById('5');
    let six = document.getElementById('6');
    let seven = document.getElementById('7');
    let eight = document.getElementById('8');
    let nine = document.getElementById('9');
    let zero = document.getElementById('0');
    let point = document.getElementById('point');
    let equal = document.getElementById('equal');
    let h1 = document.getElementById('h1');
    let h2 = document.getElementById('h2');

    d.style.display = "none";
    l.style.display = "block";
    container.style.backgroundImage = "linear-gradient(135deg, #ecf0f3, rgba(0, 0, 0, 0.16))";
    calculator.style.backgroundImage = "linear-gradient(135deg, #ecf0f3 , #ecf0f3)"
    output_screen.style.backgroundColor = "#ecf0f3";
    output_screen.style.boxShadow = "inset -5px -5px 12px #ffffff, inset 5px 5px 12px rgba(0, 0, 0, 0.16)";
    output_screen.style.color = "black";
    clear.style.boxShadow = "-5px -5px 12px #fff, 5px 5px 12px rgba(210, 100, 3, 0.413)";
    del.style.boxShadow = " -5px -5px 12px #fff, 5px 5px 12px rgba(210, 3, 3, 0.413)";
    modulus.style.boxShadow = "-5px -5px 12px #fff, 2px 2px 8px rgba(165, 3, 210, 0.413)";
    minus.style.boxShadow = "-5px -5px 12px #fff, 2px 2px 8px rgba(165, 3, 210, 0.413)";
    plus.style.boxShadow = "-5px -5px 12px #fff, 2px 2px 8px rgba(165, 3, 210, 0.413)";
    multiply.style.boxShadow = "-5px -5px 12px #fff, 2px 2px 8px rgba(165, 3, 210, 0.413)";
    divide.style.boxShadow = "-5px -5px 12px #fff, 2px 2px 8px rgba(165, 3, 210, 0.413)";
    one.style.boxShadow = "-5px -5px 12px #fff, 5px 5px 12px rgba(0, 0, 0, 0.16)";
    two.style.boxShadow = "-5px -5px 12px #fff, 5px 5px 12px rgba(0, 0, 0, 0.16)";
    three.style.boxShadow = "-5px -5px 12px #fff, 5px 5px 12px rgba(0, 0, 0, 0.16)";
    four.style.boxShadow = "-5px -5px 12px #fff, 5px 5px 12px rgba(0, 0, 0, 0.16)";
    five.style.boxShadow = "-5px -5px 12px #fff, 5px 5px 12px rgba(0, 0, 0, 0.16)";
    six.style.boxShadow = "-5px -5px 12px #fff, 5px 5px 12px rgba(0, 0, 0, 0.16)";
    seven.style.boxShadow = "-5px -5px 12px #fff, 5px 5px 12px rgba(0, 0, 0, 0.16)";
    eight.style.boxShadow = "-5px -5px 12px #fff, 5px 5px 12px rgba(0, 0, 0, 0.16)";
    nine.style.boxShadow = "-5px -5px 12px #fff, 5px 5px 12px rgba(0, 0, 0, 0.16)";
    zero.style.boxShadow = "-5px -5px 12px #fff, 5px 5px 12px rgba(0, 0, 0, 0.16)";
    point.style.boxShadow = "-5px -5px 12px #fff, 5px 5px 12px rgba(0, 0, 0, 0.16)";
    equal.style.boxShadow = "-5px -5px 12px #fff, 5px 5px 12px rgba(183, 0, 255, 0.31)";
    h2.style.color = "black";

    console.log("dark mode activated");
}