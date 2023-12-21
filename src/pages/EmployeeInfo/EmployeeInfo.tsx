import { useForm } from "react-hook-form";
import EmployeeDetailsForm from "../../components/EmployeeDetailsForm/EmployeeDetailsForm";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { detailsSchema } from "../../services/schema";

const EmployeeInfo = () => {
  let id: string = useParams().id!;

  const formSubmit = (data: any) => {
    console.log(data);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(detailsSchema),
    defaultValues: async () => {
      const response = await fetch(`http://localhost:8080/employees/${id}`);
      const data = await response.json();
      console.log(data.startDate.getDate());
      return {
        firstName: data.firstName,
        middleName: data.middleName,
        lastName: data.lastName,
        email: data.email,
        mobile: data.mobile,
        address: data.address,
        type: data.type,
        startDate: data.startDate.getDate(),
        finishDate: data.finishDate,
        onGoing: data.onGoing,
        basis: data.basis,
        hoursPerWeek: data.hours,
      };
    },
  });

  return (
    <>
      <Header title={"Employee Details"} />
      <EmployeeDetailsForm
        formSubmit={formSubmit}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
      />
    </>
  );
};

export default EmployeeInfo;
