const Coordinator = (props) => {
  console.log(props); // For debugging

  return (
    <>
      <h3>Student: {props.studentList[0]}</h3>
      <h3>Student: {props.studentList[1]}</h3>
      <h3>Student: {props.studentList[2]}</h3>
    </>
  );
};

export default Coordinator;
