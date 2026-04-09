import IncommingRequestCard from "../../../ui/Cards/IncommingRequestCard";

const IncommingRequest = () => {
  return (
    <div className="flex flex-col gap-9">
      <IncommingRequestCard
        filename={"Client_Contract_2025July.pdf"}
        fileIconPath={"/icons/pdfFileIcon.svg"}
        owner={"Juna Rai"}
        message={
          "Need to review total number of clients for the upcoming quarterly audit."
        }
      />
      <IncommingRequestCard
        filename={"Client_Contract_2025July.pdf"}
        fileIconPath={"/icons/pdfFileIcon.svg"}
        owner={"Juna Rai"}
        message={
          "Need to review total number of clients for the upcoming quarterly audit."
        }
      />
    </div>
  );
};

export default IncommingRequest;
