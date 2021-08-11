export const CustomAxios = () => {
    const sendRequest = (endpoint, params) => {
        const controller = new AbortController();

        params.signal = controller.signal;
    }
}