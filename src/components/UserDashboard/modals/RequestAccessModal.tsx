import Heading1 from "../../ui/Heading1";

const RequestAccessModal = () => {
  return (
    <div className="bg-elevated-surface border border-default-border rounded-2xl p-8">
      <div>
        <Heading1 value="Request Access" />
      </div>
      <p className="text-text-secondary text-sm mb-5">
        Submit a request to access this document.
      </p>

      <textarea
        className="bg-white/5 border border-strong-border rounded-lg p-3 text-text-secondary text-sm"
        placeholder=""
      />
    </div>
  );
};

export default RequestAccessModal;
