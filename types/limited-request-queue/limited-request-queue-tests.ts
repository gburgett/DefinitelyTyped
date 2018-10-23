import RequestQueue = require('limited-request-queue');

const htmlUrlQueue = new RequestQueue(
	{
		maxSockets: 1,
		rateLimit: 7
	})