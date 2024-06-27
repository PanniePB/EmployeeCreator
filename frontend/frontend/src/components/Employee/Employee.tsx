import { Link } from "react-router-dom";
import { getEmploymentYears } from "../../utilities/utilities";
import styles from "../Employee/Employee.module.scss";

export interface IEmployeeProps {
  employeeDetails: {
    id: number;
    firstName: string;
    lastName: string;
    empStatus: string;
    emailAddress: string;
    startDate: Date;
    endDate: Date;
    onGoing: boolean;
  };
  onDelete: any;
}

const Employee = ({ employeeDetails, onDelete }: IEmployeeProps) => {
  const emp = employeeDetails;

  const getEmployeementPeriod = () => {
    if (emp.onGoing) {
      return "On-going";
    }
    return getEmploymentYears(emp.startDate, emp.endDate) + " yrs";
  };

  return (
    <div className={styles.Employee}>
      <div className={styles.Employee_Details}>
        <h4>{`${emp.firstName} ${emp.lastName}`}</h4>
        <p>{`${emp.empStatus} - ${getEmployeementPeriod()}`}</p>
        <p>{`${emp.emailAddress}`}</p>
      </div>
      <div className={styles.Employee_Links}>
        <Link to={`/employees/${emp.id}`}>Edit</Link> |{" "}
        <a
          className={styles.Employee_Remove}
          onClick={() => {
            onDelete(emp.id, emp.firstName, emp.lastName);
          }}
        >
          Remove
        </a>
      </div>
    </div>
  );
};

export default Employee;