import { Cliente } from '../interfaces/Cliente';

export class ClienteBanco implements Cliente {
    constructor(
        public nome: string,
        public id: number,
        public endereco: string,
        public telefone: string,
        public rendaSalarial: number
    ) {}
}