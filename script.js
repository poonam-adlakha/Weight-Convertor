function convert1() {
    var data1 = document.getElementById("weightBox1").value;
    var convertedData1 = Math.round(data1 * 2.2);
    document.getElementsByName('display')[0].value= convertedData1;
}

function convert2() {
    var data2 = document.getElementById("weightBox2").value;
    var convertedData2 = Math.round(data2 / 2.2);
    document.getElementsByName('display')[1].value= convertedData2;
}