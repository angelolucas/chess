import { useChessStore } from '@/store/useChessStore';

const Notation = () => {
  const notation = useChessStore((state) => state.notation);

  return (
    <div className="border-l p-10 text-ui-text-primary h-full w-full">
      {notation.map((notation, index) => (
        <div key={index}>
          {index + 1}. {notation[0]}
          {notation[1] && ` ${notation[1]} `}
        </div>
      ))}
    </div>
  );
};

export default Notation;
