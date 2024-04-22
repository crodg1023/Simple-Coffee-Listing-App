import CoffeeList from "./CoffeeList";

const Body = ({ coffees, handleShowAll, handleShowAvailable, showAll }) => {
    const filteredCoffees = showAll ? coffees : coffees.filter(x => x.available);

    return (
        <main className="bg-[#1B1D1F] px-5 sm:px-10 py-20 text-center font-semibold rounded-xl mt-[-160px] mb-10 flex flex-col items-center">
            <h1 className={'text-[32px] text-[#FEF7EE]'}>Our Collection</h1>
            <p className="text-[#6F757C] mt-2">Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
            <div className="flex felx-col sm:flex-row gap-3 justify-center mt-5">
                <button className={`px-3 py-2 ${ showAll ? 'bg-[#6F757C]' : '' } text-[#FEF7EE] rounded-lg mt-5`} onClick={ handleShowAll }>All products</button>
                <button className={`px-3 py-2 text-[#FEF7EE] rounded-lg mt-5 ${ showAll ? '' : 'bg-[#6F757C]' }`} onClick={ handleShowAvailable }>Available Now</button>
            </div>
            <CoffeeList coffees={ filteredCoffees } />
        </main>
    );
}

export default Body;