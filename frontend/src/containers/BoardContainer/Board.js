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
          writer_userid: null,
          tags: null
        };
    }

    //Step01. 화면을 그릴때 로그인 페이지에서 보내준 사용자 id를 받아서 상태값에 저장 
    componentDidMount() {
        const getParams = this.props.location.state.state;
        console.log("STEP0-0.#### getParams #### : "+getParams);
    
        this.setState({
            writer_userid: getParams
        });
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
        let _tag = this.state.tags;

        const submitResults = await axios.post(
        //API URL
        '/board/register',
        //Parameter Data
        {
            article:_title,
            title:_content,
            writer_userid:this.state.writer_userid,
            tags:_tag
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
                <InputWithContent onChange={this.handleChange} value={this.state.content} label="내용" name="content" placeholder="내용"/>
                <InputWithContent onChange={this.handleChange} value={this.state.tags} label="태그" name="tags" placeholder="태그"/>
                <AuthButton onClick={() => this.submitBoard()}>게시하기</AuthButton>
                <RightAlignedLink to="/board/List">목록보기</RightAlignedLink>
            </BoardContent>
        );
    }
}

export default Board;