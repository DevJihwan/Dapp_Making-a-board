import React, { Component } from 'react';
import { AuthButton, RightAlignedLink } from 'components/Auth';
import { BoardContent, BoxwithClick } from 'components/BoardContent';
import axios from "axios";

class BoardList extends Component {

    //Step01. 화면을 그릴때 로그인 페이지에서 보내준 사용자 id를 받아서 상태값에 저장 
    componentDidMount() {
        const getList = axios.get(
            //API URL
            '/boards',
            //Parameter Data
            ).then((response) => {
                console.log("########## getListComplete ########"+response);

                let arrayLength = response.data._embedded.boards.length;
                let _agree_cnt, _title, _content, _user_id;

                for (let i=0; i<arrayLength; i++){
                    _agree_cnt = response.data._embedded.boards[i].agree_cnt;
                    _title = response.data._embedded.boards[i].title;
                    _content = response.data._embedded.boards[i].article;
                    _user_id = response.data._embedded.boards[i].writer_userid;
                }

                

            })
        
        }


    render() {
        return (
            <BoardContent title="게시판목록">

            </BoardContent>
        );
    }
}

export default BoardList;