import React, { useState } from "react";
import { withRouter } from "react-router";
import { Button, Input } from "antd";
import { useForm } from "@formspree/react";
import { useEffect } from "react";

// class ContactForm extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//           name: "",
//           email: "",
//           phone: "",
//           message: "",
//         };
//       }
//       onChangeText = (value, type) => {
//         this.setState({ [type]: value });
//       };

//       onClear = () => {
//         this.setState({ name: "", email: "", phone: "",  message: "" });
//       };

//       // onContactUs = () => {
//       //   const { name, email, phone, message } = this.state;
//       //   if (name && email && message) {
//       //     apiClient
//       //       .post("contactus/createcontactus", {
//       //         name,
//       //         email,
//       //         phone,
//       //         message,
//       //       })
//       //       .then(({ data }) => {
//       //         if (data && data.result) {
//       //           notification.success({
//       //             message: "Message sent",
//       //             description: "Thank you! We will reach you shortly",
//       //           });
//       //           this.onClear();
//       //         } else {
//       //           notification.error({
//       //             message: "Something went wrong",
//       //             description: "Something went wrong",
//       //           });
//       //         }
//       //       });
//       //   } else {
//       //     notification.error({
//       //       message: "Fields missing",
//       //       description: "Name, email and message required",
//       //     });
//       //   }
//       // };
//     render() {
//         return (
//             <React.Fragment>
//                 <form>
//                     <div className="form-fields">
//                         <InputBox
//                             placeholder="Your Name"
//                             id="name"
//                             value={this.state.name}
//                             onChangeText={this.onChangeText}
//                             type="text"
//                         />
//                     </div>
//                     <div className="form-fields">
//                         <InputBox
//                             placeholder="Your email"
//                             id="email"
//                             value={this.state.email}
//                             onChangeText={this.onChangeText}
//                             type="text"
//                         />
//                     </div>
//                     <div className="form-fields">
//                         <InputBox
//                             placeholder="Phone Number"
//                             id="phone"
//                             value={this.state.phone}
//                             onChangeText={this.onChangeText}
//                             type="text"
//                         />
//                     </div>
//                     <div className="form-fields">
//                         <InputBox
//                             textArea={true}
//                             rows={4}
//                             placeholder="Message"
//                             value={this.state.message}
//                             id="message"
//                             onChangeText={this.onChangeText}
//                         />
//                     </div>
//                     <div className="form-fields mt-3">
//                         <Button
//                             className="w-100"
//                             type="primary"
//                         >
//                             Submit
//                         </Button>
//                     </div>
//                 </form>

//             </React.Fragment>
//         )
//     }
// }
// export default withRouter(ContactForm)
const { TextArea } = Input;
const ContactForm = () => {
  //     constructor() {
  //         super();
  //         this.state = {
  //           name: "",
  //           email: "",
  //           phone: "",
  //           message: "",
  //         };
  //       }
  const [state, handleSubmit] = useForm("xeqdwpwk");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (state.succeeded) {
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }
  }, [state]);
  return (
    <>
      <form onSubmit={handleSubmit}>
        {state.succeeded && (
          <p className="text-center gree">Form submitted successfully!</p>
        )}
        <div className="form-fields">
          <Input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
          />
        </div>
        <div className="form-fields">
          <Input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
          />
        </div>
        <div className="form-fields">
          <Input
            type="number"
            name="phone"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
          />
        </div>
        <div className="form-fields">
          <TextArea
            name="message"
            id="message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
          />
        </div>
        <div className="form-fields mt-3">
          <Button
            className="w-100"
            type="primary"
            htmlType="submit"
            disabled={state.submitting}
          >
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};
export default withRouter(ContactForm);
