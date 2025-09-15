function Input(props) {
  return (
    <input
      className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      {...props} // Espalha todas as props recebidas para o input, como type, placeholder, value, onChange, etc. (Sem que precise declarar todas)
    />
  );
}

export default Input;
