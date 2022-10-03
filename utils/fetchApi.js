import axios from'axios';

export const baseUrl ='https://bayut.p.rapidapi.com'

export const fetchApi = async (url) =>{
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'ac3204e409msh17b656760a9b400p15150cjsna2ac7afe5e91',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })
    return data;
}