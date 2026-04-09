import MyRequestCard from "../../../ui/Cards/MyRequestCard";

const MyRequest = () => {
  return (
    <div className="flex flex-col gap-9">
      <MyRequestCard
        filename={"Client_Contract_2025July.pdf"}
        fileIconPath={"/icons/pdfFileIcon.svg"}
        message={
          "Need to review total number of clients for the upcoming quarterly audit."
        }
        status={"Pending"}
      />
      <MyRequestCard
        filename={"Client_Contract_2025July.pdf"}
        fileIconPath={"/icons/pdfFileIcon.svg"}
        message={
          "Need to review total number of clients for the upcoming quarterly audit."
        }
        status={"Pending"}
      />
    </div>
  );
};

export default MyRequest;
