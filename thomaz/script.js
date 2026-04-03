var formpf = document.getElementById('formpf');
var namepf = document.getElementById('namepf');
var name1 = document.getElementById('name');
var disciplina = document.getElementById('disciplina');
var nota = document.getElementById('nota');
var submit = document.getElementById('submit');
var aluno = document.getElementById('aluno');
var close = document.getElementById('close')
var confirmar = document.getElementById('confirmar');
var pasta = document.getElementById('pasta');
var pastaverse = document.getElementById('pastaverse');
var aproved = document.getElementById('aproved');
var reproved = document.getElementById('reproved');
var xpasta = document.getElementById('xpasta');
var x1 = document.getElementById('x1');
var x2 = document.getElementById('x2');
var x3 = document.getElementById('x3');
var x4 = document.getElementById('x4');
var x5 = document.getElementById('x5');
var formal = document.getElementById('formal');
var hal = document.getElementById('hal');
var nameal = document.getElementById('nameal');
var disciplinaal = document.getElementById('disciplinaal');
var submital = document.getElementById('submital');
var audio = new Audio('stamp.mp3');
var alunos = [];
var notas = [];
var disciplinas = [];
var professores = [];
var verificador = 1;

var verifica = (item) => {
    alunos.includes(item) ? verificador = 0 : verificador = 1;
}

formpf.addEventListener('submit', function(event) {
    event.preventDefault();
    verifica(name1.value);
    if(verificador === 1){
        if(namepf.value != '' & name1.value != '' & disciplina.value != '' & nota.value != '') {
            x1.innerHTML = namepf.value;
            x2.innerHTML = name1.value;
            xpasta.innerHTML = name1.value;
            x3.innerHTML = disciplina.value;
            x4.innerHTML = nota.value;
            if(nota.value >= 7){
                x5.innerHTML = 'Aprovado';
                x5.style.color = 'green';
            }
            else {
                x5.innerHTML = 'Reprovado';
                x5.style.color = 'red';
            }
            formpf.style.display = 'none';
            aluno.style.display = 'flex';
            aluno.style.opacity = 1;
        }
        else {
            if(namepf.value === '') {
                namepf.placeholder = 'Campo obrigatório!';
                namepf.style.border = '3px red solid';
                namepf.style.animation = 'treme normal 0.1s';
                setTimeout(() => {
                    namepf.style.animation = '';
                }, 100);
            }
            else {
                namepf.placeholder = '';
                namepf.style.border = '';
            }
            if(name1.value === '') {
                name1.placeholder = 'Campo obrigatório!';
                name1.style.border = '3px red solid';
                name1.style.animation = 'treme normal 0.1s';
                setTimeout(() => {
                    name1.style.animation = '';
                }, 100);
            }
            else {
                name1.placeholder = '';
                name1.style.border = '';
            }
            if(disciplina.value === '') {
                disciplina.placeholder = 'Campo obrigatório!';
                disciplina.style.border = '3px red solid';
                disciplina.style.animation = 'treme normal 0.1s';
                setTimeout(() => {
                    disciplina.style.animation = '';
                }, 100);
            }
            else {
                disciplina.placeholder = '';
                disciplina.style.border = '';
            }
            if(nota.value === '') {
                nota.placeholder = 'Campo obrigatório!';
                nota.style.border = '3px red solid';
                nota.style.animation = 'treme normal 0.1s';
                setTimeout(() => {
                    nota.style.animation = '';
                }, 100);
            }
            else {
                nota.placeholder = '';
                nota.style.border = '';
            }
        }
    }
    else{
        //for(let i = 0; i <= alunos.length; i++){
        //    if(alunos[i] == 'Kerlon')
        //        alert(notas[i])
        //}
        name1.value = '';
        name1.placeholder = 'Aluno já avaliado!';
        name1.style.border = '3px red solid';
        name1.style.animation = 'treme normal 0.1s';
        setTimeout(() => {
            name1.style.animation = '';
        }, 100);
    }
});

function closer() {
    aluno.style.opacity = 0;
    aluno.style.display = 'none';
    formpf.style.display = 'flex';
}

