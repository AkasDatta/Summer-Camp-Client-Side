import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { MdAddShoppingCart } from "react-icons/md";

const img_hosting_token=import.meta.env.VITE_image_upload_token;
const AddItem = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = data => {

        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
           if(imgResponse.success){
            const imgURL = imgResponse.data.display_url;
            const {name, price, category, classdetails} = data;
            const classItem = {name, price: parseFloat(price), category, classdetails, image: imgURL}
            console.log(classItem);
           }
        })
        console.log(data)
    };
    console.log(errors);

    return (      
        <div className="container mt-5 pt-5">
            <h2>Add Items </h2>
            <hr />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-4" controlId="form6Example3">
                    <Form.Label>Class name</Form.Label>
                    <Form.Control type="text" placeholder="Class name" {...register("name", {required: true, maxLength: 120})}/>
                </Form.Group>
                <Row className="mb-4">
                    <Col>
                    <Form.Group className="mb-3" controlId="form6Example1">
                        <Form.Label>Category</Form.Label>
                        <Form.Select aria-label="Default select example"  {...register("category", { required: true })} >
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
                        <Form.Control type="number" placeholder="Price" {...register("price", { required: true })}/>
                    </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="mb-4" controlId="form6Example7">
                    <Form.Label>Music Class Details</Form.Label>
                    <Form.Control as="textarea" placeholder="Class Details" rows={4}  {...register("classdetails", { required: true })} />
                </Form.Group>

                <Form.Group controlId="formFileMultiple" className="mb-4">
                <Form.Control type="file" multiple  {...register("image", { required: true })} />
                </Form.Group>

                <Button style={{backgroundColor: '#001529', borderColor: '#001529'}} variant="primary" type="submit" className=" mb-4">Place order <MdAddShoppingCart></MdAddShoppingCart></Button>
            </Form>
        </div>
    );
};

export default AddItem;