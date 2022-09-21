import React, { Component } from 'react';
import { AuthButton, RightAlignedLink } from 'components/Auth';
import { BoardContent, InputWithContent } from 'components/BoardContent';

class Board extends Component {
    render() {
        return (
            <BoardContent title="게시판">
                <InputWithContent label="제목" name="title" placeholder="제목"/>
                <InputWithContent label="내용" name="content" placeholder="내용" type="password"/>
                <AuthButton>로그인</AuthButton>
                <RightAlignedLink to="/auth/register">게시하기</RightAlignedLink>
            </BoardContent>
        );
    }
}

export default Board;