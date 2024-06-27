// Fetching all employees list.
export const getEmployees = (url: string) => {
  return fetch(`http://127.0.0.1:8080/${url}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    })
    .catch((error) => {
      console.error("Error:", error);
      throw error;
    });
};

export const deleteEmployee = (id: any) => {
  return fetch(`http://localhost:8080/employees/${id}`, {
    method: "DELETE",
  }).catch((error) => {
    console.error("Error:", error);
    throw error;
  });
};

export const createUpdateEmployee = (url: any, crudMethod: any, body: any) => {
  return fetch(`http://localhost:8080/${url}`, {
    method: crudMethod,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }).catch((error) => {
    console.error("Error:", error);
  });
};