import { Conta } from '../interfaces/Conta';
import { Cliente } from '../interfaces/Cliente';

export abstract class ContaBase implements Conta {
    constructor(
        public numero: number,
        public saldo: number,
        public cliente: Cliente
    ) {}

    depositar(valor: number): void {
        this.saldo += valor;
        console.log(`Depósito de R$${valor.toFixed(2)} realizado na conta ${this.numero}. Saldo atual: R$${this.saldo.toFixed(2)}`);
    }

    sacar(valor: number): void {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor.toFixed(2)} realizado na conta ${this.numero}. Saldo atual: R$${this.saldo.toFixed(2)}`);
        } else {
            throw new Error('Saldo insuficiente.');
        }
    }

    exibirDetalhes(): void {
        console.log(`Conta Número: ${this.numero}, Saldo: R$${this.saldo.toFixed(2)}, Cliente: ${this.cliente.nome}`);
    }
}
