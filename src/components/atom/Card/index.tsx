import CardProps from "../../../utils/interface";

const Card = ({ title, date, onModal }: CardProps) => {
  return (
      <div data-cy="activity-item" className="bg-white hover:bg-slate-100 hover:cursor-pointer w-full sm:w-[49.2%] lg:w-[23.88%] shadow-md drop-shadow flex flex-col justify-between p-5 rounded-xl gap-20">
      <h1 className="font-bold text-[18px]" data-cy="activity-item-title">
        {title}
      </h1>
      <div className="flex justify-between items-center">
        <span data-cy="activity-item-date">{date}</span>
        <button onClick={onModal}>
          <img
            src="/assets/tabler_trash.png"
            alt="delete"
            data-cy="activity-item-delete-button"
            className="w-[24px]"
          />
        </button>
      </div>
    </div>
  );
};

export default Card;
