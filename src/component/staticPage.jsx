import '../style/staticPage.css';
import picture from '../asset/images/pic.jpg';
import picture1 from '../asset/images/pic2.jpeg';
import picture2 from '../asset/images/pic3.jpeg';
import picture3 from '../asset/images/pic4.jpeg';
import picture4 from '../asset/images/pic5.jpeg';
import whattsapp from '../asset/images/whatsapp.svg';


function Page(){
    //const whattsappLink = 'https://api.whatsapp.com/send?phone=2347060679230';
    const whattsappLink = "https://wa.me/2347060679230";
    return (
        <div className="section_main">
            <div className="nav_">FINALLY REVEALED  !!!</div>
            <div className="firstwriteup">
                THE LITTLE-KNOWN SECRET SYSTEM TO EARNING OVER <span>200k on a weekly basis</span> THAT MOST PEOPLE DON'T WANT YOU TO KNOW <br /><br />
                <span>GET ACCESS TO THE THE FREE VIDEO NOW!!!</span> <br /> <br />
                NOTE:- This is not the usual make money online things you have been seeing around...
            </div>
            <a href={whattsappLink} target="_blank" rel="noopener noreferrer"><button><img className="whatsapp" src={whattsapp} alt="whatsapp icon"/>CLICK HERE TO GET ACCESS</button></a>

            <div className="secondwriteup">
                <div className="writeup_">
                    My name is <span className="name">Soabesan Tantolorun</span>,i am a licensed 6 figure Affiliate Marketer. I'm a top affiliate marketer to a two multimillion company, I am also a coach who has trained many students to start up and scale their <span className="thickner"> Affiliate Marketing Business.</span> and yes i am a student in my early 20's. I have always been an ambitious young lady and believed in the possiblity of earning legally online.
                    I will show you how you can profit from the internet. I will be guiding you hand in hand how you can earn up to 200k on a "Weekly basis", selling other people's products with just your laptop or smartphone.... 
                </div>

                <img src={picture} alt="pic" />

            </div>

            <a href={whattsappLink} target="_blank" rel="noopener noreferrer"><button><img className="whatsapp" src={whattsapp} alt="whatsapp icon"/>CLICK HERE TO GET ACCESS</button></a>

            <div>
                <p className="underline">NOW, here's exactly how it works:</p>

                <div className="thirdwriteup">
                    <ul>
                     * <span className="thickner">You join the platform</span> with a list of high-quality digital products that has been <span className="thickner">created and listed by experts.</span>
                    </ul>

                    <ul>
                     * <span className="thickner">You simply pick a product</span> of your choice that you can promote and <span className="thickner">get a good commission</span> from.
                    </ul>

                    <ul>
                     * <span className="thickner">Put some emphasis on the product</span>, get people to know more about it, and <span className="thickner">earn your commission</span>from every sale. Imagine selling a product for for N100,000 
                        and <span className="thickner">pocketing N50,000 as your commision</span>     
                    </ul>
                </div>
                
                <a href={whattsappLink} target="_blank" rel="noopener noreferrer"><button><img className="whatsapp" src={whattsapp} alt="whatsapp icon"/>CLICK HERE TO GET ACCESS</button></a>
            
            </div>

            <div className='stories'>

                <p className="underline_">Some Of My Recent Payouts Of The Money I Made From This same business model</p>
                <p className="small">I am now earning a minimum of 300k to</p>
                <p className="smaller">700k Every week with just my</p>
                <p className="smallest">Smartphone</p>

            </div>

            <div className='imgSection1'>
                <img src={picture1} alt="pic" />
                <img src={picture4} alt="pic" />
            </div>

            <div className='imgSection2'>
                <img src={picture2} alt="pic" />
                <img src={picture3} alt="pic" />
            </div>
            
            <div className='footer'>
                <p className="small">You too can do it!!.</p>
                <p className="small">Your only setback is you!.</p>
                <p className="small">With CONSISTENCY, HAEDWORK AND A POSITIVE MINDSET!!,</p>
                <p className="small">I believe the possiblity of you doing it....</p>
            </div>

            <a href={whattsappLink} target="_blank" rel="noopener noreferrer"><button><img className="whatsapp" src={whattsapp} alt="whatsapp icon"/>CLICK HERE TO GET ACCESS</button></a>
        </div>
    )
}
export default Page;