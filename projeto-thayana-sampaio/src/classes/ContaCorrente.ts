import { ContaCorrente } from '../interfaces/ContaCorrente';
import { ContaBase } from './ContaBase';

export class ContaCorrenteImpl extends ContaBase implements ContaCorrente {
    public limiteChequeEspecial: number = 100;

    sacar(valor: number): void {
        if (valor <= this.saldo + this.limiteChequeEspecial) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor.toFixed(2)} realizado na conta corrente ${this.numero}. Saldo atual: R$${this.saldo.toFixed(2)} (Limite Cheque Especial: R$${this.limiteChequeEspecial.toFixed(2)})`);
        } else {
            throw new Error('Saldo insuficiente.');
        }
    }

    exibirDetalhes(): void {
        console.log(`Conta Corrente Número: ${this.numero}, Saldo: R$${this.saldo.toFixed(2)}, Cliente: ${this.cliente.nome}, Limite Cheque Especial: R$${this.limiteChequeEspecial.toFixed(2)}`);
    }
}
