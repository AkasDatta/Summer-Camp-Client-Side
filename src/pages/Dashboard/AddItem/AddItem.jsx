import { Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_image_upload_token;
const token = localStorage.getItem("access-token")

const AddItem = () => {
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("image", data.image[0]);

      const imgResponse = await fetch(img_hosting_url, {
        method: "POST",
        body: formData,
      });
      const imgData = await imgResponse.json();

      if (imgData.success) {
        const imgURL = imgData.data.display_url;
        const { name, price, category, classdetails } = data;
        const classItem = {
          name,
          price: parseFloat(price),
          category,
          classdetails,
          image: imgURL,
        };

        const response = await fetch("http://localhost:5000/classes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `bearer ${token}`
          },
          body: JSON.stringify(classItem),
        });
        const responseData = await response.json();

        if (responseData.insertedId) {
          reset();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Item added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-5 pt-5">
      <h2>Add Items</h2>
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
        <Row className="mb-4">
          <Col>
            <Form.Group className="mb-3" controlId="form6Example1">
              <Form.Label>Category</Form.Label>
              <Form.Select
                aria-label="Default select example"
                {...register("category", { required: true })}
              >
                <option>Category</option>
                <option value="1">Guitar Class</option>
                <option value="2">Piano Class</option>
                <option value="3">Vocal Class</option>
                <option value="4">Drumming Class</option>
                <option value="5">Bass Guitar Class</option>
                <option value="6">Saxophone Class</option>
                <option value="7">Harmonium Class</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="form6Example2">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Price"
                {...register("price", { required: true })}
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-4" controlId="form6Example7">
          <Form.Label>Music Class Details</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Class Details"
            rows={4}
            {...register("classdetails", { required: true })}
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

export default AddItem;
