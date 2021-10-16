import styled from 'styled-components'
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai'
const StyledTitle = styled.div``
const Title = () => {
	return (
		<StyledTitle className="flex gap-2 items-center pr-4">
			<div>
				<div className="leading-5 md:leading-4">
					<h4 className="tracking-wider md:text-lg">Cliff Sanchez</h4>
					<p className="font-medium text-xs text-right md:text-base">React web dev</p>
				</div>
			</div>
			<div className="flex flex-col gap-y-1">
				<a href="https://www.linkedin.com/in/cliff-sanchez-b75a201bb/" target="_blank">
					<AiOutlineLinkedin size={22} />
				</a>
				<a href="https://github.com/cxs2549" target="_blank">
					<AiOutlineGithub size={22} />
				</a>
			</div>
		</StyledTitle>
	)
}
export default Title
