import { CustomSelect } from "../../atom";

const ModalToDo = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-[50%] gap-4 flex flex-col rounded-xl">
        <div className="border-b-2 border-gray-200 p-4 flex w-full">
          <h1 className="font-semibold text-[18px]" data-cy="modal-add-title">
            Tambah List Item
          </h1>
        </div>
        <div className="pb-4 flex gap-2 flex-col">
          <div className="border-b-2 border-gray-200 flex gap-2 flex-col px-4 pb-4">
            <label
              className="text-[12px] font-semibold"
              data-cy="modal-add-name-title"
            >
              NAMA LIST ITEM
            </label>
            <input
              type="text"
              className="w-full p-3 border-2 border-gray-200 rounded-md"
              placeholder="Tambah nama list item"
              data-cy="modal-add-name-input"
            />
            <label
              className="text-[12px] font-semibold"
              data-cy="modal-add-priority-title"
            >
              PRIORITY
            </label>
            <CustomSelect/>
          </div>
          <div className="flex justify-end mt-6 px-4">
            <button
              className="bg-[#16ABF8] text-white px-4 py-2 rounded-full w-[15%] hover:bg-blue-500"
              data-cy="modal-add-save-button"
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalToDo;
