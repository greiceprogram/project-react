import '../../../styles.css'

import EmptyImage from '../../assets/images/Empty-Image.png'
import Linkedin from '../../assets/images/LinkedIn.png'
import X from '../../assets/images/X.png'
import Dribble from '../../assets/images/Dribble.png'



export default function Content(props) {
    return (
        <div className='content-container'>
            <img src={props.image ? props.image : EmptyImage} alt="" className='content-image' />
            <div className="content-title">
                <h1>{props.name}</h1>
                <h2>{props.role}</h2>
            </div>
            <p className='content-description'>
            {props.description}
            </p>
            <div className="content-icons">
                <a href={props.linkedin} target='_blank'>
                    <img src={Linkedin} alt="" />
                </a>
                <a href={props.x} target='_blank'>
                    <img src={X} alt="" />
                </a>
                <a href={props.dribble} target='_blank'>
                    <img src={Dribble} alt="" />
                </a>    
            </div>
        </div>
    )
}
