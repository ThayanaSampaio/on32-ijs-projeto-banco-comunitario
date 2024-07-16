import { Conta } from './Conta';

export interface ContaCorrente extends Conta {
    limiteChequeEspecial: number;
}
