interface Props {
  title: string;
  className?: string;
}

export const SectionTitle = ({ title, className = "" }: Props) => {
  return (
    <h3
      className={`text-orange-500 text-sm font-medium flex items-center gap-3 mb-1 ${className}`.trim()}
    >
      <div className='h-[1px] w-8 bg-orange-500'></div>
      {title}
    </h3>
  );
};
