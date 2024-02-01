
import ShopCard from '@/components/shopComp/ShopCard';

export const metadata = {

    title: "Delicious and Nutritious Fruit",
    description: "Fruits are not just a delight for the taste buds; they are a gift from nature that promotes health and vitality. Whether you're seeking a quick snack, a refreshing beverage, or a nutritious addition to your meals, our fruits embody the essence of wholesome goodness.",
    alternates: {
        canonical: '/shop',

    },
};


export default function Shop() {



    return (
        <>
            <ShopCard />
        </>
    )
}
