export default function ActionButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="size-5 
    sm:w-size-5 
    md:size-10 
    lg:size-16
    bg-[#F3F4EF] 
    rounded-full 
    flex 
    items-center 
    justify-center"
    >
      {children}
    </div>
  );
}
