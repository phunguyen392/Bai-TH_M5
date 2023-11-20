import axios from 'axios';

class ProductModel {
    constructor() {
      //khai bao api
      this.api_url = "https://654c32aa77200d6ba8589bbf.mockapi.io/products";
    }
    //lay het
    all() {
      return new Promise((resolve, reject) => {
        axios
          .get(this.api_url)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    }

    	// Lấy chi tiết
	find( id ){
		return new Promise( (resolve, reject) => {
			axios.get( this.api_url + '/' + id ).then( (res) => {
				resolve(res)
			}).catch( (res) => {
				reject(res);
			});
		})
	}

    
	// Xử lý cập nhật
	update( id, data ){
		return new Promise( (resolve, reject) => {
			axios.put( this.api_url + '/' + id , data ).then( (res) => {
				resolve(res)
			}).catch( (res) => {
				reject(res);
			});
		})
	}
	// Xử lý xóa
	destroy( id ){
		return new Promise( (resolve, reject) => {
			axios.delete( this.api_url + '/' + id ).then( (res) => {
				resolve(res)
			}).catch( (res) => {
				reject(res);
			});
		})
	}

	// Xử lý them
	store( data ){
		return new Promise( (resolve, reject) => {
			axios.post( this.api_url , data ).then( (res) => {
				resolve(res)
			}).catch( (res) => {
				reject(res);
			});
		})
	}

}
export default new ProductModel