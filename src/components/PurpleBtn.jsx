function PurpleBtn({ type = "", text, link = "" }) {
  return (
    <button
      className="bg-btn-purple px-4 py-3 rounded-md hover:bg-purple-500"
      type={type}
      onClick={link}>
      <h2 className="text-white text-base font-semibold">{text}</h2>
    </button>
  );
}

export default PurpleBtn;
