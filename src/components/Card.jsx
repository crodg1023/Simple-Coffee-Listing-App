import filledStar from '../assets/Star_fill.svg';
import emptyStar from '../assets/Star.svg';

const Card = ({ name, image, price, rating, votes, isPopular, isAvailable}) => {
    const isPopularClass = isPopular ? 'block' : 'hidden';
    return (
        <div className="w-[260px]">
            <div className='relative'>
                <img src={`${image}`} alt={`${name} image`} className="rounded-xl"/>
                <label className={`bg-[#F6C768] text-[10px] rounded-full px-3 py-1 absolute top-2 left-2 ${isPopularClass}`}>Popular</label>
            </div>
            <div className="flex justify-between mt-3">
                <h2 className="text-[#FEF7EE] font-medium">{ name }</h2>
                <span className="bg-[#BEE3CC] text-xs text-[#111315] px-2 py-1 font-bold rounded-md">{ price }</span>
            </div>
            <div className="flex mt-3 justify-between">
                <div className='flex gap-1'>
                    <img src={ rating ? filledStar : emptyStar } alt="filled star" />
                    <p className='text-[#FEF7EE] font-medium'>{ rating }</p>
                    <span className='text-[#6F757C] font-bold'>{ rating ? `(${votes} votes)` : 'No ratings' }</span>
                </div>
                <span className='text-[#ED735D] font-bold text-sm right-0'>{ isAvailable ? '' : 'Sold out' }</span>
            </div>
        </div>
    );
}

export default Card;