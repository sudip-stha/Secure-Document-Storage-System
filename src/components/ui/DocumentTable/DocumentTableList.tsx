import { documentTableList } from "../../../data/documentTableList";

const DocumentTableList = () => {
  return (
    <div className="mb-10">
      {documentTableList.tableData.map((value) => (
        <div
          key={value.id}
          className={`flex gap-6 text-text-secondary font-dmsans text-[14px] py-4 border-[1.5px] border-t-0 border-strong-border last:rounded-b-2xl`}
        >
          <span className="font-semibold">{value.name}</span>
          <span>{value.status}</span>
          <span>{value.type}</span>
          <span>{value.size}</span>
          <span>{value.modified}</span>
          <span>{value.owner}</span>
          <span>
            <img src={value.dotIcon} alt="" />
          </span>
        </div>
      ))}
    </div>
  );
};

export default DocumentTableList;
