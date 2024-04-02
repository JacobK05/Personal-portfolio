import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function FormFloatingBasicExample() {
  return (
    <>
      <FloatingLabel
        controlId="floatingInput"
        label="Name"
        className="mb-3"
      >
        <Form.Control type="Name" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Email">
        <Form.Control type="Email" placeholder="Email" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingTextarea"
        className="mb-3"
      >
       
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
    <Button className="submitbtn" variant="dark"> Submit </Button>
      
       </>
    
  );
}

export default FormFloatingBasicExample;