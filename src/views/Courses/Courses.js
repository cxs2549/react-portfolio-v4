import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import { useState } from 'react'
import reactImage from '../../assets/skills/react.png'
import vueImage from '../../assets/skills/vue.png'
import gitImage from '../../assets/skills/git.png'
import cssImage from '../../assets/skills/css.png'
import nodeImage from '../../assets/skills/nodejs.png'
import expressImage from '../../assets/skills/express.png'
import mongoImage from '../../assets/skills/mongo.png'
import sassImage from '../../assets/skills/sass.png'
import tailwindImage from '../../assets/skills/tailwind.png'
import htmlImage from '../../assets/skills/html.png'

const StyledCourses = styled.div`
	height: calc(100vh - 80px);

	img {
		transform: scale(.5);
		max-width: 140px;
		min-height: 110px;
		max-height: 110px;
		object-fit: contain;
		@media (min-width: 768px) {
			transform: scale(.75);
		}
	}
	/* slide classes */
	.slide-appear {
		opacity: 0;
		transform: translateY(-100px);
		transform-origin: left;
	}
	.slide-appear-active {
		opacity: 1;
		transform: translateY(0);
		transition: all 600ms;
	}
	.slide-enter {
		opacity: 0;
	}
	.slide-enter-active {
		opacity: 1;
		transition: opacity 2s;
	}
	.slide-exit {
		opacity: 1;
	}
	.slide-exit-active {
		opacity: 0;
		transition: opacity 2s;
	}
	#grid {
		
	}
`
const Courses = () => {
	const [ inProp, setInProp ] = useState(true)
	const Courses = [
		reactImage,
		vueImage,
		gitImage,
		cssImage,
		nodeImage,
		expressImage,
		mongoImage,
		sassImage,
		tailwindImage,
		htmlImage
	]

	return (
		<StyledCourses className="pt-20 md:pt-32  bg-gray-200">
			<div className="max-w-3xl mx-auto  px-4 xl:px-0">
				<CSSTransition in={inProp} timeout={2000} appear classNames="slide">
					<div className="  rounded-xl shadow bg-white">
						<div
							id="grid"
							className="grid grid-cols-3 md:grid-cols-5 gap-4 items-center justify-center w-full "
						>
							{Courses.map((skill, i) => (
								<div
									id="item"
									key={i}
									className=" flex items-center justify-center"
								>
									<img src={skill} alt="" />
								</div>
							))}
						</div>
					</div>
				</CSSTransition>
			</div>
		</StyledCourses>
	)
}
export default Courses
