import React from 'react';
import { classNames } from '../utils';
import { Category } from '../utils/types';
import NextImage from './NextImage';

type Props = Category & {
	isLarge: boolean;
};

export default function CategoryPreview({ imageAlt, imageSrc, label, isLarge }: Props) {
	return (
		<div
			className={classNames(
				isLarge ? 'sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2' : 'sm:relative sm:aspect-none sm:h-full',
				'group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden '
			)}>
			<NextImage
				src={imageSrc}
				alt={imageAlt}
				className={classNames(
					isLarge ? '' : 'sm:absolute sm:inset-0 sm:w-full sm:h-full',
					'object-center object-cover group-hover:opacity-75'
				)}
			/>
			<div
				aria-hidden='true'
				className={classNames(
					isLarge ? '' : 'sm:absolute sm:inset-0',
					'bg-gradient-to-b from-transparent to-black opacity-50'
				)}
			/>
			<div className={classNames(isLarge ? '' : 'sm:absolute sm:inset-0', 'p-6 flex items-end')}>
				<div>
					<h3 className='font-semibold text-white'>
						<a href='#'>
							<span className='absolute inset-0' />
							{label}
						</a>
					</h3>
					<p aria-hidden='true' className='mt-1 text-sm text-white'>
						Shop now
					</p>
				</div>
			</div>
		</div>
	);
}
