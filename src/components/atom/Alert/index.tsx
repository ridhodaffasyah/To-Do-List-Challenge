const Alert = () => {
    return (
        <div className="w-[30%] flex items-center bg-white shadow-md drop-shadow fixed top-3 right-3 p-3 rounded-2xl gap-3">
            <img src="/assets/modal-information-icon.png" alt="info-icon" className="w-[24px]" />
            <h1 className="font-bold text-black text-[14px]">Activity berhasil dihapus</h1>
        </div>
    );
};

export default Alert;