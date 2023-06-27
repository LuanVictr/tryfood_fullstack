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
}

export default AbstractODM;