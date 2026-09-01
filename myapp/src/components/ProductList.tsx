import { useState } from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
}

export default function ProductList() {
    const [products, setProducts] = useState<Product[]>([]);
    const [productName, setProductName] = useState<string>('');
    const [productPrice, setProductPrice] = useState<number>(0);

    const totalPrice = products.reduce((sum, product) => sum + product.price, 0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProductName(e.target.value);
    };

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProductPrice(Number(e.target.value));
    };

    const addProduct = () => {
        if (productName.trim() !== '') {
            const newProduct: Product = {
                id: Date.now(),
                name: productName.trim(),
                price: productPrice
            };
            setProducts([...products, newProduct]);
            setProductName('');
            setProductPrice(0);
        }
    };

    const deleteProduct = (id: number) => {
        setProducts(products.filter(product => product.id !== id));
    };

    return (
        <div style={{
            minHeight: '30vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px 0'
        }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '500px', width: '100%' }}>
                <div style={{ display: 'flex', gap: '12px' }}>
                    <input
                        type="text"
                        value={productName}
                        onChange={handleChange}
                        placeholder="Enter product name"
                        style={{ flex: 1, padding: '10px 12px' }}
                    />
                    <input
                        type="number"
                        value={productPrice || ''}
                        onChange={handlePriceChange}
                        placeholder="Enter product price"
                        style={{ flex: 1, padding: '10px 12px' }}
                    />
                    <button onClick={addProduct} style={{ padding: '10px 16px' }}> Add Product </button>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {products.map((product) => (
                        <li key={product.id} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <button onClick={() => deleteProduct(product.id)} style={{ padding: '8px 12px' }}> Delete </button>
                            <span>{product.name} - {product.price.toFixed(2)}</span>
                        </li>
                    ))}
                </ul>

                <h3 style={{ marginTop: '8px', textAlign: 'center' }}>Total: {totalPrice.toFixed(2)} </h3>
            </div>
        </div>
    );
}