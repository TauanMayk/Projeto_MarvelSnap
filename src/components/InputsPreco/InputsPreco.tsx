import "./inputspreco.css";

export const InputsPreco = ({
  busca,
  setBusca,
}: {
  busca: string;
  setBusca: (valor: string) => void;
}) => {
  return (
    <div className="preco-cartas flex flex-col w-1/3">
      <label className="block font-medium text-purple-700 mb-1">
        Nome da Carta
      </label>
      <input
        type="text"
        placeholder="coloque o nome aqui"
        id="nome-carta"
        className="w-60 p-4 border border-purple-800 rounded-md bg-white text-gray-800 outline-none"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
    </div>
  );
};
