class crudRepository{
    constructor(model) {
        this.model = model
    }
    async create(data){
        try {
            const response = await this.model.create(data)
            return response
        } catch (error) {
            console.log("something went wrong in crud repository")
            throw error;
        }
    }
    async destory(modelId){
        try {
            const response = await this.model.destroy({
                where:{
                    id:modelId
            }})
            return response
        } catch (error){
            console.log("something went wrong in crud repository")
            throw error;
        }
    }
    async get(modelId){
        try {
            const response = await this.model.findByPk(modelId)
            return response
        } catch (error) {
            console.log("something went wrong in crud repository")
            throw error;
        }
    }
    async getAll(){
        try {
            const result = await this.model.findAll();
            return result;
        } catch (error) {
            console.log("something went wrong in crud repository")
            throw error;
        }
    }
    async update(modelId,data){
        try {
            const response = await this.model.update(data,{
                where:{
                    id:modelId
                }
            }
            )
            return response
        } catch (error) {
            console.log("something went wrong in crud repository")
            throw error;
        }
    }
}
module.exports = crudRepository