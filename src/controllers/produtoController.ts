import { Request, Response } from 'express';
import { createProduto, getProdutos, getProdutoById, updateProduto, deleteProduto } from '../services/produtoService';

export const createProdutoController = async (req: Request, res: Response) => {
  try {
    const { nome, descricao, preco } = req.body;
    const produto = await createProduto(nome, descricao, preco);
    res.status(201).json(produto);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar produto' });
  }
};

export const getProdutosController = async (req: Request, res: Response) => {
  try {
    const produtos = await getProdutos();
    res.status(200).json(produtos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar produtos' });
  }
};

export const getProdutoByIdController = async (req: Request, res: Response) => {
  try {
    const produto = await getProdutoById(Number(req.params.id));
    if (produto) {
      res.status(200).json(produto);
    } else {
      res.status(404).json({ error: 'Produto não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter produto' });
  }
};

export const updateProdutoController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nome, descricao, preco } = req.body;
    const produtoAtualizado = await updateProduto(Number(id), nome, descricao, preco);
    if (produtoAtualizado) {
      res.status(200).json(produtoAtualizado);
    } else {
      res.status(404).json({ error: 'Produto não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar produto' });
  }
};

export const deleteProdutoController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const produtoDeletado = await deleteProduto(Number(id));
    if (produtoDeletado) {
      res.status(200).json({ message: 'Produto deletado com sucesso' });
    } else {
      res.status(404).json({ error: 'Produto não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar produto' });
  }
}