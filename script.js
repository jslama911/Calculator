let x = 0;
let y = 0;
    
    
    function addition(){
        if (x == 0){
        x = document.getElementById("result").value
        document.getElementById("result").value = "";
        op = '+';
        }
        else{
            y = document.getElementById("result").value
            if (op == '+'){
                var z = parseFloat(x) + parseFloat(y);
            }
            else if (op == '-'){
                var z = parseFloat(x) - parseFloat(y);
            }
            else if (op == '*'){
                var z = parseFloat(x) * parseFloat(y);
            }
            else if (op == '/'){
                var z = parseFloat(x) / parseFloat(y);
            }
            x = z
            document.getElementById("result").value = "";
            op = '+';
        }
    }

    function subtraction(){
        if (x == 0){
            x = document.getElementById("result").value
            document.getElementById("result").value = "";
            op = '-';
        }
        else{
            y = document.getElementById("result").value
            if (op == '+'){
                var z = parseFloat(x) + parseFloat(y);
            }
            else if (op == '-'){
                var z = parseFloat(x) - parseFloat(y);
            }
            else if (op == '*'){
                var z = parseFloat(x) * parseFloat(y);
            }
            else if (op == '/'){
                var z = parseFloat(x) / parseFloat(y);
            }
            x = z
            document.getElementById("result").value = "";
            op = '-';
        }
    }

    function multiply(){
        if (x == 0){
            x = document.getElementById("result").value
            document.getElementById("result").value = "";
            op = '*';
        }
        else{
            y = document.getElementById("result").value
            if (op == '+'){
                var z = parseFloat(x) + parseFloat(y);
            }
            else if (op == '-'){
                var z = parseFloat(x) - parseFloat(y);
            }
            else if (op == '*'){
                var z = parseFloat(x) * parseFloat(y);
            }
            else if (op == '/'){
                var z = parseFloat(x) / parseFloat(y);
            }
            x = z
            document.getElementById("result").value = "";
            op = '*';
        }
    }

    function division(){
        if (x == 0){
            x = document.getElementById("result").value
            document.getElementById("result").value = "";
            op = '/';
        }
        else{
            y = document.getElementById("result").value
            if (op == '+'){
                var z = parseFloat(x) + parseFloat(y);
            }
            else if (op == '-'){
                var z = parseFloat(x) - parseFloat(y);
            }
            else if (op == '*'){
                var z = parseFloat(x) * parseFloat(y);
            }
            else if (op == '/'){
                var z = parseFloat(x) / parseFloat(y);
            }
            x = z
            document.getElementById("result").value = "";
            op = '/';
        }
    }



    function calculate(){
        y = document.getElementById("result").value
        if (op == '+'){
            var z = parseFloat(x) + parseFloat(y);
        }
        else if (op == '-'){
            var z = parseFloat(x) - parseFloat(y);
        }
        else if (op == '*'){
            var z = parseFloat(x) * parseFloat(y);
        }
        else if (op == '/'){
            var z = parseFloat(x) / parseFloat(y);
        }
        document.getElementById("result").value = z;
        x = 0;
        y = 0;
    }
    

    function display(value){
        document.getElementById("result").value += value;
    }
    
    function clearScreen(){
        document.getElementById("result").value = "";
    }