





export const setData = async (name:string, data:object) => {
    try {
        await localStorage.setItem(
            '@' + name,
            JSON.stringify(data)
        );
    } catch (e) {
        console.log(e)
    }
}

export const getData = async (name:string) => {
    try {
        let storage = await localStorage.getItem("@" + name);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        storage = JSON.parse(storage)
        return storage
    } catch (e) {
        console.log(e)
    }
}

export const removeData = async (name:string) => {
    try {
        await localStorage.removeItem("@" + name);
    } catch (e) {
        console.log(e)
    }
}
