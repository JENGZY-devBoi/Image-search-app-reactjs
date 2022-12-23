import axios from "axios";

const KEY = 'y5Ufk_imKuPbqjwocBA_FG_I_Ro9KYmnFDLUOnYmBGo';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: `Client-ID ${KEY}`
        },
        params: {
            query: term,
        }
    });

    return response.data.results;
};

export default searchImages;