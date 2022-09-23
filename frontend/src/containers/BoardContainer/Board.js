import React, { Component } from 'react';
import { AuthButton, RightAlignedLink } from 'components/Auth';
import { BoardContent, InputWithContent } from 'components/BoardContent';
import axios from "axios";

class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
          title: null,
          content: null,
          userId: null,
          tag: null
        };
    }

    handleChange = (e) => {
        console.log("##########START handleChange########");
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    //게시물 제목과 내용을 저장 
    submitBoard = async() => {
        console.log("##########START submitBoard########");

        let _title = this.state.title;
        let _content = this.state.content;
        let _userId = this.state.userId;
        let _tag = this.state.tag;

        const submitResults = await axios.post(
        //API URL
        '/board/register',
        //Parameter Data
        {
            article:_title,
            title:_content,
            userId:_userId,
            tag:_tag
        }
        ).then((response) => {
            console.log("########## submitBoard DB insert Complete ########"+response);
        })

        // this.initApprove();
        console.log("##########END submitBoard########"+submitResults);
    }


    render() {
        return (
            <BoardContent title="게시판">
                <InputWithContent onChange={this.handleChange} value={this.state.title} label="제목" name="title" placeholder="제목"/>
                <InputWithContent onChange={this.handleChange} value={this.state.content} label="내용" name="content" placeholder="내용" type="password"/>
                <InputWithContent onChange={this.handleChange} value={this.state.tag} label="태그" name="tag" placeholder="태그" type="password"/>
                <AuthButton onClick={() => this.submitBoard()}>게시하기</AuthButton>
                <RightAlignedLink to="/auth/register">목록보기</RightAlignedLink>
            </BoardContent>
        );
    }
}

export default Board;