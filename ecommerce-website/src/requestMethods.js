import axios from "axios";

const BASE_URL = "http://localhost:3000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmYzZDM4NmVkMjhkNzE3ZTM3OGYzMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MTE0MjA4NCwiZXhwIjoxNjgxMjI4NDg0fQ.9A65CdJjj3O5sEUivUPFZsrZ9HpcC_J7NlwpCFcxTKA";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
});