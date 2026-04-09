import { documentTableList } from "../../../../data/documentTableList";
import { useFilterAction } from "../../../../hooks/useFilterAction";
import getFileIcon from "../../../../utils/getFileIcon";
import ThreeDotModal from "../../modals/ThreeDotModal";
import { statusStyle } from "../../../../constants/statusStyle";
import { statusIcon } from "../../../../constants/statusIcon";
import { useButtonAction } from "../../../../hooks/useButtonAction";
import Button from "../../../ui/Button/Button";
import RequestAccessModal from "../../modals/requestAccessModal/RequestAccessModal";
import { useState } from "react";

const DocumentTableList = () => {
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const setOpenRowId = useFilterAction((state) => state.setOpenRowId);
  const openRowId = useFilterAction((state) => state.openRowId);
  const isRowHover = useButtonAction((state) => state.isRowHover);
  const setIsRowHover = useButtonAction((state) => state.setIsRowHover);
  const setIsModalOpen = useButtonAction((state) => state.setIsModalOpen);

  function handleDotClick(e: React.MouseEvent, id: number) {
    setOpenRowId(openRowId === id ? null : id);
  }

  const requestDocumentDetails = documentTableList.tableData.filter(
    (item) => item.id === isRowHover,
  );

  function handleCloseModal() {
    setOpenRowId(null);
    setIsRequestModalOpen(false);
    setIsModalOpen(false);
  }

  function handleRequestAccess() {
    setIsRequestModalOpen(true);
    setIsModalOpen(true);
  }

  return (
    <div className="mb-10">
      {/*close the three dot modal */}
      {openRowId !== null && (
        <div className="fixed inset-0 z-20" onClick={handleCloseModal} />
      )}
      {/*open request modal */}
      {isRequestModalOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center z-40"
          onClick={handleCloseModal}
        >
          <RequestAccessModal
            requestDocumentDetails={requestDocumentDetails}
            onClose={() => setIsRequestModalOpen(false)}
          />
        </div>
      )}

      {/* render table data */}
      {documentTableList.tableData.map((value) => (
        <div
          key={value.id}
          className={`flex gap-6 items-center text-text-secondary font-dmsans text-[14px] px-8 py-4 border-[1.5px] border-t-0 border-strong-border last:rounded-b-2xl hover:bg-top-surface`}
          onMouseEnter={() => setIsRowHover(value.id)}
          onMouseLeave={() => setIsRowHover(null)}
        >
          <span className="font-semibold flex gap-3 w-59.5">
            <img
              src={getFileIcon({ fileName: value.name })}
              alt=""
              className="h-4"
            />
            {value.name}
          </span>

          <div className="w-29.75">
            {isRowHover === value.id && (
              <span>
                <Button size={"sm"} onClick={handleRequestAccess}>
                  Request Access
                </Button>
              </span>
            )}
          </div>

          <div className="w-23.5 flex justify-end items-end">
            <span
              className={`flex gap-1 px-3 py-1 ${value.status === "" ? "" : "border"} rounded-xl text-[10px] ${statusStyle[value.status as keyof typeof statusStyle]}`}
            >
              <img
                src={statusIcon[value.status as keyof typeof statusIcon]}
                alt=""
              />
              {value.status}
            </span>
          </div>

          <span className="w-32">{value.type}</span>
          <span className="w-21">{value.size}</span>
          <span className="w-31">{value.modified} hrs ago</span>
          <span className="w-33">{value.owner}</span>
          {value.status === "Owned" && (
            <span
              className="cursor-pointer relative"
              onClick={(e) => handleDotClick(e, value.id)}
            >
              {openRowId === value.id && (
                <div className="absolute inset-0 z-20">
                  <div className="absolute -left-64.5 ">
                    <ThreeDotModal />
                  </div>
                </div>
              )}

              <img src="/icons/dotIcon.svg" alt="" />
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default DocumentTableList;
