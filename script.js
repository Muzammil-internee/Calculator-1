  var screen = document.querySelector('#screen');
  var btn = document.querySelectorAll('.btn');
  let variableObject = {};

  /*============ For getting the value of btn, Here we use for loop ============*/
  btn.forEach((buttons)=>{
    {
        buttons.addEventListener('click', (e) => {
          btntext = e.target.innerText;
          console.log("hello")
    
          if (btntext == '×') {
            btntext = '*';
          }
    
          if (btntext == '÷') {
            btntext = '/';
          }
          screen.value += btntext;
        });
      }
  })

  function equal() {
    let screen = document.getElementById('screen');
    let output = document.getElementById('output');
    const variable1 = document.getElementById('name1').value;
    const variable2 = document.getElementById('name2').value;
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;

    let input = screen.value;
    if (input) {
      input = input = input.trim();
      if (input.includes('sin')) {
        let value = input.split('sin(')[1];
        value = value.split(')')[0];
        console.log({ value, variable1 }, value === variable1);
        output.value = Math.sin(value === variable1 ? value1: value === variable2? value2: value) || "Invalid Input";
      } else if (input.includes('cos')) {
        let value = input.split('cos(')[1];
        value = value.split(')')[0];
        output.value = Math.cos(value === variable1 ? value1: value === variable2? value2: value) || "Invalid Input";
      } else if (input.includes('tan')) {
        let value = input.split('tan(')[1];
        value = value.split(')')[0];
        output.value = Math.cos(value === variable1 ? value1: value === variable2? value2: value) || "Invalid Input";
      } else if (input.includes('pi')) {
        let value = input.split('pi(')[1];
        value = value.split(')')[0];
        output.value = value * 3.14159265359;
      } else if (input.includes('sqrt')) {
        let value = input.split('sqrt(')[1];
        value = value.split(')')[0];
        output.value = Math.sqrt(value === variable1 ? value1: value === variable2? value2: value) || "Invalid Input";
      } else if (input.includes('^')) {
        let values = input.split('^');
        let number = values[0] === variable1 ? value1: values[0] === variable2? value2: values[0];
        let power = values[1] === variable1 ? value1: values[1] === variable2? value2: values[1];
        output.value = Math.pow(number, power) || "Invalid Input";
      } else if (input.includes('e(')) {
        let value = input.split('e(')[1];
        value = value.split(')')[0];
        output.value = (value === variable1 ? value1: value === variable2? value2: value)* Math.E || "Invalid Input";
      } else if (input.includes('+')) {
        let value = input.split('+');
        output.value = Number(value[0] === variable1 ? value1: value[0] === variable2? value2: value[0]) + Number(value[1] === variable1 ? value1: value[1] === variable2? value2: value[1]) || "Invalid Input";
      } else if (input.includes('*')) {
        let value = input.split('*');
        output.value = Number(value[0] === variable1 ? value1: value[0] === variable2? value2: value[0]) * Number(value[1] === variable1 ? value1: value[1] === variable2? value2: value[1]) || "Invalid Input";
      } else if (input.includes('-')) {
        let value = input.split('-');
        output.value = Number(value[0] === variable1 ? value1: value[0] === variable2? value2: value[0]) - Number(value[1] === variable1 ? value1: value[1] === variable2? value2: value[1]) || "Invalid Input";
      } else if (input.includes('/')) {
        let value = input.split('/');
        output.value = Number(value[0] === variable1 ? value1: value[0] === variable2? value2: value[0]) / Number(value[1] === variable1 ? value1: value[1] === variable2? value2: value[1]) || "Invalid Input";
      }
    }
  }

  function clearScreen() {
    let screen = document.getElementById('screen');
    let output = document.getElementById('output');
    screen.value = '';
    output.value = '';
  }

  function sin() {
    // screen.value = Math.sin(screen.value);
    let screen = document.getElementById('screen')
    screen.value = "sin("
  }

  function cos() {
    // screen.value = Math.cos(screen.value);
    let screen = document.getElementById('screen')
    screen.value = "cos("
  }

  function tan() {
    // screen.value = Math.tan(screen.value);
    let screen = document.getElementById('screen')
    screen.value = "tan("
  }

  function pow() {
    // screen.value = Math.pow(screen.value, 2);
    let screen = document.getElementById('screen')
    if (!screen.value.includes("^")) {
      screen.value = screen.value + "^"
    }
  }

  function sqrt() {
    // screen.value = Math.sqrt(screen.value, 2);
    let screen = document.getElementById('screen')
    screen.value = "sqrt("
  }

  function log() {
    screen.value = Math.log(screen.value);
  }

  function pi() {
    // screen.value = 3.14159265359;
    let screen = document.getElementById('screen')
    screen.value = "pi("
  }

  function e() {
    let screen = document.getElementById('screen')
    screen.value = "e("
  }

  function fact() {
    var i, num, f;
    f = 1
    num = screen.value;
    for (i = 1; i <= num; i++) {
      f = f * i;
    }

    i = i - 1;

    screen.value = f;
  }

  function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
  }