import Card from "./Card";

const CoffeeList = ({ coffees }) => {
    return (
        <section className={'flex flex-wrap gap-8 max-w-4xl justify-center mt-10'}>
            {
                coffees.map(coffee =>
                    <Card key={coffee.id}
                        name={coffee.name}
                        image={coffee.image}
                        price={coffee.price}
                        rating={coffee.rating}
                        votes={coffee.votes}
                        isAvailable={coffee.available}
                        isPopular={coffee.popular}
                    />
                )
            }
        </section>
    );
}

export default CoffeeList;