import { Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";

const AddClass = () => {
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_token = import.meta.env.VITE_image_upload_token;
  const token = localStorage.getItem("access-token");
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const { user } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const imgURL = imgData.data.display_url;
          const {
            name,
            price,
            instructor,
            instructorEmail,
            availableSeats,
          } = data;
          const classItem = {
            name,
            instructor,
            price: parseFloat(price),
            instructorEmail,
            availableSeats: parseFloat(availableSeats),
            image: imgURL,
            status: "pending",
          };

          fetch("https://summer-camp-server-pi.vercel.app/classes", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              authorization: `bearer ${token}`,
            },
            body: JSON.stringify(classItem),
          })
            .then((res) => res.json())
            .then((responseData) => {
              if (responseData.insertedId) {
                reset();
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Class added successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
        }
      });
  };

//   fetch('https://summer-camp-server-pi.vercel.app/classes')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data, "HHHHHHHHHHHHHHHHHHHHHHHHHHHHHH");
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });

  return (
    <div className="container mt-5 pt-5">
      <h2>Add a Class</h2>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-4" controlId="form6Example3">
          <Form.Label>Class name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Class name"
            {...register("name", { required: true, maxLength: 120 })}
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="form6Example7">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Price"
            {...register("price", { required: true })}
          />
        </Form.Group>

        <Row className="mb-4">
          <Col>
            <Form.Group className="mb-3" controlId="form6Example1">
              <Form.Label>Instructor Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Instructor Name"
                {...register("instructorName")}
                value={user.displayName}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="form6Example2">
              <Form.Label>Instructor Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Instructor Email"
                {...register("instructorEmail")}
                value={user.email}
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-4" controlId="form6Example7">
          <Form.Label>Available Seats</Form.Label>
          <Form.Control
            type="number"
            {...register("availableSeats", { required: true })}
            placeholder="Type available Seat"
          />
        </Form.Group>

        <Form.Group controlId="formFileMultiple" className="mb-4">
          <Form.Control
            type="file"
            multiple
            {...register("image", { required: true })}
          />
        </Form.Group>

        <input
          className="mb-4 px-4 py-2 btn btn-dark"
          type="submit"
          value="Add Item"
        />
      </Form>
    </div>
  );
};

export default AddClass;
