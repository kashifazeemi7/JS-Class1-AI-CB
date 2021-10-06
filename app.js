function sumValues() {

    let a = document.getElementById("num1").value; //picks the string from input box
    let b = document.getElementById("num2").value;
    let result = Number(a) + Number(b);

    console.log("result: ", result );

    document.getElementById("result").innerText = result;

}