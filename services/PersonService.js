class PersonService {

    _createReqest = (data) => {
        return fetch( "http://localhost:2000/newPerson", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        }).then(
            (response) => {
                if (response.status >= 300 || response.status < 200) {
                    const error = new Error();
                    error.response = response;
                    throw error
                }
                return response.json()
            })
    }

    _createGetReqest = () => {
        return fetch("http://localhost:2000/getAll")
        .then(
            (response) => {
                if (response.status >= 300 || response.status < 200) {
                    const error = new Error();
                    error.response = response;
                    throw error
                }
                return response.json()
            })
    }
   
    newPerson=(data)=>{
       return this._createReqest(data)
    }
    getAll=()=>{
        return this._createGetReqest()
     }

}
export default new PersonService()