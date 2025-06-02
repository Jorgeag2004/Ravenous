const API_KEY = 'KkzEK8cWLLpD-AGK43t-5_EvLwgd3KqHajGBjMS0w8LQ02FtZyF9UGBDx9UvToenM1eTb8DnpBJ6JycUHUdbLnCBiQPSKDG3j-yZ3SfEBg8XDhI3BfCz7rRf-wQ9aHYx';

const baseURL = "https://api.yelp.com/v3";

const createURLToFetch = (term, location, searchOpt) => {

    const endpoint = "/businesses/search";
    const params = new URLSearchParams();

    // adds search term to URLSearchParams
    params.append("term", term);

    // adds location to URLSearchParams
    params.append("location", location);

    // adds search preference to URLSearchParams
    params.append("sort_by", searchOpt);

    const urlToFetch = `${baseURL}${endpoint}?${params.toString()}`;

    return urlToFetch;
}

const getBusiness = async (term, location, searchOpt) => {

    const urlToFetch = createURLToFetch(term, location, searchOpt);

    try {

        const response = await fetch(urlToFetch, {
            headers: {
                Authorization: `Bearer ${API_KEY}`
            }
        });
        if (response.ok) {
            const data = await response.json();
            return data;
        }
        throw new Error(`Response Status: ${response.status}`);
    } catch (error) {
        console.log(error);
    }
}

export default getBusiness;