import { useNavigate } from 'react-router-dom';
import '../style/staticPage.css';


function FirstPage(){
    const navigate = useNavigate();
    function move(){
        navigate('/Sogbesan-Tantolorun/AffiiateMarketing')
    }

    return (
        <div className="section_main">
            <div className='name_'>SOGBESAN TANTOLORUN</div>

            <p className='info'>AFFILIATE MARKETER</p>

            <div className='introduction'>
                <p className='biggest'>Welcome to my Marketing page...</p>
                <p className='bigger'>MINDBLOWING: A Blog About Affiliate Marketing...</p>
                <p className='big'>CLICK ON THE BUTTON BELOW TO KNOW MORE...</p>
            </div>

            <button onClick={move}>CLICK HERE TO CONTINUE</button>
        </div>
    )
}
export default FirstPage;