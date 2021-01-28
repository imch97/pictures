import React, { useState, useEffect } from 'react'

const placeHolder =
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='

const LazyImage = (props) => {
	const [imageSrc, setImageSrc] = useState(placeHolder)
	const [imageRef, setImageRef] = useState()

	useEffect(() => {
		let observer
		let didCancel = false

		if (imageRef && imageSrc === placeHolder) {
			if (IntersectionObserver) {
				observer = new IntersectionObserver(
					(entries) => {
						entries.forEach((entry) => {
							if (
								!didCancel &&
								(entry.intersectionRatio > 0 || entry.isIntersecting)
							) {
								setImageSrc(props.src)
							}
						})
					},
					{
						threshold: 0.01,
					}
				)
				observer.observe(imageRef)
			} else {
				setImageSrc(props.src)
			}
		}
		return () => {
			didCancel = true

			if (observer && observer.unobserve) {
				observer.unobserve(imageRef)
			}
		}
	})

	return (
		<div
			className="list_pictures_item"
			key={`item_${props.path}`}
			onClick={() => props.onClick(props.src)}
		>
			<img ref={setImageRef} src={imageSrc} />
		</div>
	)
}

export default LazyImage
