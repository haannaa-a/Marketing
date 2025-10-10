const CheckMarkIcon = ({
  fill = '#15803d',
  stroke = '#15803d',
  width = '32',
  height = '32',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 13"
      fill="none"
      xmlns="http:www.w3.org/2000/svg"
    >
      <path
        d="M16.9004 2.39258L7 12.292L1.34375 6.63477L2.05078 5.92773L7.00098 10.8779L16.1934 1.68555L16.9004 2.39258Z"
        fill={fill}
        stroke={stroke}
      />
    </svg>
  );
};

export default CheckMarkIcon;
