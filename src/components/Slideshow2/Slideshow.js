import styled from 'styled-components'
import Carousel from '../Carousel/Carousel'

import dunkin from '../../assets/projects/dunkin.png'
import newbalance from '../../assets/projects/new-balance.png'
import chevron from '../../assets/projects/chevron.png'
import coke from '../../assets/projects/coke.png'
import tubi from '../../assets/projects/tubi.png'
import showtime from '../../assets/projects/showtime.png'
import marriott from '../../assets/projects/marriott.png'
import arbys from '../../assets/projects/arbys.png'
import carvana from '../../assets/projects/carvana.png'
import xbox from '../../assets/projects/xbox.png'
import hbo from '../../assets/projects/hbo.png'

const StyledSlideshow = styled.div`
	display: flex;
	flex-flow: column;
	max-width: 1200px;
	margin: 0 auto;
	height: 100%;
	border-radius: 13px;
	position: relative;
	z-index: 0;
	border: none;
	border-radius: 13px;
	/* margin-top: rem; */
	@media (min-width: 640px) {
		margin-top: 0;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 100px 400px auto auto;
	}
	@media (min-width: 768px) {
		gap: .5rem;
	}
	@media (min-width: 1280px) {
		border-radius: 13px;
	}

	#slides {
		margin: 0 auto;
		max-width: 100%;
		/* border: 2px solid red; */
	}
	.box {
		/* max-width: 100vw; */
		.carousel-item {
			padding: 0 1rem;
			border-radius: 3px;
			background-color: transparent;

			@media (min-width: 768px) {
				padding: 0;
			}
		}
		.carousel-image {
			object-position: top;
			border-radius: 3px;
			height: 100%;
			max-width: 900px !important;
		}
		#thumbnail-div {
			display: flex;
			gap: 8px;
			justify-content: center;
			flex-wrap: wrap;
			padding: 0 1rem;
			margin-top: 2rem;
			img {
				border-radius: 3px;
				cursor: pointer;
			}
			.thumbnail {
				max-width: 50px;
				@media (min-width: 640px) {
					max-width: 75px;
				}
			}
		}
		.prev,
		.next {
			font-size: 2.5rem;
			color: #333;
			@media (min-width: 640px) {
				display: block;
			}
		}
		.prev {
			left: -1rem;
			@media (min-width: 640px) {
				left: -3.5rem;
			}
		}
		.next {
			right: -1rem;
			@media (min-width: 640px) {
				right: -3.5rem;
			}
		}
	}
`

const Slideshow = () => {
	const projectsDesktop = [
		{
			image: dunkin,
			url: 'https://cxs2549.github.io/react-dunkin/',
			github: 'https://github.com/cxs2549/react-dunkin'
		},
		{
			image: newbalance,
			url: 'https://cxs2549.github.io/new-balance/',
			github: 'https://github.com/cxs2549/new-balance'
		},
		{
			image: chevron,
			url: 'https://cxs2549.github.io/react-chevron/',
			github: 'https://github.com/cxs2549/react-chevron'
		},
		{
			image: coke,
			url: 'https://cxs2549.github.io/react-coke/',
			github: 'https://github.com/cxs2549/react-coke'
		},
		{
			image: tubi,
			url: 'https://cxs2549.github.io/react-tubi/',
			github: 'https://github.com/cxs2549/react-tubi'
		},
		{
			image: showtime,
			url: 'https://cxs2549.github.io/react-showtime/',
			github: 'https://github.com/cxs2549/react-showtime'
		},
		{
			image: marriott,
			url: 'https://cxs2549.github.io/react-marriott/',
			github: 'https://github.com/cxs2549/react-marriott'
		},
		{
			image: arbys,
			url: 'https://cxs2549.github.io/react-arbys/',
			github: 'https://github.com/cxs2549/react-arbys'
		},
		{
			image: carvana,
			url: 'https://cxs2549.github.io/react-carvana/',
			github: 'https://github.com/cxs2549/react-carvana'
		},
		{
			image: xbox,
			url: 'https://cxs2549.github.io/react-xbox/',
			github: 'https://github.com/cxs2549/react-xbox'
		},
		{
			image: hbo,
			url: 'https://cxs2549.github.io/react-hbo-max-v2/',
			github: 'https://github.com/cxs2549/react-hbo-max-v2'
		}
	]

	return (
		<StyledSlideshow className="md:px-8">
			<div id="slides">
				<Carousel
					data={projectsDesktop}
					time={4000}
					width="800px"
					height="350px"
					radius="10px"
					captionPosition="bottom"
					automatic={true}
					dots={false}
					pauseIconColor="blue"
					pauseIconSize="40px"
					slideBackgroundColor="transparent"
					slideImageFit="cover"
					thumbnails={true}
					thumbnailWidth="100px"
					style={{
						textAlign: 'center',
						maxHeight: '500px',
						margin: '0px auto'
					}}
				/>
			</div>
		</StyledSlideshow>
	)
}

export default Slideshow
