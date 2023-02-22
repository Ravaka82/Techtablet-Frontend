import { Utilisateur } from "./Utilisateur";
export class Commande{
    _id!: string;
    idProduct!: number;
    name!: string;
    color!: string;
    quantite!: Number;
    price!: Float32Array;
    status!: Boolean;
    image!: string;
    utilisateurId!: Utilisateur;
}
