const axios = require('axios');
const {a, b, c, d, f, g, h, j, k} = require('./links');

async function toDoSearcheRender (req, res) {
	const { token } = req.body
	try {
		const response = await axios({
			method: 'get',
			headers: {
				Authorization: 'Bearer ' + token
			},
			url: b,
		});
		res.json(response.data)
	} catch (err) {
		console.log(err);
	}
}

module.exports = {
	toDoSearcheRender
};
