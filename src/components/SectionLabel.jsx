function SectionLabel({ children, className = '' }) {
  return (
    <p className={`section-label ${className}`.trim()}>
      <span />
      {children}
    </p>
  );
}

export default SectionLabel;
