interface TotalProps {
  count: number;
}

const Total: React.FC<TotalProps> = ({ count }) => {
  return (
    <>
      <div className="flex gap-2 mb-2 mx-2 py-2">
        <div className="w-2/6">
          <p className="font-bold">Total</p>
        </div>
        <div className="w-4/6">
          <p>{count}</p>
        </div>
      </div>
    </>
  );
};

export default Total;