confirmar.addEventListener('click', function() {
    alunos.push(name1.value);
    notas.push(nota.value);
    professores.push(namepf.value);
    disciplinas.push(disciplina.value);
    aluno.style.transition = '2s';
    aluno.style.borderRadius = '5px';
    aluno.style.backgroundColor = 'rgb(221, 188, 147)';
    formpf.style.marginTop = '763px';
    setTimeout(() => {
        pasta.style.marginTop = '200px';
        pastaverse.style.marginTop = '150px';
        setTimeout(() => {
            if(nota.value >= 7){
                setTimeout(() => {
                    aproved.style.display = 'block';
                }, 500);
                audio.play();
            }
            else {
                setTimeout(() => {
                    reproved.style.display = 'block';
                }, 500);
                audio.play();
            }
            setTimeout(() => {
                aluno.style.transition = '1.5s';
                pastaverse.style.transition = '1.5s';
                pasta.style.transition = '1.5s';
                pasta.style.marginLeft = '-870px';
                pastaverse.style.marginLeft = '-870px';
                aluno.style.marginLeft = '-860px';
                setTimeout(() => {
                    namepf.placeholder = '';
                    namepf.style.border = '';
                    name1.placeholder = '';
                    name1.style.border = '';
                    disciplina.placeholder = '';
                    disciplina.style.border = '';
                    nota.placeholder = '';
                    nota.style.border = '';
                    aluno.style.display = 'none';
                    pasta.style.display = 'none';
                    pastaverse.style.display = 'none';
                    aluno.style.marginLeft = '350px';
                    pasta.style.marginLeft = '340px';
                    pastaverse.style.marginLeft = '340px';
                    pasta.style.marginTop = '749px';
                    pastaverse.style.marginTop = '749px';
                    pastaverse.style.transition = '';
                    pasta.style.transition = '';
                    formpf.style.display = 'flex';
                    formpf.style.transition = '2s';
                    reproved.style.display = 'none';
                    aproved.style.display = 'none';
                    name1.value = '';
                    namepf.value = '';
                    disciplina.value = '';
                    nota.value = '';
                    aluno.style.transition = '0';
                    aluno.style.borderRadius = '40px';
                    aluno.style.backgroundColor = 'rgba(170, 129, 80, 0.762)';
                    setTimeout(() => {
                        formpf.style.marginTop = '160px';
                        pastaverse.style.transition = '2.9s';
                        pasta.style.transition = '3s';
                        pasta.style.display = 'flex';
                        pastaverse.style.display = 'flex';
                        setTimeout(() => {
                            formpf.style.transition = '';
                        }, 2000);
                    }, 500);
                }, 1500);
            }, 1000);
        }, 3500);
    }, 2000); 
});

formal.addEventListener('submit', function(event) {
    event.preventDefault();
    verifica(nameal.value);
    if(verificador === 0){
        if(nameal.value != '' & disciplinaal.value != '') {
            //funcao acima
        }
        else {
            if(nameal.value === '') {
                nameal.placeholder = 'Campo obrigatório!';
                nameal.style.border = '3px red solid';
                nameal.style.animation = 'treme normal 0.1s';
                setTimeout(() => {
                    nameal.style.animation = '';
                }, 100);
            }
            else {
                nameal.placeholder = '';
                nameal.style.border = '';
            }
            if(disciplinaal.value === '') {
                disciplinaal.placeholder = 'Campo obrigatório!';
                disciplinaal.style.border = '3px red solid';
                disciplinaal.style.animation = 'treme normal 0.1s';
                setTimeout(() => {
                    disciplinaal.style.animation = '';
                }, 100);
            }
            else {
                disciplinaal.placeholder = '';
                disciplinaal.style.border = '';
            }
        }
    }
    else{
        if(nameal.value === '') {
            nameal.placeholder = 'Campo obrigatório!';
            nameal.style.border = '3px red solid';
            nameal.style.animation = 'treme normal 0.1s';
            setTimeout(() => {
                nameal.style.animation = '';
            }, 100);
        }
        else if(nameal.value != '') {
            nameal.value = '';
            nameal.placeholder = 'Aluno ainda não avaliado!';
            nameal.style.border = '3px red solid';
            nameal.style.animation = 'treme normal 0.1s';
            setTimeout(() => {
                nameal.style.animation = '';
            }, 100);
        }
        else {
            nameal.placeholder = '';
            nameal.style.border = '';
        }
        if(disciplinaal.value === '') {
            disciplinaal.placeholder = 'Campo obrigatório!';
            disciplinaal.style.border = '3px red solid';
            disciplinaal.style.animation = 'treme normal 0.1s';
            setTimeout(() => {
                disciplinaal.style.animation = '';
            }, 100);
        }
        else {
            disciplinaal.placeholder = '';
            disciplinaal.style.border = '';
        }
    }
});