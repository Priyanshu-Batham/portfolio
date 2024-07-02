export const addProject = async (formDataObject) => {
  const apiUrl = "/api/project";
  try {
    // Send data to the API
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Tell the API we're sending JSON data
      },
      body: JSON.stringify(formDataObject), // Convert form data to JSON string
    });

    // Assuming the API returns JSON data
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const getProjects = async () => {
  const apiUrl = "/api/project";
  try {
    // Send data to the API
    const response = await fetch(apiUrl, {
      method: "GET",
    });

    // Assuming the API returns JSON data
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const deleteProject = async (slug) => {
  const apiUrl = "/api/project";
  try {
    // Send data to the API
    const response = await fetch(apiUrl, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json", // Tell the API we're sending JSON data
      },
      body: JSON.stringify({slug: slug}), // Convert form data to JSON string
    });

    // Assuming the API returns JSON data
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.log("Error: ", error);
  }
};
