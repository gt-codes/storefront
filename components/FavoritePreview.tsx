import React from 'react';
import { Favorite } from '../utils/types';
import NextImage from './NextImage';

export default function FavoritePreview({ imageAlt, imageSrc, name, price }: Favorite) {
	return (
		<div className='group relative'>
			<div className='w-full h-96 rounded-lg overflow-hidden group-hover:opacity-75 sm:h-auto sm:aspect-w-2 sm:aspect-h-3'>
				<NextImage src={imageSrc} alt={imageAlt} className='w-full h-full object-center object-cover' />
			</div>
			<h3 className='mt-4 text-base font-semibold text-gray-900'>
				<a href='#'>
					<span className='absolute inset-0' />
					{name}
				</a>
			</h3>
			<p className='mt-1 text-sm text-gray-500'>{price}</p>
		</div>
	);
}
