export const convertObjectToArray = (objectData, includeKeys = false) => {
    return Object.keys(objectData).map(key => {
        return includeKeys ? {key, ...objectData[key]} : objectData[key];
    });
};