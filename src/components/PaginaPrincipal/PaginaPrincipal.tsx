import { CabecalhoPagina } from "../../components/CabecalhoPagina/CabecalhoPagina";
import { RodapePagina } from "../../components/RodapePagina/RodapePagina";
import { CartasSnap } from "../CartasSnap/CartasSnap";
import { useState, useEffect, type SetStateAction } from "react";
import "./paginaprincipal.css";

interface Carta {
  variant_id: number;
  variant_key: string;
  variant_label: string;
  Image: string;
  card_series: string;
}

interface Album {
  id: number;
  album_name: string;
  album_key: string;
  gold: number;
  cards_on_this_album: Carta[];
}

export const MainPage = () => {
  const [todosAlbuns, SetTodosAlbuns] = useState<Album[]>([]);
  const [albumSelecionado, setAlbumSelecionado] = useState<string>("");
  const [cartas, setCartas] = useState<Carta[]>([]);

  useEffect(() => {
    const carregarTodosAlbuns = async () => {
      const albunsTemp: Album[] = [];

      for (let i = 1; i <= 9; i++) {
        try {
          const res = await fetch(`/data/albums-${i}.json`);
          const json = await res.json();
          albunsTemp.push(...json.data);
        } catch (error) {
          console.error(`Deu erros nos json ai paizão albums=${i}.json`, error);
        }
      }
      SetTodosAlbuns(albunsTemp);
    };
    carregarTodosAlbuns();
  }, []);

  useEffect(() => {
    if (!albumSelecionado) {
      setCartas([]);
      return;
    }

    const album = todosAlbuns.find((a) => a.album_key === albumSelecionado);
    if (album) {
      setCartas(album.cards_on_this_album);
    }
  }, [albumSelecionado, todosAlbuns]);

  return (
    <>
      <CabecalhoPagina />
      <main className="container mx-auto px-4 py-8 mb-auto">
        <h1 className="text-4xl font-display mb-10 text-white ">
          Album de Cartas do Marvel Snap
        </h1>
        <div className="flex flex-wrap gap-4 items-end mb-14 justify-space-between">
          <div className="categorias-cartas flex flex-col w-1/3">
            <label className="block font-medium text-purple-800 font-bold mb-1">
              Album Selecionado:
            </label>
            <select
              value={albumSelecionado}
              onChange={(e: { target: { value: SetStateAction<string> } }) =>
                setAlbumSelecionado(e.target.value)
              }
              className="bg-[#1e1e2f] w-70 p-4 border border-purple-800 rounded-md text-white outline-none cursor-pointer tracking-wide shadow-xl focus:border-pink-400"
            >
              <option value="" className="text-white focus:font-display">Selecione Um Album</option>
              {todosAlbuns.map((album) => (
                <option className="text-white tracking-wide focus:font-display" key={album.album_key} value={album.album_key}>
                  {album.album_name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-4">
          {cartas.map((carta) => (
            <CartasSnap key={carta.variant_id} carta={carta} />
          ))}
        </ul>
      </main>
      <RodapePagina />
    </>
  );
};
