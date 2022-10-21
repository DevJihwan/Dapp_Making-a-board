import React, { Component } from 'react';
import { BoardContent, BoardLikeColumn, BoardListComponent, BoardListColumn, BoardListRow } from 'components/BoardContent';
import axios from "axios";
import { CoPresent, Javascript } from '@mui/icons-material';

class BoardList extends Component {

    constructor(props) {
        super(props);
        this.state = {
          item:[]
        };
    }

    //Step01. 화면을 그릴때 로그인 페이지에서 보내준 사용자 id를 받아서 상태값에 저장 
    componentDidMount() {
        const getList = axios.get(
            //API URL
            '/boards',
            //Parameter Data
            ).then((response) => {
                console.log("########## getListComplete ########"+response);
                
                this.makeBoardList(response);

                })
        
        }

    makeBoardList(res) {

        let arrayLength = res.data._embedded.boards.length;
        let _no, _agree_cnt, _title, _content, _user_id;

        for (let i=0; i<arrayLength; i++){
            _no = i;
            _agree_cnt = res.data._embedded.boards[i].agree_cnt;
            _title = res.data._embedded.boards[i].title;
            _content = res.data._embedded.boards[i].article;
            _user_id = res.data._embedded.boards[i].writer_userid;    

        const _item  = (
            <BoardListRow key={_no}>
                <BoardListColumn>{_no}</BoardListColumn>
                <BoardListColumn>{_title}</BoardListColumn>
                <BoardListColumn>{_content}</BoardListColumn>
                <BoardListColumn>{_user_id}</BoardListColumn>
                <BoardLikeColumn> {_agree_cnt} </BoardLikeColumn>
            </BoardListRow>
        );

        this.setState({
            item:this.state.item.concat(_item)
        })
        }

    }

    render() {
        return (
            <BoardContent title="게시판목록">
                <BoardListComponent headersName={['No', '제목', '내용', '작성자', '공감수']}>
                    {this.state.item}
                </BoardListComponent>
            </BoardContent>
        );
    }
}

export default BoardList;