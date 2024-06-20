import axios from "axios";
import { Employee as EmployeeType } from "./interfaces.ts";
// import {API_URL} from "./api-config.ts";
import { formatDate } from "../utilities/utilities.tsx";


const API_URL = "http://127.0.0.1:8080/employees";
export const getEmployees = async (API_URL:string): Promise<EmployeeType[]> => {
  try {
    const response = await axios.get(API_URL);

    if (response.status !== 200) {
      const errorMessage = `Failed to get employees. Status: ${response.status} ${response.statusText}`;
      console.log(errorMessage);
      throw new Error(errorMessage);
    }

    return response.data as EmployeeType[];
  } catch (error) {
   console.error("Error fetching employees:", error);
    throw error;
  }
};

export const addEmployee = async (employee: EmployeeType): Promise<EmployeeType> => {
  const mobileNumber = parseInt(employee.mobNumber, 10);
  const hoursPerWeek = parseInt(employee.hrsPerWeek, 10);

  const formattedStartDate = formatDate(employee.startDate);
  const formattedEndDate = employee.endDate ? formatDate(employee.endDate) : null;

  try {
    const response = await axios.post(
      API_URL,
      {
        id: employee.id,
        firstName: employee.firstName,
        middleName: employee.middleName,
        lastName: employee.lastName,
        empStatus: employee.empStatus,
        emailAddress: employee.emailAddress,
        mobNumber: mobileNumber,
        resAddress: employee.resAddress,
        startDate: formattedStartDate,
        endDate: formattedEndDate,
        hrsPerWeek: hoursPerWeek,
        workBasis: employee.workBasis,
        onGoing: employee.onGoing,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};



export const createUpdateEmployee = async (
  employee: EmployeeType,
  id: number
): Promise<EmployeeType> => {
  const formattedStartDate = formatDate(employee.startDate);
  const formattedEndDate = employee.endDate ? formatDate(employee.endDate) : null;

  try {
    const response = await axios.patch(`${API_URL}/${id}`, {
      id: employee.id,
      firstName: employee.firstName,
      middleName: employee.middleName,
      lastName: employee.lastName,
      empStatus: employee.empStatus,
      emailAddress: employee.emailAddress,
      resAddress: employee.resAddress,
      startDate: formattedStartDate,
      endDate: formattedEndDate,
      workBasis: employee.workBasis,
      onGoing: employee.onGoing,
      mobileNumber: parseInt(employee.mobNumber, 10),
      hoursPerWeek: parseInt(employee.hrsPerWeek, 10),
    });

    return response.data;
  } catch (error) {
    console.error("Error updating employee:", error);
    throw error;
  }
};


export const deleteEmployee = async (id: number) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      const errorMessage = `Failed to delete item. Status: ${response.status} ${response.statusText}`;
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};