import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { Button, Table } from 'react-bootstrap';
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCart = () => {
    const [cart, refetch] = useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0);

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`,{
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data =>{
                    if(data.deletedCount > 0){
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                    }
                })
            }
          })
    }

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
            <div className="table-container mx-5 px-5 my-5" style={{ width: "100%" }}>
                <Table striped bordered hover className="w-100">
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
                            cart.map((item, index) => (
                                <tr key={item._id}>
                                    <td>{index + 1}</td>
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
                                        <Button onClick={() => handleDelete(item)} className="btn btn-danger" size='sm'>
                                            <FaTrashAlt></FaTrashAlt>
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default MyCart;
