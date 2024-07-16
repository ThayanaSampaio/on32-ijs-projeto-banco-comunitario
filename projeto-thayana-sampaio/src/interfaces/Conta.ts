import { Cliente } from './Cliente';

export interface Conta {
    numero: number;
    saldo: number;
    cliente: Cliente;
    depositar(valor: number): void;
    sacar(valor: number): void;
    exibirDetalhes(): void;
}
