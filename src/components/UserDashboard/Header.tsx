const Header = () => {
  return (
    <div className="flex justify-between bg-overlay-surface px-10 py-3">
      <h1 className="text-white font-poppins font-bold text-[24px]">
        SECURE<span className="text-[#4D82FF] ">VAULT</span>
      </h1>
      <div className="flex">
        <img
          src="/icons/searchIcon.svg"
          alt="This is a search icon."
          className="w-4 relative left-9 "
        />
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search documents, users"
          className="w-2xl border border-text-secondary rounded-4xl px-12 py-2.5 text-text-secondary font-dmsans text-[16px]"
        />
      </div>
      <div className="flex gap-5 items-center">
        <img
          src="/icons/notificationIcon.svg"
          alt="This is a notification icon."
          className="w-5"
        />
        <img
          src="/icons/profilePicture.png"
          alt="This is a profile picture."
          className="w-6.5 h-6.5"
        />
      </div>
    </div>
  );
};

export default Header;
