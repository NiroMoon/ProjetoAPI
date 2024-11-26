'use client'

import { useEffect, useState } from 'react';

interface Produto {
  id: number;
  nome: string;
  preco: number;
}

export default function Home() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchProdutos = async () => {
    try {
      const response = await fetch('/api/produtos');
      const data: Produto[] = await response.json();
      setProdutos(data);
    } catch (error) {
      console.error("Erro ao buscar os produtos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProdutos();
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ color: '#0070f3' }}>Lista de Produtos</h1>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {produtos.map((produto) => (
            <li
              key={produto.id}
              style={{
                marginBottom: '15px',
                border: '1px solid #ddd',
                padding: '10px',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              <h2>{produto.nome}</h2>
              <p>Preço: R${produto.preco.toFixed(2)}</p>
            </li>
          ))}
        </ul>
      
    </div>
  );
}