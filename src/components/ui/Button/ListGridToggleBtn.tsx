const ListGridToggleBtn = () => {

  return (
    <div className="bg-top-surface flex gap-3.25 p-px rounded-sm">
      <button className="p-1.5 rounded-sm" >
        <img src="/icons/listIcon.svg" alt="" className="w-4" />
      </button>
      <button className="p-1.5 rounded-sm ">
        <img src="/icons/gridIcon.png" alt="" className="w-4" />
      </button>
    </div>
  );
};

export default ListGridToggleBtn;
