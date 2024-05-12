interface StatBarProps {
  stat: string;
  percentage: number;
}

const StatBar: React.FC<StatBarProps> = ({ stat, percentage }) => {
  return (
    <div className="flex items-center gap-2 mx-2 py-2">
      <div className="w-2/6"><p className="font-bold">{stat}</p></div>

        <div
          className="flex w-4/6 h-2 bg-gray-900 rounded-full dark:bg-neutral-700"
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="flex flex-col justify-center rounded-full  bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
            style={{ width: percentage }}
          ></div>
        </div>
      </div>

  );
};

export default StatBar;
