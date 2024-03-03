import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Loader from '../components/Loader';
import Product from '../components/Product'
import { useGetProductsQuery } from '../slices/productsApiSlice';
import Message from '../components/Message';

const HomeScreen = () => {
    const { data: products, isLoading, error } = useGetProductsQuery();
    return (
        <>
            {isLoading ? (
                <Loader/>
            ) : error ? (
                <Message variant = 'danger'>{error?.data?.message || error.error} </Message>
            ) : (
                <>
                    <h1>Latest Product</h1 >
                    <Row>
                        {products.map((product) => (
                            <Col key={product._id} sm={12} md={5} lg={4} xl={4}>
                                <Product product={product} />
                            </Col>
                        ))}
                    </Row>
                </>
            )}
        </>
    )
}

export default HomeScreen