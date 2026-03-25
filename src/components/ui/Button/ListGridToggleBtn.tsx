import { useButtonAction } from "../../../hooks/useButtonAction";

const ListGridToggleBtn = () => {
  const isListBtnActive = useButtonAction((state) => state.isListBtnActive);
  const setIsListBtnActive = useButtonAction(
    (state) => state.setIsListBtnActive,
  );

  return (
    <div className="bg-top-surface flex p-px rounded-sm">
      <button
        className={`p-1.5 rounded-sm ${isListBtnActive === "list" ? "bg-action-primary" : ""}`}
        onClick={() => setIsListBtnActive("list")}
      >
        <img src="/icons/listIcon.svg" alt="" className="w-4" />
      </button>
      <button
        className={`p-1.5 rounded-sm ${isListBtnActive === "grid" ? "bg-action-primary" : ""}`}
        onClick={() => setIsListBtnActive("grid")}
      >
        <img src="/icons/gridIcon.png" alt="" className="w-4" />
      </button>
    </div>
  );
};

export default ListGridToggleBtn;
