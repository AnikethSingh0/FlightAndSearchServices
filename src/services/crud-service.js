class crudService {
    constructor(repository) {
        this.repository = repository;
    }

    async get(id) {
        try {
            const response = await this.repository.get(id);
            return response;
        } catch (error) {
            throw error;
        }
    }

    async destroy(id) {
        try {
            const response = await this.repository.destroy(id);
            return response;
        } catch (error) {
            throw error;
        }
    }

    async update(id, data) {
        try {
            const response = await this.repository.update(id, data);
            return response;
        } catch (error) {
            throw error;
        }
    }

    async create(data) {
        try {
            const response = await this.repository.create(data);
            return response;
        } catch (error) {
            throw error;
        }
    }

    async getAll() {
        try {
            const response = await this.repository.getAll();
            return response;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = crudService;
