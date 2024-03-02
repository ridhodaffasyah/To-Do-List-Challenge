import Layout from "./components/layout";
import { Card } from "./components/atom";
import { useEffect, useState } from "react";

const App = () => {
  const [list, setList] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);

  const fetchList = async () => {
    const fetchList = await fetch(
      `https://todo.api.devcode.gethired.id/activity-groups?email=yoga%2B1%40skyshi.io`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const jsonList = await fetchList.json();
    return jsonList.data;
  };

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const updatedList = await fetchList();
    setList(updatedList);
  };

  useEffect(() => {
    if (list.length !== 0) {
      setIsEmpty(false);
    }
  }, [list]);

  const formatDate = (date: string) => {
    const formattedDate = new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    return formattedDate;
  };

  const handleAddTodo = async () => {
    await fetch("https://todo.api.devcode.gethired.id/activity-groups", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "yoga+1@skyshi.io",
        title: "New Activity1",
        _comment:
          "email digunakan untuk membedakan list data yang digunakan antar aplikasi",
      }),
    });

    // After the POST request is successful, re-fetch the list data
    const updatedList = await fetchList();
    setList(updatedList);
  };

  return (
    <div>
      <Layout>
        <div className="flex justify-between items-center">
          <h1
            data-cy="activity-title"
            className="text-[20px] lg:text-[36px] font-bold text-black"
          >
            Activity
          </h1>
          <button
            data-cy="activity-add-button"
            className="flex w-[30%] md:w-[20%] xl:w-[12%] p-2 lg:p-3 rounded-full bg-[#16ABF8] text-white text-[10px] md:text-[14px] lg:text-base font-semibold gap-[6px] items-center justify-center hover:bg-blue-500"
            onClick={handleAddTodo}
          >
            <span>+</span>
            <span>Tambah</span>
          </button>
        </div>
        {isEmpty && (
          <div
            data-cy="acitivity-empty-state"
            className="w-full flex items-center justify-center py-9"
          >
            <img
              src="/assets/activity-empty-state.png"
              alt="activity-empty-state-img"
              className="w-[100%] sm:w-[60%]"
            />
          </div>
        )}
        <div className="flex flex-wrap gap-4 mt-6 items-center">
          {list?.map((item: any, index: number) => {
            return (
              <Card
                key={item.id}
                idx={index}
                title={item.title}
                date={formatDate(item.created_at)}
              />
            );
          })}
        </div>
      </Layout>
    </div>
  );
};

export default App;
