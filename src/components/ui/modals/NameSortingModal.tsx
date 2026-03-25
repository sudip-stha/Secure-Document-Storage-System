import NameSortingItem from "../NameSortingItem";

const NameSortingModal = () => {
  return (
    <div className="backdrop-blur-xl bg-white/10 text-text-secondary px-2 py-3 border border-text-primary rounded-lg">
      <ul className="cursor-pointer">
        <NameSortingItem sortingValue="Name (A to Z)" />
        <NameSortingItem sortingValue="Name (Z to A)" />
        <NameSortingItem sortingValue="Modified (Newest)" />
        <NameSortingItem sortingValue="Modified (Oldest)" />
        <NameSortingItem sortingValue="Size (Largest)" />
        <NameSortingItem sortingValue="Size (Smallest)" />
      </ul>
    </div>
  );
};

export default NameSortingModal;
