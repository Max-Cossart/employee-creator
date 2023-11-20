import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeInfo from "./pages/EmployeeInfo/EmployeeInfo";
import EmployeeList from "./pages/EmployeesList/EmployeesList";

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
