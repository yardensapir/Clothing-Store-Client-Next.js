type Props = {
    title: string,
    price: number,
    image: string
};

const Product = ({ title, price, image }: Props) => {


    return <div>
        <div>
            <img src={image} alt="" />
        </div>
        <h2>{title}</h2>
        <h3>{price}</h3>
    </div>;
};
export default Product;