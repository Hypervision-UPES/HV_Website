function findYourFamily() {
    var n, n1, sum = 10;
    n = parseInt(document.getElementById("rollnumber").value); //parseInt(document.getElementById("txt1").value)
    while (sum >= 10) {
        sum = 0;
        while (n != 0) {
            n1 = n % 10;
            sum = sum + n1;
            n = Math.floor(n / 10);
        }
        n = (sum);
    }
    switch (n) {
        case 1:
            alert("Your Family Number is 1. \n You can visit your Family's database at: \n hypervision.in/1");
            break;
        case 2:
            alert("Your Family Number is 2. \n You can visit your Family's database at: \n hypervision.in/2");
            break;
        case 3:
            alert("Your Family Number is 3. \n You can visit your Family's database at: \n hypervision.in/3");
            break;
        case 4:
            alert("Your Family Number is 4. \n You can visit your Family's database at: \n hypervision.in/4");
            break;
        case 5:
            alert("Your Family Number is 5. \n You can visit your Family's database at: \n hypervision.in/5");
            break;
        case 6:
            alert("Your Family Number is 6. \n You can visit your Family's database at: \n hypervision.in/6");
            break;
        case 7:
            alert("Your Family Number is 7. \n You can visit your Family's database at: \n hypervision.in/7");
            break;
        case 8:
            alert("Your Family Number is 8. \n You can visit your Family's database at: \n hypervision.in/8");
            break;
        case 9:
            alert("Your Family Number is 9. \n You can visit your Family's database at: \n hypervision.in/9");
            break;

    }

}