import { IPFS } from "./IPFS";
import axios from "axios";
import FormData from "form-data";
import fs from "fs";
import path from "path";

export class Storj extends IPFS {
	serviceBaseURL = "ipfs:/";
	URL = `https://www.storj-ipfs.com/api/v0/add`;
	AUTH: {
		username: string;
		password: string;
	};
	constructor(username: string, password: string) {
		super();
		this.AUTH = { username, password };
	}

	async uploadDirToService(dir: fs.PathLike) {
		const files = fs.readdirSync(dir);
		let formData = new FormData();
		files.forEach((file) => {
			const filepath = path.join(dir.toString(), file);
			formData.append(`file`, fs.createReadStream(filepath), {
				filepath,
			});
		});

		// Execute the Upload request to the Storj IPFS pinning service
		const response = await axios.post(this.URL, formData, {
			auth: this.AUTH,
			headers: {
				"Content-Type": `multipart/form-data; boundary= ${formData.getBoundary()}`,
			},
			// These arguments remove any client-side upload size restrictions
			maxContentLength: Infinity,
			maxBodyLength: Infinity,
		});

		return response.data.cid;
	}
}
