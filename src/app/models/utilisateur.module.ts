import { Role } from "./role.module";
import { Client } from "./client.module";

export class Utilisateur {
    id: number;
    cin: string;
    nom: string;
    prenom: string;
    email: string;
    adresse: string;
    telephone: string;
    idRole: number;
    idRoleNavigation: Role;
    client: Client[];
    constructor(){ }
}