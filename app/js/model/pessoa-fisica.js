class PessoaFisica extends Pessoa {
    constructor(nome, idade, dataNascimento, cpf) {
        super(nome, idade, dataNascimento);
        this._cpf = cpf;
        super.nome += " - Fisica";
    }
    get cpf() {
        return this._cpf;
    }
}
