import { Fabricante } from './fabricante';

export class Produto {
    id: number;
    nome: string;
    fabricanteDeProduto: Fabricante;
    peso: number;
    valor?: number;
    dataCadastro: Date;
}