class PessoaFisica extends Pessoa {
    private readonly _cpf: string;
  
    constructor(nome: string, idade: number, dataNascimento: Date, cpf: string) {
      super(nome, idade, dataNascimento);
      this._cpf = cpf;
      super.nome += " - Fisica";
    }
  
    get cpf() {
      return this._cpf;
    }
  }