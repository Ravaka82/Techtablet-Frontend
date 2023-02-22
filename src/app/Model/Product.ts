export class Product{
    id!: string;
    id_product!: number;
    name!: string;
    color!: {
        name: string;
    };
    pricettc!: Float32Array;
    with_packaging!: 0;
    stock!: {
        available:number;
    };
    pictures!: string;
}