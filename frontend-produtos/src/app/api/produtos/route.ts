import { NextResponse } from 'next/server';

export async function GET() {
  const produtos = [
    { id: 1, nome: 'Maçã', preco: 150.00 },
    { id: 2, nome: 'Melancia', preco: 200.50 },
    { id: 3, nome: 'Banana', preco: 125.25 },
    { id: 4, nome: 'Super carro', preco: 25.50 },
  ];

  return NextResponse.json(produtos);
}