import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { Button, Table } from 'react-bootstrap';
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCart = () => {
    const [cart, refetch] = useCart();
    const total = Array.isArray(cart) ? cart.reduce((sum, item) => item.price + sum, 0) : 0;
    console.log(cart)
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if(result.isConfirmed){
                fetch(`https://summer-camp-server-pi.vercel.app/carts/${id}`,{
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
        <div>
            <Helmet>
                <title>Harmony Academy | Mycart</title>
            </Helmet>
            <div className="d-flex mt-5 pt-5 ">
                <div>
                    <h2 className="text-3xl">Total Icons: {cart.length}</h2>
                </div>
                <div className="mx-5">
                    <h2 className="text-3xl">Total Price: {total}</h2>
                </div>
            </div>
            <div className="my-5" style={{ width: "100%" }}>
                <Table striped bordered hover className="w-100">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.length ? cart.map((item, index) => (
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
                                        <Link to={`/dashboard/payment/{item._id}`}>
                                            <Button className="btn btn-dark" size="sm">
                                                Pay
                                            </Button>
                                        </Link>
                                    </td>
                                    <td className="text-center">
                                        <Button onClick={() => handleDelete(item?._id)} className="btn btn-danger" size='sm'>
                                            <FaTrashAlt></FaTrashAlt>
                                        </Button>
                                    </td>
                                </tr>
                            )) : ""
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default MyCart;
