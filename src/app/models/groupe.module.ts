import { Utilisateur } from "./utilisateur.module";
import { Client } from "./client.module";

export class Groupe {
    id: number;
    nom: string;
    idUserNavigation: Utilisateur;
    idUser: number;
    client: Client[];
    constructor(){ }
}