import styled from 'styled-components'
import Logo from './Logo/Logo'
import Title from './Title/Title'
import Links from './Links/Links'

const links = [ 'skills', 'portfolio', 'courses' ]

const StyledHeader = styled.header``
const Header = () => {
	return (
		<StyledHeader className=" bg-black shadow">
			<div className="max-w-4xl py-3 mx-auto px-4 xl:px-0 flex items-center justify-between bg-black text-white">
				<Logo />
				<Title />
			</div>
			<div className="max-w-5xl  mx-auto px-4 flex items-center justify-between text-gray-700">
				<Links links={links} />
			</div>
		</StyledHeader>
	)
}
export default Header
