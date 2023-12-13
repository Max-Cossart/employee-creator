import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeInfo from "./pages/EmployeeInfo/EmployeeInfo";
import EmployeeList from "./pages/EmployeesList/EmployeesList";

export interface Employee {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  type: string;
  startDate: Date;
  finishDate: Date;
  onGoing: string;
  basis: string;
  hoursPerWeek: string;
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/thing" element={<EmployeeInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
