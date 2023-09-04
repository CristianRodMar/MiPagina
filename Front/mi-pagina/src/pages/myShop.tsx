import React, { useEffect, useState } from 'react'
import LoadingAnimation from '@/components/loadingAnimation'

type ItemType = {
    id: number;
    name: string;
    description: string;
    price: number;
}

export default function MyShop() {
    
    const [isLoading, setIsLoading] = useState(true)
    const [items, setItems] = useState<ItemType[]>([])

    useEffect (() => {
        fetch('https://api-test-6zio.onrender.com/shop/items')
        .then((response) => response.json())
        .then((data) => {
            setItems(data)
            setIsLoading(false)
        })
        .catch((error) => {
            console.error("Error al cargar los datos: ", error)
            setIsLoading(false)
        })
    }, [])

    return (
        <main>
            {isLoading ? (<LoadingAnimation />) : (
                <table className="min-w-fill bg-white">
                    <thead>
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
    )
}