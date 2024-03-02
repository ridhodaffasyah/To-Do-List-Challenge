import CardProps from "../../../utils/interface";
import { Link } from "react-router-dom";

const Card = ({ id, title, date, onModal }: CardProps) => {
  return (
    <div
      data-cy="activity-item"
      className="bg-white hover:bg-slate-100 hover:cursor-pointer w-full flex justify-between sm:w-[49.2%] lg:w-[23.88%] shadow-md drop-shadow rounded-xl"
    >
      <Link
        to={`/detail/${id}`}
        className="flex flex-col justify-between p-5 gap-20"
      >
        <h1 className="font-bold text-[18px]" data-cy="activity-item-title">
          {title}
        </h1>
        <div className="flex justify-between items-center">
          <span data-cy="activity-item-date">{date}</span>
        </div>
      </Link>

      <div className="flex justify-end w-[12%] items-end pb-6 mr-3">
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
