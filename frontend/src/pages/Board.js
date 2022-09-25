import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as baseActions from 'redux/modules/base';
import { BoardWrapper } from 'components/BoardContent';
import { Route } from 'react-router-dom';
import { Board, BoardList } from 'containers/BoardContainer';

class Auth extends Component {
    // 페이지에 진입 할 때 헤더를 비활성화
    componentWillMount() {
        this.props.BaseActions.setHeaderVisibility(false);
    }

    // 페이지에서 벗어 날 때 다시 활성화
    componentWillUnmount() {
        this.props.BaseActions.setHeaderVisibility(true);
    }

    render() {
        return (
            <BoardWrapper>
                <Route path="/board/register" component={Board}/>
                <Route path="/board/List" component={BoardList}/>
            </BoardWrapper>
        );
    }
}

export default connect(
    (state) => ({

    }),
    (dispatch) => ({
        BaseActions: bindActionCreators(baseActions, dispatch)
    })
)(Auth);
