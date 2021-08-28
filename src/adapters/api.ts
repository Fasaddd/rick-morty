import ApiClient from "./apiclient";
import Storage from "./storage";
import HttpStatus from "http-status-codes";

const Api: ApiClient = new ApiClient({
        baseUrl: process.env.BACKEND_URL,
        onError: (error: any): Promise<any> => {
            // global error handler for all requests
            if (error.response?.status === HttpStatus.INTERNAL_SERVER_ERROR) {
                alert('Message about internal server error');
            }

            if (error.message === 'Network Error') {
                alert('Message about bad Internet connection');
                return Promise.resolve(true);
            }
            return Promise.reject(error);
        },
        onSuccess: (response: any): Promise<any> => {
            return Promise.resolve(response);
        }
    },
    Storage
);

export default Api;
