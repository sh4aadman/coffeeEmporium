import cup1 from '../../../assets/cups/Rectangle 9.png';
import cup2 from '../../../assets/cups/Rectangle 10.png';
import cup3 from '../../../assets/cups/Rectangle 11.png';
import cup4 from '../../../assets/cups/Rectangle 12.png';
import cup5 from '../../../assets/cups/Rectangle 13.png';
import cup6 from '../../../assets/cups/Rectangle 14.png';
import cup7 from '../../../assets/cups/Rectangle 15.png';
import cup8 from '../../../assets/cups/Rectangle 16.png';

const Follow = () => {
    return (
        <div>
            <p className="text-[#1B1A1A] text-xl font-raleway text-center">Follow Us Now</p>
            <h2 className="text-[#331A15] text-6xl font-rancho text-center mt-2 mb-12">Follow on Instagram</h2>
            <div className='grid grid-cols-4 max-w-5xl mx-auto gap-6 mb-32'>
                <img src={cup1} alt="cup" />
                <img src={cup2} alt="cup" />
                <img src={cup3} alt="cup" />
                <img src={cup4} alt="cup" />
                <img src={cup5} alt="cup" />
                <img src={cup6} alt="cup" />
                <img src={cup7} alt="cup" />
                <img src={cup8} alt="cup" />
            </div>
        </div>
    );
};

export default Follow;