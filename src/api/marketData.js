import axios from "axios";

const API_TOKEN = window.ACCESS_TOKEN;

const api = axios.create({
	baseURL: "https://cloud.iexapis.com"
});

//stock quote
export const stockInfo = async (symbol, API_TOKEN) => {
    return await api.get(`/stable/stock/${symbol}/quote?token=${API_TOKEN}`)
};
//stock logo
export const stockLogo = async (symbol, API_TOKEN) => {
    return await api.get(`/stable/stock/${symbol}/logo?token=${API_TOKEN}`)
};
//stock news
export const stockNews = async (symbol, API_TOKEN) => {
	return await api.get(`/stable/stock/${symbol}/news?token=${API_TOKEN}`);
};
//stock chart
export const stockChart = async (symbol, API_TOKEN) => {
	return await api.get(`/stable/stock/${symbol}/chart?token=${API_TOKEN}`);

};