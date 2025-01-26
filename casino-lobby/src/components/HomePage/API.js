import {convertObjectToArray} from "@/utils/Utils";

export const getMockQueryBackendData = () => {
    return fetch('/games.json')
        .then(res => {
            if (res.status === 200)
                return res.json()
            else
                throw Error(`Unable to fetch ${res.status}`)
        })
        .then(data => convertObjectToArray(data, true))
        .catch(() => {
            alert('Unable to load data.');
            return [];
        });
};