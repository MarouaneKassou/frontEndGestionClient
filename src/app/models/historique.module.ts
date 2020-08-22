import { Compte } from "./compte.module";

export class Historique {
    id: number;
    date: Date;
    action: string;
    idCompteNavigation: Compte;
    constructor(){ }
}