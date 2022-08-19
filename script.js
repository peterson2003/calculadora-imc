function runImc(){
    var inputAltura = parseFloat(document.querySelector('.alturaI').value);
    var inputPeso = parseFloat(document.querySelector('.pesoI').value);
    var saida = document.querySelector('.result');
    
    imcRes = parseFloat((inputPeso) / (inputAltura * inputAltura));

    if(imcRes < 18.5){
        saida.style.display = 'block';
        saida.innerHTML = `<p>Seu IMC é ${imcRes.toFixed(1)}!</p>`+'</br>'+`Classificação: Abaixo do peso normal`;
    }else if(imcRes < 24.9){
        saida.style.display = 'block';
        saida.innerHTML = `<p>Seu IMC é ${imcRes.toFixed(1)}!</p>`+'</br>'+`Classificação: Peso normal`;
    }else if(imcRes < 29.9){
        saida.style.display = 'block';
        saida.innerHTML = `<p>Seu IMC é ${imcRes.toFixed(1)}!</p>`+'</br>'+`Classificação: Excesso de peso`;
    }else if(imcRes < 34.9){
        saida.style.display = 'block';
        saida.innerHTML = `<p>Seu IMC é ${imcRes.toFixed(1)}!</p>`+'</br>'+`Classificação: Obesidade classe I`;
    }else if(imcRes < 39.9){
        saida.style.display = 'block';
        saida.innerHTML = `<p>Seu IMC é ${imcRes.toFixed(1)}!</p>`+'</br>'+`Classificação: Obesidade classe II`;
    }else if(imcRes >= 40.0){
        saida.style.display = 'block';
        saida.innerHTML = `<p>Seu IMC é ${imcRes.toFixed(1)}!</p>`+'</br>'+`Classificação: Obesidade classe III`;
    }
}