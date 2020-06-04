export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, descroption: string, imagePath: string) {
        this.name = name;
        this.description = descroption;
        this.imagePath = imagePath;
    }
}