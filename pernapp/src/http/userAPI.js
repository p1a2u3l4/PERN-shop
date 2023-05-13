import jwt_decode from "jwt-decode";
import { $authHost, $host } from ".";

export const registration = async (email, password) => {
    const {data} = await $host.post('api/user/registration', {email, password, role: 'ADMIN'});
    return jwt_decode(data.token);
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/user/auth', {email, password});
}
export const check = async () => {
    const response = await $host.post('api/auth/registration');
    return response;
}