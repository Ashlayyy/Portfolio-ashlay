/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
class Data {
	data = undefined;

	constructor() {
		this.api = new Api();
		this.data = this.getData();
	}

	getData = async () => {
		let data = await this.api.getData('json/data.json');
		return data;
	};
}
