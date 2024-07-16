import { ContaPoupanca } from '../interfaces/ContaPoupanca';
import { ContaBase } from './ContaBase';

export class ContaPoupancaImpl extends ContaBase implements ContaPoupanca {
    exibirDetalhes(): void {
        console.log(`Conta Poupança Número: ${this.numero}, Saldo: R$${this.saldo.toFixed(2)}, Cliente: ${this.cliente.nome}`);
    }
}
