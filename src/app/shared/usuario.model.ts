export class Usuario {
    public constructor(
        public nome: string,
        public email: string,
        public senha: string,
        public confirmacaoSenha: string,
        public id?: number
    ){}
}