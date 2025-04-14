// import React, { useState } from "react";


// // const ContactForm = () => {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     message: "",
// //   });

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await fetch("https://api.web3forms.com/submit", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //           'Authorization': '397bc239-943a-4b7f-867e-5ac2769e0b06'

// //         },
// //         body: JSON.stringify({key: 'value'}),
// //       });
     
   

// //       if (response.ok) {
// //         alert("Message sent successfully!");
// //         setFormData({ name: "", email: "", message: "" });
// //       } else {
// //         alert("Failed to send the message.");
// //       }
// //     } catch (error) {
// //       alert("An error occurred. Please try again later.");
// //     }
// //   };


// //   return (
// //     <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 mt-30">
// //       <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
// //       <form onSubmit={handleSubmit} className="space-y-4">
// //         <div>
// //           <label htmlFor="name" className="block text-sm font-medium">Full Name</label>
// //           <input
// //             type="text"
// //             id="name"
// //             name="name"
// //             value={formData.name}
// //             onChange={handleChange}
// //             required
// //             className="w-full mt-1 p-2 border rounded-md"
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="email" className="block text-sm font-medium">Email Address</label>
// //           <input
// //             type="email"
// //             id="email"
// //             name="email"
// //             value={formData.email}
// //             onChange={handleChange}
// //             required
// //             className="w-full mt-1 p-2 border rounded-md"
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="message" className="block text-sm font-medium">Message</label>
// //           <textarea
// //             id="message"
// //             name="message"
// //             value={formData.message}
// //             onChange={handleChange}
// //             required
// //             rows="4"
// //             className="w-full mt-1 p-2 border rounded-md"
// //           ></textarea>
// //         </div>
// //         <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-orange-500">Send Message</button>
// //         {/* <input type="hidden" name="apikey" value="397bc239-943a-4b7f-867e-5ac2769e0b06"></input> */}
// //       </form>
// //     </div>
// //   );
// // };






// export default function ContactForm() {
//   const [result, setResult] = React.useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);

//     formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData
//     });

//     const data = await response.json();

//     if (data.success) {
//       setResult("Form Submitted Successfully");
//       event.target.reset();
//     } else {
//       console.log("Error", data);
//       setResult(data.message);
//     }
//   };

    
//       return (
//         <div>
//           <form onSubmit={onSubmit}>
//             <input type="text" name="name" required/>
//             <input type="email" name="email" required/>
//             <textarea name="message" required></textarea>
    
//             <button type="submit">Submit Form</button>
    
//           </form>
//           <span>{result}</span>
    
//         </div>
//       );
//     }
  

// // export default ContactForm;


import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send the message!");
      }
    } catch (error) {
      alert("Error occurred: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded mt-30">
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
