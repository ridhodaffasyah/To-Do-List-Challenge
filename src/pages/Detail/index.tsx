import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import { useParams, useNavigate } from "react-router-dom";
import { ModalTitle } from "../../components/molecules";

const Detail = () => {
  const [detail, setDetail] = useState<any>({});
  const [title, setTitle] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const fecthDetail = async () => {
    const fetchDetail = await fetch(
      `https://todo.api.devcode.gethired.id/activity-groups/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const jsonDetail = await fetchDetail.json();
    return jsonDetail;
  };

  const getDetail = async () => {
    const updatedDetail = await fecthDetail();
    setDetail(updatedDetail);
  };

  useEffect(() => {
    getDetail();
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleEditTitle = async (id: number, newTitle: string) => {
    await fetch(`https://todo.api.devcode.gethired.id/activity-groups/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newTitle,
      }),
    });

    // After the PATCH request is successful, re-fetch the list data
    const updatedDetail = await fecthDetail();
    setDetail(updatedDetail); // Update the detail state with the fetched data
    setIsModalOpen(false);
  };

  return (
    <div>
      <Layout>
        <div className="flex w-full justify-between items-center">
          <div className="flex justify-between items-center gap-5">
            <img
              src="/assets/todo-back-button.png"
              alt="todo-back-icon"
              className="w-[32px] hover:cursor-pointer"
              data-cy="todo-back-button"
              onClick={() => navigate(-1)}
            />
            <div
              className="flex w-full items-center gap-4 hover:cursor-pointer"
              onClick={() => {
                handleOpenModal();
              }}
            >
              <h1
                data-cy="todo-title"
                className="font-bold text-[36px] text-black"
              >
                {detail?.title}
              </h1>
              <img
                src="/assets/todo-title-edit-button.png"
                alt="todo-title-edit-icon"
                className="w-[24px]"
                data-cy="todo-title-edit-button"
              />
            </div>
          </div>
          <button
            data-cy="todo-add-button"
            className="flex w-[30%] md:w-[20%] xl:w-[12%] p-2 lg:p-3 rounded-full bg-[#16ABF8] text-white text-[10px] md:text-[14px] lg:text-base font-semibold gap-[6px] items-center justify-center hover:bg-blue-500"
          >
            <span>+</span>
            <span>Tambah</span>
          </button>
        </div>
        {detail?.todo_items?.length === 0 && (
          <div
            data-cy="todo-empty-state"
            className="w-full flex items-center justify-center py-9"
          >
            <img
              src="/assets/todo-empty-state.png"
              alt="todo-empty-state-img"
              className="w-[100%] sm:w-[50%]"
            />
          </div>
        )}
      </Layout>
      {isModalOpen && (
        <ModalTitle
          id={id}
          title={title}
          setTitle={setTitle}
          setIsModalOpen={setIsModalOpen}
          handleEditTitle={handleEditTitle}
        />
      )}
    </div>
  );
};

export default Detail;
