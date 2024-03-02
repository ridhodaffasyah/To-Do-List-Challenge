const ModalDelete = ({ setIsOpen, title, onDelete }: any) => {
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  const handleDelete = () => {
    onDelete();
    handleClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={handleBackgroundClick}
      data-cy="modal-delete"
    >
      <div className="bg-white p-10 rounded-xl w-[490px] flex items-center flex-col gap-5">
        <img
          src="/assets/modal-delete-icon.png"
          alt="delete-icon"
          className="w-[84px]"
          data-cy="modal-delete-icon"
        />
        <h1
          className="text-center text-[18px] mb-5"
          data-cy="modal-delete-title"
        >
          Apakah anda yakin menghapus activity <b>"{title}"?</b>
        </h1>
        <div className="flex w-full justify-evenly">
          <button
            onClick={handleClose}
            className="bg-slate-100 text-black px-4 py-2 rounded-full w-[40%] hover:bg-slate-200"
            data-cy="modal-delete-cancel-button"
          >
            Batal
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-full w-[40%] hover:bg-red-600"
            data-cy="modal-delete-confirm-button"
            onClick={handleDelete}
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
