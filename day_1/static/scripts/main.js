function loadData(){

}
function sayHelloToPerson(personName){
    console.log(`Hey ${personName}`)
}
function sum(num1, num2){
    let result = num1+num2
    return (result)
}
function testValidation(){
    let num = 9

    if(num < 10){
        console.log('Error: num to low')
        return
    }
    console.log("Saved")
}
function printSomeNumber(){
    for(x=1;x<=20;x++){
        if(x!=7 && x!=13){
            console.log(x)
        }
    }
}
function sumSomeNumbers(arr){
    let total = 0
    let largest = arr[0]
    let smallest = arr[0]
    for(x=0;x<arr.length;x++){
        total+=arr[x]
        if(arr[x]>largest){
            largest = arr[x]
        }
        if(arr[x]<smallest){
            smallest = arr[x]
        }
    }
    console.log(total)
    console.log(largest)
    console.log(smallest)
}
function init(){

    $('#registerBtn').click(function(){
        console.log('register')
    })
    loadData()

    sayHelloToPerson('Trey')

    let res = sum(21, 21)
    console.log(res)

    printSomeNumber()
    let arr = [12,32,12,456,12,87,345,56,3,7,5678,2,4587,243,09,234,-3,4567,-9,0]
    sumSomeNumbers(arr)
}

window.onload = init
