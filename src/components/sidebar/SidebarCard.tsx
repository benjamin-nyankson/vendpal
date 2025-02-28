import { JSX } from "react";
import Button from "../Button";

type CardProps = {
  item: {
    content: JSX.Element;
    button: {
      label: string;
      icon: JSX.Element;
    };
  };
};
export default function SidebarCard(props: CardProps) {
  const { item } = props;
  return (
    <div className="border border-[#C0C9C0] flex items-center justify-center p-6 rounded-3xl w-fit flex-col gap-4">
      <div className="w-full">{item.content}</div>
      <Button label={item.button.label} icon={item.button.icon} />
    </div>
  );
}
