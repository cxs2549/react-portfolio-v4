import { Link } from 'react-router-dom'
import face from '../../../assets/face.jpg'
const Logo = () => {
return (
<Link to="/">
    <img src={face} className="w-14 h-14 rounded-full" alt="" />
</Link>
)
}
export default Logo