import React, { useParams } from "react";

const ErrorPage = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div className="text-5xl flex justify-center items-center">
      No Posts Found
    </div>
  );
};

export default ErrorPage;
