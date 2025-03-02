import { JSX } from "react";
import Button from "../Button";

type CardProps = {
  item: {
    content: JSX.Element;
    button: {
      label: string;
      icon: JSX.Element;
      className?: string;
      onClick?: () => void;
    };
  };
};
export default function SidebarCard(props: CardProps) {
  const { item } = props;
  return (
    <div className="border-full flex items-center justify-center p-6 rounded-3xl w-full flex-col gap-4">
      <div className="w-full">{item.content}</div>
      <Button
        onClick={item.button.onClick}
        label={item.button.label}
        icon={item.button.icon}
        className={item.button.className}
      />
    </div>
  );
}
