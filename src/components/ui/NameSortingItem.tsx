const NameSortingItem = ({ sortingValue }) => {
  return (
    <li className="py-0.5 pl-4 pr-8 hover:bg-blue-500 hover:text-text-primary hover:rounded-sm">
      {sortingValue}
    </li>
  );
};

export default NameSortingItem;
