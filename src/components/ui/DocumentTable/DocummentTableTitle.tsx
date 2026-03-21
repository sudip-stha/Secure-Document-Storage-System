import { documentTableList } from "../../../data/documentTableList";

const DocummentTableTitle = () => {
  return (
    <div className="bg-top-surface text-text-primary flex gap-16.75 py-4 pl-8 rounded-t-2xl border border-strong-border ">
      {documentTableList.tableTitle.map((value, index) => (
        <span key={index}>{value}</span>
      ))}
    </div>
  );
};

export default DocummentTableTitle;
