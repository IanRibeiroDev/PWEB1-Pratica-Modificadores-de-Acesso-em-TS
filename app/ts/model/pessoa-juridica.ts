class PessoaJuridica extends Pessoa {
    private readonly _cnpj: string;
  
    constructor(nome: string, idade: number, dataNascimento: Date, cnpj: string) {
      super(nome, idade, dataNascimento);
      this._cnpj = cnpj;
      super.nome += " - Juridica";
    }
  
    get cnpj() {
      return this._cnpj;
    }
  }