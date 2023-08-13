import React, { useState } from 'react';
import { useParams, Link , useNavigate} from 'react-router-dom';
import { IProduct } from '../interfaces/Product';

interface ProductDetailPageProps {
    products: IProduct[];
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ products }) => {
    const { id } = useParams<{ id: string }>();
    const [cartItems, setCartItems] = useState<IProduct[]>([]);
    const navigate = useNavigate();

    if (!products || products.length === 0) {
        return <div>Đang tải sản phẩm...</div>;
    }

    const product = products.find((item) => item._id === id);

    if (!product) {
        return <div>Sản phẩm không tồn tại</div>;
    }

    const handleAddToCart = () => {
        setCartItems([...cartItems, product]);
        // Điều hướng tới trang giỏ hàng
        navigate('/cart');
    };

    return (
        <div className='product-container'>
            <div className='wrapper'>
                <img src={product.image} alt="Product" />
            </div>
            <div className='info-wrapper'>
                <h1>{product.name}</h1>
                <p className='price'>Giá: {product.price}</p>
                <p>{product.description}</p>
                <div className='info-color'>color</div>
                <div className=''>
                <button className='w-full leading-5 bg-[#f3f3f3] p-2 mt-3 text-[12px] hover:bg-[#c5c5c5]'>ADD TO CART</button>
                    <button className='w-full leading-5 bg-[#f3f3f3] p-2 mt-3 text-[12px] hover:bg-[#c5c5c5]'>TÌM CỬA HÀNG GẦN NHẤT</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
