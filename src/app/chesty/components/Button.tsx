export const Button = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    style={{ padding: "10px", backgroundColor: "blue", color: "white" }}
  >
    {label}
  </button>
);
