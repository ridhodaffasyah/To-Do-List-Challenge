import CardProps from "../../../utils/interface";

const Card = ({ title, date, idx }: CardProps) => {
  return (
      <div data-cy={`activity-item-${idx}`} className="bg-white hover:bg-slate-100 hover:cursor-pointer w-[23.88%] shadow-md drop-shadow flex flex-col justify-between p-5 rounded-xl gap-20">
      <h1 className="font-bold text-[18px]" data-cy="activity-item-title">
        {title}
      </h1>
      <div className="flex justify-between items-center">
        <span data-cy="activity-item-date">{date}</span>
        <button>
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
