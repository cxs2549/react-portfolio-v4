import styled from 'styled-components'
import Slideshow from '../../components/Slideshow/Slideshow'
import { CSSTransition } from 'react-transition-group'
import { useState } from 'react'
const StyledPortfolio = styled.div`
	.portfolio-appear {
		opacity: 0;
		transform: translateY(-100px);
	}
	.portfolio-appear-active {
		opacity: 1;
		transform: translateY(0);
		transition: all 600ms;
	}
	.portfolio-enter {
		opacity: 0;
	}
	.portfolio-enter-active {
		opacity: 1;
		transition: opacity 2s;
	}
	.portfolio-exit {
		opacity: 1;
	}
	.portfolio-exit-active {
		opacity: 0;
		transition: opacity 2s;
	}
`
const Portfolio = () => {
	const [ inProp, setInProp ] = useState(true)
	return (
		<StyledPortfolio className="mt-16 md:mt-32">
			<CSSTransition appear in={inProp} timeout={2000} classNames="portfolio">
				<Slideshow />
			</CSSTransition>
		</StyledPortfolio>
	)
}
export default Portfolio
