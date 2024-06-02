import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar 2 comentários na tela', () => {
        render(<PostComment/>);
        const botao = screen.getByTestId('btn-add-comentario')
        fireEvent.click(botao)
        fireEvent.click(botao)
    
        expect(screen.getAllByTestId('post-comment')).toHaveLength(2)
    })
});