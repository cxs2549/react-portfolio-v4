import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import { useState } from 'react'
import traversy from '../../assets/courses/traversy.png'
import acade from '../../assets/courses/academind.png'

const StyledCourses = styled.div`
height: 100vh;
	img {
		transform: scale(.5);
		max-width: 140px;
		min-width: 140px;
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
	const traversyCourses = [
		{
			img: traversy,
			title: 'modern javaScript from the beginning',
			desc: 'Learned and built projects with pure JavaScript (No frameworks or libraries)'
		},
		{
			img: traversy,
			title: 'React Front to back',
			desc:
				'Learned Modern React 16.8+ Including Hooks, Context API, Full Stack MERN & Redux By Building Real Life Projects',
			link:
				'https://www.udemy.com/course/modern-react-front-to-back/?referralCode=E43D257CE81EC8218FC9'
		},
		{
			title: 'MERN Stack front to back',
			img: traversy,
			desc: 'Build and deploy a social network with Node.js, Express, React, Redux & MongoDB'
		}
	]

	return (
		<StyledCourses className="pt-20 md:pt-32">
			<div className="max-w-4xl mx-auto   px-4 xl:px-0">
				<CSSTransition in={inProp} timeout={2000} appear classNames="slide">
					<div className="md:grid md:grid-cols-2 md:gap-x-4">
						{traversyCourses.map((course, i) => (
							<div
								key={i}
								className="rounded-xl mb-4 bg-white flex items-center p-4"
							>
								<img src={course.img} alt="" />
								<div>
									<h4 className="text-xs uppercase font-medium tracking-wider">
										{course.title}
									</h4>
									<p className="text-sm opacity-75 mt-2 mb-1">{course.desc}</p>
									<a
										href={course.link}
										className="text-blue-500 font-medium text-xs border-b border-blue-500 pb-0.5"
									>
										View on Udemy
									</a>
								</div>
							</div>
						))}
					</div>
				</CSSTransition>
			</div>
		</StyledCourses>
	)
}
export default Courses
