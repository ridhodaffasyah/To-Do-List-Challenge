import Layout from "./components/layout";

function App() {
  return (
    <div>
      <Layout>
        <div className="flex justify-between items-center">
          <h1 data-cy="activity-title" className="text-[20px] lg:text-[36px] font-bold text-black">
            Activity
          </h1>
          <button data-cy="activity-add-button" className="flex w-[30%] md:w-[20%] xl:w-[12%] p-2 lg:p-3 rounded-full bg-[#16ABF8] text-white text-[10px] md:text-[14px] lg:text-base font-semibold gap-[6px] items-center justify-center hover:bg-blue-500">
            <span>+</span>
            <span>Tambah</span>
          </button>
        </div>
        <div data-cy="acitivity-empty-state" className="w-full flex items-center justify-center py-9">
          <img src="/assets/activity-empty-state.png" alt="activity-empty-state-img" className="w-[100%] sm:w-[60%]" />
        </div>
      </Layout>
    </div>
  );
}

export default App;
