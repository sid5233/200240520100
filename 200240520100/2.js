function check() {

    let inp1 = document.querySelector("#exampleInputEmail1").value;
    let inp2 = document.querySelector("#exampleInputPassword1").value;

    if (inp1 == "") {
        alert("Enter name : ")
    } else if (inp2 == "") {
        alert("Enter password")
    }

    document.querySelector("#exampleInputEmail1").value = "";

    document.querySelector("#exampleInputPassword1").value = "";

    let display = document.querySelector("#redid").cloneNode(true);

    display.removeAttribute("#id");
    display.children[0].innerHTML = inp1;
    display.children[0].innerHTML = inp2;
}