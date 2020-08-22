import { Utilisateur } from "./utilisateur.module";

export class Role {
    id: number;
    nom: string;
    utilisateur: Utilisateur[];
    constructor(){ }
}