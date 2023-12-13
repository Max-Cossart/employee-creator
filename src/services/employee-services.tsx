export const getEmployees = async () => {
  const response = await fetch("http://localhost:8080/employees");
  const data = await response.json();
  return data;
};
