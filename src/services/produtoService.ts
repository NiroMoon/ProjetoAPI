import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createProduto = async (nome: string, descricao: string, preco: number) => {
  return await prisma.produto.create({
    data: {
      nome,
      descricao,
      preco,
    },
  });
};

export const getProdutos = async () => {
  return await prisma.produto.findMany();
};

export const getProdutoById = async (id: number) => {
  return await prisma.produto.findUnique({
    where: { id },
  });
};

export const updateProduto = async (id: number, nome: string, descricao: string, preco: number) => {
  return await prisma.produto.update({
    where: { id },
    data: {
      nome,
      descricao,
      preco,
    },
  });
};

export const deleteProduto = async (id: number) => {
  return await prisma.produto.delete({
    where: { id },
  });
};