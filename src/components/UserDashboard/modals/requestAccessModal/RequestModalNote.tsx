const RequestModalNote = () => {
  return (
    <div className="bg-authorisation-pending-bg max-w-110 px-3 py-2 border border-authorisation-pending-text font-dmsans text-[14px] rounded-lg">
      <p className="text-warm-gray-200">
        <span>Note:</span> If approved, you'll receive
        temporary 5-minute access. Downloading or printing will immediately
        revoke your access.
      </p>
    </div>
  );
};

export default RequestModalNote;
