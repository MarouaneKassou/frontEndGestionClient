import { Utilisateur } from "./utilisateur.module";

export class Compte {
    id: number;
    login: string;
    password: string;
    idUserNavigation: Utilisateur;
    constructor(){ }
}