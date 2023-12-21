import { useForm } from "react-hook-form";
import EmployeeDetailsForm from "../../components/EmployeeDetailsForm/EmployeeDetailsForm";
import Header from "../../components/Header/Header";
import { zodResolver } from "@hookform/resolvers/zod";
import { detailsSchema } from "../../services/schema";
import { useEffect, useState } from "react";

const NewEmployee = () => {
  const [newEmployee, setNewEmployee] = useState({});

  const formSubmit = (data: any) => {
    setNewEmployee(data);
  };

  useEffect(() => {
    console.log(newEmployee);
  }, [setNewEmployee]);

  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(detailsSchema),
    defaultValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      type: "",
      startDate: "",
      finishDate: "",
      onGoing: "",
      basis: "",
      hoursPerWeek: "",
    },
  });

  return (
    <div>
      <Header title="Add Employee" />
      <EmployeeDetailsForm
        formSubmit={formSubmit}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
      />
    </div>
  );
};

export default NewEmployee;
