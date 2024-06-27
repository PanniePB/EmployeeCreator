import { Link } from "react-router-dom";
import EmployeeForm from "../../components/EmployeeForm/EmployeeForm";
import styles from "./NewEmployeePage.module.scss";

const NewEmployeePage = () => {
  const formParamsForPOST = {
    crudMethod: "POST",
    fetchUrl: "employees",
  };

  return (
    <>
      <div className={styles.NewEmployee_Header}>
        <Link to="/employees">{`< Back`}</Link>
        <h1>Register New Employee</h1>
      </div>
      <EmployeeForm formParams={formParamsForPOST} />    //renders the EmployeeForm component and passes the formParamsForPOST object as a prop named formParams.
    </>
  );
};

export default NewEmployeePage;