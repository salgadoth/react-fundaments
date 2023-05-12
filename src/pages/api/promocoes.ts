import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse){
    const demora = 6000
    const inicio = Date.now()
    while (Date.now() - inicio < demora){}

    res.status(200).json([
        { id: 1, nome: 'Caneta', preco: 7.59 },
        { id: 2, nome: 'Lápis', preco: 3.81 },
        { id: 3, nome: 'Caderno', preco: 18.3 },
    ])
}