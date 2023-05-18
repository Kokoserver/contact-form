export const submitFormData = async (values) => {
  // Set the request options
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  };
  // Send the request
  const response = await fetch(
    "https://my-json-server.typicode.com/tundeojediran/contacts-api-server/inquiries",
    requestOptions
  );
  console.log(response, "lolo");
  // Check the response status
  if (!response.ok) {
    // If not ok, throw an error with the status text
    throw new Error(`This is a HTTP Error: The status is ${response.status}`);
  }
  // Return the response data
  return await response.json();
};
