import { Cliente } from '../interfaces/Cliente';
import { Conta } from '../interfaces/Conta';
import { ContaCorrenteImpl } from './ContaCorrente';
import { ContaPoupancaImpl } from './ContaPoupanca';

export class Banco {
    private contas: Conta[] = [];
    private clientes: Cliente[] = [];

    adicionarCliente(cliente: Cliente): void {
        this.clientes.push(cliente);
        console.log(`Cliente ${cliente.nome} adicionado ao banco.`);
    }

    criarContaCorrente(cliente: Cliente): ContaCorrenteImpl {
        if (cliente.rendaSalarial < 500) {
            throw new Error('Renda salarial insuficiente para abrir uma conta corrente.');
        }

        const contaCorrente = new ContaCorrenteImpl(this.contas.length + 1, 0, cliente);
        this.contas.push(contaCorrente);
        console.log(`Conta corrente criada para o cliente ${cliente.nome}. Número da conta: ${contaCorrente.numero}`);
        return contaCorrente;
    }

    criarContaPoupanca(cliente: Cliente): ContaPoupancaImpl {
        const contaPoupanca = new ContaPoupancaImpl(this.contas.length + 1, 0, cliente);
        this.contas.push(contaPoupanca);
        console.log(`Conta poupança criada para o cliente ${cliente.nome}. Número da conta: ${contaPoupanca.numero}`);
        return contaPoupanca;
    }

    transferir(valor: number, contaOrigem: Conta, contaDestino: Conta): void {
        contaOrigem.sacar(valor);
        contaDestino.depositar(valor);
        console.log(`Transferência de R$${valor.toFixed(2)} realizada da conta ${contaOrigem.numero} para a conta ${contaDestino.numero}`);
    }
}
