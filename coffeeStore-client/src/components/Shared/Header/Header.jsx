import logo from '../../../assets/logo1.png';

const Header = () => {
    return (
        <div className='bg-header flex justify-center items-center gap-4'>
            <img className='w-16' src={logo} alt="logo" />
            <h2 className="font-rancho text-white text-6xl py-6">Espresso Emporium</h2>
        </div>
    );
};

export default Header;