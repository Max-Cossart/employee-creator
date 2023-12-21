import { Employee } from "../App";

export const getEmployees = async () => {
  const response = await fetch("http://localhost:8080/employees");
  const data = await response.json();
  return data;
};

export const getEmployeeById = async (id: string): Promise<Employee> => {
  const response = await fetch(`http://localhost:8080/employees/${id}`);
  const data = await response.json();
  return data;
};

export const deleteEmployeeById = async (id: number): Promise<Boolean> => {
  const response = await fetch(`http://localhost:8080/employees/${id}`, {
    method: "DELETE",
  });
  console.log("response is ", response.ok);
  return response.ok;
};

export const addEmployee = async (data: Employee): Promise<Employee> => {
  const response = await fetch("http://localhost:8080/employees", {
    method: "POST",
    headers: {
      ContentType: "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
