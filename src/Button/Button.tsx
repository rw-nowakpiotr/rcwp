// import React from 'react';

// #95a5a6 concrete
// #e74c3c alizarin
// #f39c12 orange
// #2ecc71 emerald

// const colors = {
// export enum BGColors {
//   concrete = '#95a5a6',
//   alizarin = '#e74c3c',
//   orange = '#f39c12',
//   emerald = '#2ecc71'
// }
const colors = {
  concrete: '#95a5a6',
  alizarin: '#e74c3c',
  orange: '#f39c12',
  emerald: '#2ecc71'
}

// concrete -> colors['concrete']
type ButtonProps = {
  label: string;
  // bgColor?: BGColors;
  bgColor: "concrete" | "alizarin" | "orange"
};

const defaultStyles = {
  color: '#000',
  margin: 12,
  paddingBottom: 10, // camelCase
  // backgroundColor: BGColors.alizarin,
  backgroundColor: colors.alizarin,
};

// function Button(props: ButtonProps) {
// function Button({ label }: ButtonProps) {
function Button(props: ButtonProps) {
  const { label, bgColor } = props;
  const styles = { ...defaultStyles, backgroundColor: colors[bgColor] };
  return (
    <button style={styles}>
      {label}
    </button>
  );
}

// export default Button;
export { Button };
