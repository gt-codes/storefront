import { classNames } from '../utils';
import Image, { ImageProps } from 'next/future/image';
import { useState } from 'react';

export default function NextImage(props: ImageProps) {
	const [loading, setLoading] = useState(true);

	return (
		<Image
			{...props}
			alt={props.alt || 'Image'}
			className={classNames(
				'duration-300 ease-in-out object-cover',
				loading ? 'blur-2xl scale-110' : 'blur-0 scale-100',
				props.className || ''
			)}
			width={1000}
			height={1000}
			onLoadingComplete={() => setLoading(false)}
		/>
	);
}
