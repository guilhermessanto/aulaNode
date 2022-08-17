import chalk from 'chalk';
let aluno = "Guilherme";
let idade = 33;

if(idade >=18){
    console.log(`${aluno} ${chalk.bgGreen("é maior de idade!")}`);
}else{
    
    console.log(`${aluno} ${chalk.red("é menor de idade!")}`)
}

/* 
Para installar o chalk utilizamos o comando npm install chalk. 
Chalk é um dos muitos pacotes disponiveis no repositório npmjs.com
*/

