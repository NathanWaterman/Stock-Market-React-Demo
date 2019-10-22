import axios from "axios";

const API_TOKEN = "pk_7922aebf3fde43d69bdc26b11d7bf57e";

const api = axios.create({
	baseURL: "https://cloud.iexapis.com"
});

//stock quote
export const stockInfo = async symbol => {
	return await api.get(`/stable/stock/${symbol}/quote?token=${API_TOKEN}`);
};
//stock logo
export const stockLogo = async symbol => {
	return await api.get(`/stable/stock/${symbol}/logo?token=${API_TOKEN}`);
};
//stock news
export const stockNews = async symbol => {
	return await api
		.get(`/stable/stock/${symbol}/news?token=${API_TOKEN}`)
		.then(response => {
			// console.log(response);
		})
		.catch(err => console.log(err));
};
//stock chart
export const stockChart = async symbol => {
	return await api
		.get(`/stable/stock/${symbol}/chart?token=${API_TOKEN}`)
		.then(response => {
			// console.log(response);
		})
		.catch(err => console.log(err));
};
