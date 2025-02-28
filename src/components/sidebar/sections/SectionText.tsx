type Props = {
  className?: string;
  icon: React.ReactNode;
  label: string;
  count?: number;
};
export default function SectionText(props: Props) {
  return (
    <div
      className={`flex items-center justify-between text-lg  text-[#252624]`}
    >
      <div className="flex items-center gap-3">
        {props.icon}
        <p className={`${props.className}`}>{props.label}</p>
      </div>
      {props.count}
    </div>
  );
}
