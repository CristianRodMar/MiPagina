import React, { useEffect, useState } from "react";
import LoadingAnimation from "@/components/loadingAnimation";
import styles from "@/styles/myShop.module.css";

type ItemType = {
  id: number;
  name: string;
  description: string;
  price: number;
};

export default function MyShop() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState<ItemType[]>([]);

  useEffect(() => {
    //const localUrl = "http://localhost:8080/shop/items";
    fetch('https://api-test-6zio.onrender.com/shop/items')
    //fetch(localUrl)
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar los datos: ", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <main className="flex flex-col">
      <div className="title-container py-32 flex flex-col">
        <h1 className="select-none lg:text-8xl md:text-6xl text-4xl text-center text-white title">
          Integración Front-Back
        </h1>
      </div>
      {isLoading ? (
        <h2 className="text-white title">
          Es posible que tarde unos minutos en cargar si la máquina está apagada
        </h2>
      ) : (
        <></>
      )}
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <table
          className={
            "w-full table-auto rounded-lg overflow-hidden bg-white shadow-lg " +
            styles["shop-table"]
          }
        >
          <thead>
            <tr>
                <th className="bg-yellow-300" colSpan={3}>
                Esto es para comprobar que la applicación de Next.js conecta con
                la aplicacion de SpringBoot que se encuentran en máquinas
                diferentes, en un futuro añadiré más funcionalidades
                </th>
            </tr>
            <tr>
              <th className="py-2 px-3 bg-gray-200 text-left">Nombre</th>
              <th className="py-2 px-3 bg-gray-200 text-left">Descripción</th>
              <th className="py-2 px-3 bg-gray-200 text-left">Precio</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td className="py-2 px-3">{item.name}</td>
                <td className="py-2 px-3">{item.description}</td>
                <td className="py-2 px-3">${item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
