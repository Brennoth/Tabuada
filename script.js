function gerar(){
    var numero = Number(document.getElementById('numero').value)
    var tabuada = document.getElementById('tabuada')

    if(numero == ''){
        alert("ERRO, digite um numero")
    }else{
        tabuada.innerHTML = ''

        var c = 1
        while(c <=10){
            let item = document.createElement('option')
            item.text = `${numero} X ${c} = ${numero*c}`
            tabuada.appendChild(item)
            c++
        }
    }
}