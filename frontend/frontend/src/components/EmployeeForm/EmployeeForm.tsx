import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createUpdateEmployee, getEmployees } from "../../services/employees";
import styles from "./EmployeeForm.module.scss";

interface Params {
  formParams: {
    crudMethod: string;
    fetchUrl: string;
  };
}

type Inputs = {
  firstName: string;
  middleName: string;
  lastName: string;
  emailAddress: string;
  mobNumber: number;
  resAddress: string;
  empStatus: string;
  startDate: Date;
  endDate: Date | null;
  workBasis: string;
  hrsPerWeek: number;
  onGoing: boolean;
};

const EmployeeForm = ({ formParams }: Params) => {
  const navigate = useNavigate();

  const [data, setData] = useState<any>([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (employeeDetails: Inputs) => {
    createUpdateEmployee(
      formParams.fetchUrl,
      formParams.crudMethod,
      employeeDetails
    );
    alert(
      `${employeeDetails.firstName} ${
        employeeDetails.lastName
      }'s details have been ${
        formParams.crudMethod == "POST" ? "added to" : "updated in"
      } the employee register.`
    );
    navigate("/employees");
  };

  if (formParams.crudMethod == "PUT") {
    useEffect(() => {
      getEmployees(formParams.fetchUrl)
        .then((data) => setData(data))
        .catch((error) => setError(error))
        .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) return <p>"Loading..."</p>;
    if (error) return <p>"There was an error loading the data"</p>;
  }

  const isOnGoing = watch("onGoing");
  const empWorkBasis = watch("workBasis");

  if (isOnGoing) {
    setValue("endDate", null);
  }

  const handleCancel = () => {
    navigate("/employees");
  };

  return (
    <form className={styles.Form_Body} onSubmit={handleSubmit(onSubmit)}>
      <h2>Personal information</h2>
      <div className={styles.Form_Break}>
        <label className={styles.Form_Label} htmlFor="firstName">
          First Name
        </label>
        <input
          type="text"
          defaultValue={data.firstName || ""}
          {...register("firstName", { required: true })}
        />
        {errors.firstName && (
          <small className={styles.Form_Validation}>
            This field is required
          </small>
        )}
      </div>
      <div className={styles.Form_Break}>
        <label className={styles.Form_Label} htmlFor="middleName">
          Middle Name (if applicable)
        </label>
        <input
          type="text"
          defaultValue={data.middleName || ""}
          {...register("middleName")}
        />
      </div>
      <div className={styles.Form_Break}>
        <label className={styles.Form_Label} htmlFor="lastName">
          Last Name
        </label>
        <input
          type="text"
          defaultValue={data.lastName || ""}
          {...register("lastName", { required: true })}
        />
        {errors.lastName && (
          <small className={styles.Form_Validation}>
            This field is required
          </small>
        )}
      </div>
      <div className={styles.Form_Breaker}>
        <h2>Contact details</h2>
      </div>
      <div className={styles.Form_Break}>
        <label className={styles.Form_Label} htmlFor="emailAddress">
          Email address
        </label>
        <input
          defaultValue={data.emailAddress || ""}
          type="email"
          {...register("emailAddress", { required: true })}
        />
        {errors.emailAddress && (
          <small className={styles.Form_Validation}>
            This field is required
          </small>
        )}
      </div>
      <div className={styles.Form_Break}>
        <label className={styles.Form_Label} htmlFor="mobNumber">
          Mobile number
        </label>
        <small className={styles.Break}>Must be an Australian number</small>
        <input type="button" value="+61" />
        <input
          type="tel"
          defaultValue={data.mobNumber || ""}
          {...register("mobNumber", {
            required: true,
            maxLength: 9,
            pattern: /^4\d{8}$/,
          })}
        />
        {errors.mobNumber && (
          <small className={styles.Form_Validation}>
            Please enter a valid mobile number without 0 at the beginning
          </small>
        )}
      </div>
      <div className={styles.Form_Break}>
        <label className={styles.Form_Label} htmlFor="resAddress">
          Residential address
        </label>
        {/* <small>Start typing to search</small> */}
        <input
          id="form-address"
          type="text"
          defaultValue={data.resAddress || ""}
          {...register("resAddress", { required: true })}
        />
        {errors.resAddress && (
          <small className={styles.Form_Validation}>
            This field is required
          </small>
        )}
      </div>
      <div className={styles.Form_Breaker}>
        <h2>Employee status</h2>
      </div>
      <div className={styles.Form_Break}>
        <p className={styles.Form_Label}>What is contract type?</p>
        <input
          id="checkbox"
          defaultChecked={data.empStatus == "Permanent"}
          type="radio"
          {...register("empStatus", { required: true })}
          value="Permanent"
        />
        <label htmlFor="permanent">Permanent</label>
        <div className={styles.Break}>
          <input
            id="checkbox"
            defaultChecked={data.empStatus == "Contract"}
            type="radio"
            {...register("empStatus")}
            value="Contract"
          />
          <label htmlFor="contract">Contract</label>
        </div>
        {errors.empStatus && (
          <small className={styles.Form_Validation}>
            This option is required
          </small>
        )}
      </div>
      <div className={styles.Form_Break}>
        <label className={styles.Form_Label} htmlFor="startDate">
          Start Date
        </label>
        <input
          defaultValue={data.startDate || ""}
          type="date"
          {...register("startDate", { required: true })}
        />
        {errors.startDate && (
          <small className={styles.Form_Validation}>
            This date is required
          </small>
        )}
      </div>
      {!isOnGoing && (
        <>
          <div className={styles.Form_Break}>
            <label className={styles.Form_Label} htmlFor="endDate">
              Finish Date
            </label>
            <input
              defaultValue={data.endDate || ""}
              type="date"
              {...register("endDate", {
                required: !isOnGoing,
              })}
            />
            {errors.endDate && (
              <small className={styles.Form_Validation}>
                This date is required if not on-going
              </small>
            )}
            {/* CAN HAVE VALIDATION FOR FINISH DATE CANNOT BE LESS THAN STARTING DATE. */}
          </div>
        </>
      )}
      <div className={styles.Form_Break}>
        <input
          defaultChecked={data.onGoing}
          id="checkbox"
          type="checkbox"
          {...register("onGoing")}
        />
        <label htmlFor="onGoing">On-going</label>
      </div>
      <div className={styles.Form_Break}>
        <label htmlFor="workBasis"></label>
        <p className={styles.Form_Label}>
          Is this on a full-time or part-time basis?
        </p>
        <input
          defaultChecked={data.workBasis == "Full-time"}
          id="checkbox"
          type="radio"
          {...register("workBasis", { required: true })}
          value="Full-time"
        />
        <label htmlFor="fullTime">Full-time</label>
        <div className={styles.Break}>
          <input
            id="checkbox"
            defaultChecked={data.workBasis == "Part-time"}
            type="radio"
            {...register("workBasis")}
            value="Part-time"
          />
          <label htmlFor="partTime">Part-time</label>
        </div>
        {errors.workBasis && (
          <small className={styles.Form_Validation}>
            This option is required
          </small>
        )}
      </div>
      <div className={styles.Form_Break}>
        <label className={styles.Form_Label} htmlFor="hrsPerWeek">
          Hours per week
        </label>
        <input
          type="number"
          defaultValue={data.hrsPerWeek || ""}
          {...register("hrsPerWeek", {
            required: true,
            min: 1,
            max: empWorkBasis == "Part-time" ? 37 : 56,
          })}
        />
        {/* Max for full-time calculated using 8hrs * 7 days (for "reasonable" additional hours)*/}
        {errors.hrsPerWeek && (
          <small className={styles.Form_Validation}>
            {`Please enter valid hours between ${
              empWorkBasis == "Part-time"
                ? "1 and less than 38 hours (part-time"
                : "1 and 38 hours (full-time)"
            }`}
          </small>
        )}
      </div>
      <div className={styles.Form_Breaker}>
        <button type="submit">Save</button>{" "}
        <button className={styles.Form_SecButton} onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EmployeeForm;