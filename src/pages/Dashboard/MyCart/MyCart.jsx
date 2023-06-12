import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { Badge, Button, Table } from 'react-bootstrap';
import { FaTrashAlt } from "react-icons/fa";

const MyCart = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0);
    return (
        <div className="my-cart-container">
            <Helmet>
                <title>Harmony Academy | Mycart</title>
            </Helmet>
            <div className="my-cart-content d-flex mt-5 pt-5 mx-5 px-5">
                <div>
                    <h2 className="text-3xl">Total Icons: {cart.length}</h2>
                </div>
                <div className="mx-5">
                    <h2 className="text-3xl">Total Price: {total}</h2>
                </div>
                <div>
                    <Button className="btn btn-dark">Pay</Button>
                </div>
            </div>
            <div className="table-container mx-5 px-5 my-5" style={{ height: "calc(100vh - 250px)" }}>
                <Table striped bordered hover style={{ height: "100%" }}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Picture</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr
                            key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <img
                                        src={item.image}
                                        alt=''
                                        style={{ width: '45px', height: '45px' }}
                                        className='rounded-circle'
                                    />
                                </td>
                                <td>
                                    <div className='d-flex align-items-center'>
                                    <div className='ms-3'>
                                            <p className='fw-bold mb-1'>{item.name}</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p className='fw-normal mb-1 text-end'>${item.price}</p>
                                </td>
                                <td className="text-center">
                                    <Button className="btn btn-danger" size='sm'>
                                        <FaTrashAlt></FaTrashAlt>
                                    </Button>
                                </td>
                            </tr>)
                        }
                 
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default MyCart;