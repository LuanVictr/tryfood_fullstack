import { Model, Schema, models, model } from "mongoose";

class AbstractODM<T> {
    private schema: Schema
    protected model: Model<T>
    protected dbName: String

    constructor(schema: Schema, dbName: string) {
        this.schema = schema;
        this.dbName = dbName;
        this.model = models[dbName] || model(dbName, this.schema);
    }

    public async findAll():Promise<T[]> {
        const allItens = await this.model.find()
        return allItens;
    }

    public async findByValue(category:string):Promise<T[]> {
        const filteredItens = await this.model.find({"strCategory": category})
        return filteredItens;
    }

    public async findById(id:number) {
        const item = await this.model.find({idMeal: id});
        return item
    }
}

export default AbstractODM;