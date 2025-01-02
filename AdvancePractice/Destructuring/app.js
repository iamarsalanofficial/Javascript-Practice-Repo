// Destructuring ka matlab hai arrays aur objects ke andar ki values ko asaan tareeke se alag variables me nikalna.
const apiResponse = {
    status: "success",
    user: {
      id: 1,
      name: "Arsalan",
      contact: {
        email: "arsalan@example.com",
        phone: "1234567890",
      },
    },
  };
  
  // Nested Destructuring
  const {
    user: {
      name,
      contact: { email, phone },
    },
  } = apiResponse;
  
  console.log(`Name: ${name}`);       // Output: Arsalan
  console.log(`Email: ${email}`);     // Output: arsalan@example.com
  console.log(`Phone: ${phone}`);     // Output: 1234567890
  