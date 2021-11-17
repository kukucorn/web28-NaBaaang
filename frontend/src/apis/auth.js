import fetchAction from '@/constants/fetchAction';

async function getFetchData(url, option) {
    const res = await fetch(url, option);
    const json = await res.json();
    return json;
}

async function fetchSiginInGoogle(code) {
    const { url, option } = fetchAction({
        type: 'FETCH_SIGN_IN_GOOGLE',
        payload: { code },
    });
    const result = await getFetchData(url, option);
    return result;
}

export { fetchSiginInGoogle };
