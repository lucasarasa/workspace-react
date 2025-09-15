function Button(props) {
  return (
    <button
      //   onClick={props.onClick} ou {...props} Espalha todas as props recebidas para o button, como onClick, className, etc. (Sem que precise declarar todas)
      {...props}
      className="bg-slate-400 p-2 rounded-md text-white"
    >
      {props.children}
    </button>
  );
}

export default Button;
