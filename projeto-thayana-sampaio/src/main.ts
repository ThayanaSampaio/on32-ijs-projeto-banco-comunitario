import { Banco } from './classes/Banco';
import { ClienteBanco } from './classes/ClienteBanco';

const banco = new Banco();

// Criando clientes
const cliente = new ClienteBanco('Lucas JOJO', 1, 'Rua A, 123', '1111-1111', 1000);


// Adicionando clientes ao banco
banco.adicionarCliente(cliente);


// Criando contas
const contaCorrente = banco.criarContaCorrente(cliente);
const contaPoupanca = banco.criarContaPoupanca(cliente);



// Exibindo detalhes das contas
contaCorrente.exibirDetalhes();
contaPoupanca.exibirDetalhes();


// Operações bancárias
contaCorrente.depositar(200);
contaPoupanca.depositar(300);


banco.transferir(100, contaCorrente, contaPoupanca);



// Exibindo detalhes das contas após operações
contaCorrente.exibirDetalhes();
contaPoupanca.exibirDetalhes();

