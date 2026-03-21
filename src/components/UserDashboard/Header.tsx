const Header = () => {
  return (
    <header className="flex justify-between bg-overlay-surface px-10 py-3">
      <img src="/icons/Logo.svg" alt="" />
      <div className="flex">
        <img
          src="/icons/searchIcon.svg"
          alt="This is a search icon."
          className="w-3.5 relative left-8.75"
        />
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search documents, users"
          className="w-2xl border border-strong-border rounded-2xl px-11.5 py-1.5 text-text-secondary font-dmsans text-[16px] placeholder:text-text-secondary"
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
          className="w-7 h-7"
        />
      </div>
    </header>
  );
};

export default Header;
