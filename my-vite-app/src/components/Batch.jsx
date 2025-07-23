import Coordinator from './Coordinator';

export const Batch = () => {
  const Students = ["Subham Sovendu Das", "I JAY PRAKASH", "Himanshu pradhan"];

  return (
    <>
      <h1>How Many Students are there in my Batch?</h1>
      <Coordinator studentList={Students} />
    </>
  );
};
