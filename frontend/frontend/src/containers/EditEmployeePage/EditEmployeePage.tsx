import { Link, useParams } from "react-router-dom";
import EmployeeForm from "../../components/EmployeeForm/EmployeeForm";
import styles from "./EditEmployeePage.module.scss";

const EditEmployeePage = () => {
  let { id } = useParams();

  const formParamsForPUT = {
    crudMethod: "PUT",
    fetchUrl: `employees/${id}`,
    defaultVals: true,
  };

  return (
    <>
      <div className={styles.EditEmployee_Header}>
        <Link to="/employees">{`< Back`}</Link>
        <h1>Employee details</h1>
      </div>
      <EmployeeForm formParams={formParamsForPUT} />
    </>
  );
};

export default EditEmployeePage;