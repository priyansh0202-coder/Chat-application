
export default async function handler(req, res) {
    const { method, headers, body } = req;
    const url = `https://cloud.appwrite.io${req.url}`;

    try {
        const response = await fetch(url, {
            method,
            headers: {
                ...headers,
                'Content-Type': 'application/json',
                'X-Appwrite-Project': '65faae4f88c07977c912',
                'X-Appwrite-Key': '834c4cc2b822f86988f68d7148b5a169f9633dc351d43014fc2752f2dc7c63951680586b7d04c1d47b5419ae4cdc1ae1a0a84428550da0af30039a26bbab082c23b0a0180ff0a06e7a8271e240560a521ff69b1371df0ce63e403fa0e883701e9582b34736e89d26e27f0278d30ca5c15f763244689f2ba2dbff24c5a572f94c',
            },
            body: method !== 'GET' ? JSON.stringify(body) : undefined,
        });

        const data = await response.json();

        res.setHeader('Access-Control-Allow-Origin', 'https://chat-application-tau-ten.vercel.app/login');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

        res.status(response.status).json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
