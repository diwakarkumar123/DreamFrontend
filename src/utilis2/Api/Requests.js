import Link from "./instance";
import { get_data } from '../AsyncStorage/Controller'
import axios from "axios";
import apiCallBackStatus from "./apiCallBackStatus";

const post_request = async ({ target, body, }) => {
    try {
        let token = await get_data("@TOKEN")
        const instance = axios.create(
            {
                baseURL: Link,
                headers: {
                    Authorization: "Bearer  " + token,
                }
            });
        const response = await instance.post(target, body).catch((error) => {
            apiCallBackStatus({ error })
        })
        return response

    } catch (error) {
        console.log("post error", error);
        return "Error"
    }

}

const get_request = async ({ target, link }) => {
    try {
        let token = await get_data("@TOKEN")
        const instance = axios.create(
            {
                baseURL: Link,
                headers: {
                    Authorization: "Bearer  " + token
                }
            });
        const response = await instance.get(target, link).catch((error) => {
            apiCallBackStatus({ error })
        })
        var res = response
        return res

    } catch (error) {
        console.log("get error", error);
        return "Error"
    }
}
const put_request = async ({ target, link }) => {
    try {
        let token = await get_data("@TOKEN")
        const instance = axios.create(
            {
                baseURL: Link,
                headers: {
                    Authorization: "Bearer  " + token
                }
            });
        const response = await instance.get(target, link).catch((error) => {
            apiCallBackStatus({ error })
        })
        var res = response
        return res

    } catch (error) {
        console.log("get error", error);
        return "Error"
    }
}

export { post_request, get_request, put_request }
