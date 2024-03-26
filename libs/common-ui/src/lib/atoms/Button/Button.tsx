type Props = {
  label: string;
  bgColor:string;
  color:string;
};

export const Button = ({ label, bgColor, color }: Props) => {
  return <button className={`bg-${bgColor} text-${color} py-2 px-1`}>{label}</button>;
};
