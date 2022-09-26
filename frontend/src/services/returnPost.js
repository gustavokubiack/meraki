import axios from 'axios'
const url = '/api/ong/animalPost'

export default {
    async animalPost() {
        const res = await axios.get(url)
        return res.data
    }
}