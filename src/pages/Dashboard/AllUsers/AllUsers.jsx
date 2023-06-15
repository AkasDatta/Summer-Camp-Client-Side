import { useQuery } from "@tanstack/react-query";
import { Button, Table } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { FaUserGraduate } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    const token = localStorage.getItem('access-token');

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('https://summer-camp-server-pi.vercel.app/users', {
          headers: {
            authorization: `bearer ${token}`
          }
        });
        return res.json(); // Extract the data from the response
      });
      
      console.log(users);

    const handleMakeInstructor = users => {
        Swal.fire({
            title: 'Are you sure?',
            text: `${users.name} will be an Instructor...!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://summer-camp-server-pi.vercel.app/savedusers/instructor/${users._id}`, {
                    method: 'PUT'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.modifiedCount) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: `${users.name} is an Instructor Now!`,
                            showConfirmButton: false,
                            timer: 1500
                        })
                        refetch();
                        const newInstructor = { name: users.name, image: users.image, email: users.email, role: 'instructor' }
                        fetch(`https://summer-camp-server-pi.vercel.app/instructors`, {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(newInstructor)
                        })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                refetch();
                            }
                        })
                    }
                })
            }
        });
    }
    
    const handleMakeAdmin = users => {

        Swal.fire({
            title: 'Are you sure?',
            text: `${users.name} will be a Admin...!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://summer-camp-server-pi.vercel.app/users/admin/${users._id}`, {
                    method: 'PATCH'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount) {
                            refetch();
                            const Toast = Swal.mixin({
                                toast: true,
                                position: 'top-end',
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true,
                                didOpen: (toast) => {
                                    toast.addEventListener('mouseenter', Swal.stopTimer)
                                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                                }
                            })

                            Toast.fire({
                                icon: 'success',
                                title: `${users.name} is an Admin Now!`
                            })
                        }
                    })
            }
        })
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
                            <th>Update Role</th>
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
                                    <td>{users?.role}</td>
                                    <td className="text-center">              
                                        <Button disabled={ users.role === 'instructor'} onClick={() => handleMakeInstructor(users)} className="btn btn-warning" size='sm'>
                                            <FaUserGraduate></FaUserGraduate>
                                        </Button>
                                    </td>
                                    <td className="text-center">              
                                        <Button disabled={ users.role === 'admin'} onClick={() => handleMakeAdmin(users)} className="btn btn-success" size='sm'>
                                            <FaUserGraduate></FaUserGraduate>
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