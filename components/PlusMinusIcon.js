export default function PlusMinusIcon({ isOpen, className = "" }) {
  return (
    <div className={`inline-flex items-center justify-center w-5 h-5 rounded-full border border-gray-400 bg-white transition-all duration-200 ${className}`}>
      {isOpen ? (
        <span className="text-gray-600 text-sm font-medium leading-none">−</span>
      ) : (
        <span className="text-gray-600 text-sm font-medium leading-none">+</span>
      )}
    </div>
  );
}
