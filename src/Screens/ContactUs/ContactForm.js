import React from 'react';
import { withRouter } from 'react-router';
import InputBox from '../../Components/InputBox/InputBox';
import { Button} from "antd";

class ContactForm extends React.Component {
    constructor() {
        super();
        this.state = {
          name: "",
          email: "",
          phone: "",
          message: "",
        };
      }
    
      onChangeText = (value, type) => {
        this.setState({ [type]: value });
      };
    
      onClear = () => {
        this.setState({ name: "", email: "", phone: "",  message: "" });
      };
    
      // onContactUs = () => {
      //   const { name, email, phone, message } = this.state;
      //   if (name && email && message) {
      //     apiClient
      //       .post("contactus/createcontactus", {
      //         name,
      //         email,
      //         phone,
      //         message,
      //       })
      //       .then(({ data }) => {
      //         if (data && data.result) {
      //           notification.success({
      //             message: "Message sent",
      //             description: "Thank you! We will reach you shortly",
      //           });
      //           this.onClear();
      //         } else {
      //           notification.error({
      //             message: "Something went wrong",
      //             description: "Something went wrong",
      //           });
      //         }
      //       });
      //   } else {
      //     notification.error({
      //       message: "Fields missing",
      //       description: "Name, email and message required",
      //     });
      //   }
      // };
    render() {
        return (
            <React.Fragment>
                <form>
                    <div className="form-fields">
                        <InputBox
                            placeholder="Your Name"
                            id="name"
                            value={this.state.name}
                            onChangeText={this.onChangeText}
                            type="text"
                        />
                    </div>
                    <div className="form-fields">
                        <InputBox
                            placeholder="Your email"
                            id="email"
                            value={this.state.email}
                            onChangeText={this.onChangeText}
                            type="text"
                        />
                    </div>
                    <div className="form-fields">
                        <InputBox
                            placeholder="Phone Number"
                            id="phone"
                            value={this.state.phone}
                            onChangeText={this.onChangeText}
                            type="text"
                        />
                    </div>
                    <div className="form-fields">
                        <InputBox
                            textArea={true}
                            rows={4}
                            placeholder="Message"
                            value={this.state.message}
                            id="message"
                            onChangeText={this.onChangeText}
                        />
                    </div>
                    <div className="form-fields mt-3">
                        <Button
                            className="w-100"
                            type="primary"
                        >
                            Submit
                        </Button>
                    </div>
                </form>

            </React.Fragment>
        )
    }
}
export default withRouter(ContactForm)