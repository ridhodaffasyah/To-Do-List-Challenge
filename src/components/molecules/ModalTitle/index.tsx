const ModalTitle = ({
  id,
  title,
  setTitle,
  setIsModalOpen,
  handleEditTitle,
}: any) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-[50%] p-5 gap-4 flex flex-col rounded-xl">
        <h1 className="font-bold text-[24px]">Change Todo Title</h1>
        <input
          type="text"
          value={title}
          className="w-full p-3 border-2 border-gray-300 rounded-md"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="flex justify-evenly">
          <button
            className="bg-slate-100 text-black px-4 py-2 rounded-full w-[40%] hover:bg-slate-200"
            onClick={() => setIsModalOpen(false)}
          >
            Batal
          </button>
          <button
            className="bg-[#16ABF8] text-white px-4 py-2 rounded-full w-[40%] hover:bg-blue-500"
            onClick={() => handleEditTitle(id, title)}
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalTitle;
