let nums = [];

    function display(value){
        document.getElementById("result").value += value;
    }

    function clearScreen(){
        document.getElementById("result").value = "";
    }

    function addition(){
        let x = document.getElementById("result").value;
        if (x != ""){
            nums.push(x);
            nums.push('+');
            document.getElementById("result").value = "";
            console.log(nums)
        }
    }

    function subtraction(){
        let x = document.getElementById("result").value;
        if (x != ""){
        nums.push(x);
        nums.push('-');
        document.getElementById("result").value = "";
        console.log(nums)
        }
    }

    function multiply(){
        let x = document.getElementById("result").value;
        if (x != ""){
        nums.push(x);
        nums.push('*');
        document.getElementById("result").value = "";
        console.log(nums)
        }
    }

    function division(){
        let x = document.getElementById("result").value;
        if (x != ""){
        nums.push(x);
        nums.push('/');
        document.getElementById("result").value = "";
        console.log(nums)
        }
    }

    function calculate(){
        let x = document.getElementById("result").value;
        nums.push(x);
        document.getElementById("result").value = "";
        let result = 0;
        for (let i = 0; i < nums.length; i++){
            if (nums[i] == '+'){
                result = parseFloat(nums[i-1]) + parseFloat(nums[i+1]);
                nums[i+1] = result;
            }
            else if (nums[i] == '-'){
                result = parseFloat(nums[i-1]) - parseFloat(nums[i+1]);
                nums[i+1] = result;
            }
            else if (nums[i] == '*'){
                result = parseFloat(nums[i-1]) * parseFloat(nums[i+1]);
                nums[i+1] = result;
            }
            else if (nums[i] == '/'){
                result = parseFloat(nums[i-1]) / parseFloat(nums[i+1]);
                nums[i+1] = result;
            }
        }
        document.getElementById("result").value = result;
        nums = [];
    }

