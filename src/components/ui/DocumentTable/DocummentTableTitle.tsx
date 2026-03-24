import { documentTableList } from "../../../data/documentTableList";

const DocummentTableTitle = () => {
  return (
    <div className="bg-top-surface text-text-primary flex gap-6 py-4 pl-8 rounded-t-2xl border border-strong-border  ">
      {documentTableList.tableTitle.map((value, index) => (
        <span key={index} className={`nth-1:pr-109 nth-2:pr-24 nth-3:pr-14 nth-4:pr-15 nth-5:pr-40`}>
          {value}
        </span>
      ))}
    </div>
  );
};

export default DocummentTableTitle;
