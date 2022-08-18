function test(){
    var num = document.querySelector('input').value
    var sum = 0
    if(num != ''){
        if(!isNaN(num)){
            for(var i = 1; i<num; i++){
                if(i%3===0 || i%5===0){
                    sum += i
                }
            }
            document.querySelector('#resultado').innerHTML = sum
        }
        else {
            document.querySelector('#resultado').innerHTML = 'error ;('
        }
    }
    else {
        document.querySelector('#resultado').innerHTML = 'vazio ;('
    }
}