import { v4 as uuidv4 } from "uuid";

function Employee() {
  return [
    {
      id: uuidv4(),
      name: "Richard Hendrics",
      designation: "CEO",
      empNo: "1",
      dp:
        "https://res.cloudinary.com/dquxvis2n/image/upload/v1614334937/richard_jcqtlm.jpg",
    },
    {
      id: uuidv4(),
      name: "Gilfoyle",
      designation: "CFO",
      empNo: "2",
      dp:
        "https://res.cloudinary.com/dquxvis2n/image/upload/v1614334939/gilfoyle_rtlwrc.jpg",
    },
    {
      id: uuidv4(),
      name: "Kumar",
      designation: "CFO",
      empNo: "3",
      dp:
        "https://res.cloudinary.com/dquxvis2n/image/upload/v1614334938/kumar_sckzxu.jpg",
    },
  ];
}

export default Employee;
