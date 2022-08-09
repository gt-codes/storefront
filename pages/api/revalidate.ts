import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.query.secret !== process.env.REVALIDATE_SECRET) {
		res.status(401).end();
		return;
	}

	await res.revalidate('/');
	res.status(200).json({ status: 'successful revalidation' });
}
