import { Utilisateur } from "./utilisateur.module";
import { Groupe } from "./groupe.module";
import { Rendez_Vous } from "./rendez_vous.module";
import { UserService } from '../services/user.service';

export class Client {
    id: number;
    cin: string;
    nom: string;
    prenom: string;
    email: string;
    adresse: string;
    telephone: string;
    idUser : number;
    idGroupe : number;
    idDoc : number;
    idRdv : number;
    idUserNavigation: Utilisateur;
    idGroupeNavigation: Groupe;
    idDocNavigation: Document;
    idRdvNavigation : Rendez_Vous;

    constructor(){ }
}