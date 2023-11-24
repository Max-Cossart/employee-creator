import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeInfo from "./pages/EmployeeInfo/EmployeeInfo";
import EmployeeList from "./pages/EmployeesList/EmployeesList";

export interface Employee {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  address: string;
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
