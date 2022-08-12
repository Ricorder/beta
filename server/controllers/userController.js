
const axios = require('axios');
const https = require('https');

const userSignin = async (req, res) => {
	const { login, password } = req.body
	try {
		if (login && password) {
			axios.defaults.httpsAgent = new https.Agent({
				rejectUnauthorized: false
			})
			const response = await axios({
				method: 'post',
				url: 'https://exposure-layer.trunk.alfaforex.dom/v1/security/login',
				data: {
					login,
					password
				}
			});
			return res.json(response.data)
		}
	} catch (err) {
		console.log(err);
	}
}

module.exports = {
	userSignin,
}
