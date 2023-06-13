import { useQuery } from "@tanstack/react-query";
import { Button, Table } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    const {data: users = [], refetch} = useQuery(['savedusers'], async() => {
        const res = await fetch('http://localhost:5000/savedusers')
        return res.json();
    })

    const handleMakeAdmin = users =>{
        fetch(`http://localhost:5000/savedusers/admin/${users._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `${users.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    const handleDelete = users => {
        // Swal.fire({
        //     title: 'Are you sure?',
        //     text: "You won't be able to revert this!",
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Yes, delete it!'
        //   }).then((result) => {
        //     if (result.isConfirmed) {
        //         fetch(`http://localhost:5000/savedusers/admin/${users._id}`,{
        //             method: 'DELETE'
        //         })
        //         .then(res => res.json())
        //         .then(data =>{
        //             if(data.deletedCount > 0){
        //                 refetch();
        //                 Swal.fire(
        //                     'Deleted!',
        //                     'Your file has been deleted.',
        //                     'success'
        //                   )
        //             }
        //         })
        //     }
        //   })
    }
    return (
        <div>
            <Helmet>
                <title>Harmony Academy | All Users</title>
            </Helmet>
            <h3 className="fs-2">{users?.length}</h3>
            {users?.email}
            <div className="table-container my-5" style={{ width: "100%" }}>
                <Table striped bordered hover className="w-100">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((users, index) => (
                                <tr key={users?._id}>
                                    <td>{index + 1}</td>
                                    <td>{users?.name}</td>
                                    <td>
                                        <div className='d-flex align-users-center'>
                                            <div className='ms-3'>
                                                <p className='fw-bold mb-1'>{users?.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-center">
                                       {
                                        users.role === 'admin' ? 'admin' : 
                                    
                                        <Button onClick={() => handleMakeAdmin(users)} className="btn btn-warning" size='sm'>
                                            <FaUserShield></FaUserShield>
                                        </Button>
                                       }
                                    </td>
                                    <td className="text-center">
                                        <Button onClick={() => handleDelete(users)} className="btn btn-danger" size='sm'>
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

export default AllUsers;