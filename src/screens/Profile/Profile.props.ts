export interface RequestModel {
	method: string,
	headers: {
		Authorization: string
	},
	data: {
		oldPassword: string,
		newPassword: string
	},
	url: string,
}
