/*let contaController = new ContaController();

contaController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);*/
const Ian = new Pessoa("Ian", 23, new Date(2000, 2, 1));
const Amanda = new PessoaFisica("Amanda", 27, new Date(1996, 6, 26), "12365478901");
const George = new PessoaJuridica("George", 2022, new Date(1, 11, 15), "98745632102");
console.log(Ian);
console.log(Amanda);
console.log(George);
