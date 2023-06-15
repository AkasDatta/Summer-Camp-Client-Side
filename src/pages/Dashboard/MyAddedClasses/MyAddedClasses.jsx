import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useClasses from "../../../hooks/useClasses";
import { Button, Table } from "react-bootstrap";
import { GrUpdate } from "react-icons/gr";

const handleUpdate = () => {

}

const MyAddedClasses = () => {
    
    const { user } = useContext(AuthContext);
    const [classes] = useClasses();

    const MyClasses = classes.filter(classData => classData.instructorEmail === user?.email);

    return (
        <div className="w-full">
        <h2>Admin: Control and manage class offering</h2>
        <hr />
        <div className="table-container my-5" style={{ width: "100%" }}>
                <Table striped bordered hover className="w-100">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Class Image</th>
                            <th>price</th>
                            <th>Status</th>
                            <th>Total enrolled</th>
                            <th>Student Feedback</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            MyClasses?.map((classData, index) => (
                                <tr key={classData?._id}>
                                    <td>{index + 1}</td>
                                    <td>{classData?.name}</td>
                                    <td>
                                        <img className='rounded-circle' style={{ width: '45px', height: '45px' }} src={classData?.photo} alt="" />
                                    </td>
                                    <td>${classData?.price}</td>
                                    <td>${classData?.status}</td>
                                    <td>{classData?.students}</td>
                                    <td>{classData?.status === 'denied' ? <>{classData?.feedback}</> : <></>}</td>

                                    <td className="text-center">              
                                        <Button onClick={() => handleUpdate(classData)} className="btn btn-info" size='sm'>
                                            <GrUpdate></GrUpdate>
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

export default MyAddedClasses;