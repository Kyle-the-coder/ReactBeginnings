import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

//Page made for an intro into the website

const ButtonEntrance = (props) => {
    const { axResults } = props;
    const [buttonSpin, setButtonSpin] = useState('linkStyle')
    const navigate = useNavigate();
    //On click event to rotate button
    const flipButton = () => {
        setButtonSpin('linkStyle2')
        const timer = setTimeout(() => navigate('/home'), 1100);
        return timer
    }

    return (
        // Display Button
        <div className='buttonContents'>
            {axResults.length !== 0 &&
                <div className='buttonIntro' style={{
                    backgroundImage: `radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(42, 42, 42,1) 68%), url(${axResults[1].background_image})`
                }}>
                    <h1 className={buttonSpin} onClick={flipButton}><strong className='text-white display-4'>Enter into the Next Dimension?</strong></h1>
                </div>}

        </div>
    )
}

export default ButtonEntrance;