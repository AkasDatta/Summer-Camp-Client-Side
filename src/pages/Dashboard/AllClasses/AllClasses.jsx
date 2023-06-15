import { FaBan, FaCheck } from "react-icons/fa";
import Swal from "sweetalert2";
import useClasses from "../../../hooks/useClasses";
import { Button, Table } from "react-bootstrap";

const AllClasses = () => {

    const [classes, refetch] = useClasses();

    const handleApproved = classData => {

        Swal.fire({
            title: 'Are you sure?',
            text: `${classData.name} will be a approved...!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://summer-camp-server-pi.vercel.app/classes/approved/${classData._id}`, {
                    method: 'PUT'
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
                                title: `${classData.name} is now approved class`
                            })
                        }
                    })
            }
        })
    }
    const handleDenied = classData => {

        Swal.fire({
            title: 'Are you sure?',
            text: `${classData.name} will be a denied...!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://summer-camp-server-pi.vercel.app/classes/denied/${classData._id}`, {
                    method: 'PUT'
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
                                title: `${classData.name} is now denied class`
                            })
                        }
                    })
            }
        })
    }
    const handleFeedback = classData => {
        console.log('clicked', classData);
    }

    return (
        <div className="w-full">
            <h2>Manage Classes</h2>
            <hr />

            <div className="table-container my-5" style={{ width: "100%" }}>
                <Table striped bordered hover className="w-100">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Class Image</th>
                            <th>Instructor name</th>
                            <th>Instructor email</th>
                            <th>available seats</th>
                            <th>price</th>
                            <th>Status</th>
                            <th>Update Status</th>
                            <th>Disabled</th>
                            <th>Added</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes?.map((classData, index) => (
                                <tr key={classData?._id}>
                                    <td>{index + 1}</td>
                                    <td>{classData?.name}</td>
                                    <td>
                                        <img className='rounded-circle' style={{ width: '45px', height: '45px' }} src={classData?.photo} alt="" />
                                    </td>
                                    <td>{classData.instructor}</td>
                                    <td>
                                        <div className='d-flex align-classData-center'>
                                            <div className='ms-3'>
                                                <p className='fw-bold mb-1'>{classData?.instructoremail}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {classData?.availableSeats - classData?.students}
                                    </td>
                                    <td>{classData?.price}</td>
                                    <td>{classData?.status}</td>
                                    <td className="text-center">              
                                        <Button disabled={ classData.status === 'approved' || classData.status === 'denied'} onClick={() => handleApproved(classData)} className="btn btn-warning" size='sm'>
                                            <FaCheck></FaCheck>
                                        </Button>
                                    </td>
                                    <td className="text-center">              
                                        <Button disabled={ classData.status === 'approved' || classData.status === 'denied'} onClick={() => handleDenied(classData)} className="btn btn-success" size='sm'>
                                            <FaBan></FaBan>
                                        </Button>
                                    </td>
                                    <td className="text-center">              
                                        <Button onClick={() => handleFeedback(classData)} className="btn btn-info" size='sm'>
                                            <FaCheck></FaCheck>
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

export default AllClasses;