const alunos = [
  { nome: "Philipe", nota: 8.6 },
  { nome: "Alvaro", nota: 4.5 },
  { nome: "Renan", nota: 7.0 },
  { nome: "Maria", nota: 6.0 },
  { nome: "Ana Clara", nota: 4.0 },
  { nome: "Michelle", nota: 9.0 },
];

const filtrarAlunos = (item) => item.nota >= 6;

const alunosAprovados = alunos.filter(filtrarAlunos);

console.log(alunosAprovados);
