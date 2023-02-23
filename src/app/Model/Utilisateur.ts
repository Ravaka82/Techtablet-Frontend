import { Role } from "./Role";
export class Utilisateur{
    id!: string;
    nom!: string;
    prenom!: string;
    email!: string;
    mot_de_passe!: string;
    totalpayer!: string;
    lieu_livraison!: string;
    roles!: Role;
    _id:any;
}