import { useButtonAction } from "../../../hooks/useButtonAction";

const ListGridBtn = () => {
  const isListBtnActive = useButtonAction((state) => state.isListBtnActive);
  const setIsListBtnActive = useButtonAction(
    (state) => state.setIsListBtnActive,
  );

  return (
    <div className="bg-top-surface flex p-px rounded-sm">
      <button
        className={`p-1.5 rounded-sm ${isListBtnActive === "list" ? "bg-warm-gray-300" : ""}`}
        onClick={() => setIsListBtnActive("list")}
      >
        <img src="/icons/listIcon.svg" alt="" />
      </button>
      <button
        className={`p-1.5 rounded-sm ${isListBtnActive === "grid" ? "bg-warm-gray-300" : ""}`}
        onClick={() => setIsListBtnActive("grid")}
      >
        <img src="/icons/gridIcon.svg" alt="" className="w-4" />
      </button>
    </div>
  );
};

export default ListGridBtn;
