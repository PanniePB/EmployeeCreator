import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Employee from "../../components/Employee/Employee";
import { deleteEmployee, getEmployees } from "../../services/employees";
import styles from "./AllEmployeesPage.module.scss";

const AllEmployeesPage = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [reloadPage, setReloadPage] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    getEmployees("employees")
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, [reloadPage]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>There was an error loading the data</p>;

  const handleAddClick = () => {
    navigate("/employees/create");
  };

  const handleRemove = (id: any, firstName: string, lastName: string) => {
    const confirmationMsg = `Are you sure you want to remove ${firstName} ${lastName} from the employee register?`;
    if (confirm(confirmationMsg) == true) {
      deleteEmployee(id)
        .then(() => {
          setReloadPage(!reloadPage);
        })
        .catch((error) => {
          setError(error);
        });
    }
  };

  return (
    <>
      <div className={styles.AllEmployees_Header}>
        <h1>Employees Mangement System</h1>
      </div>
      <div className={styles.AllEmployees_Body}>
        <div className={styles.AllEmployees_Body_Subject}>
          <p>Please click on 'Edit' to find more details of each employee</p>
          <button onClick={handleAddClick}>Add employee</button>
        </div>
        <div className={styles.AllEmployees_Body_List}>
          {data.map((employee: any) => {
            return (
              <Employee
                key={employee.id}
                employeeDetails={employee}
                onDelete={handleRemove}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AllEmployeesPage;