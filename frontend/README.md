[개발순서]
=======
    * web3.js를 이용하여 사용자의 메타마스트 주소를 state에 저장한다. 
    * 저장된 주소를 API 호출을 통하여 DB에 저장한다. 
    * DB에 저장이 완료되면, 송금을 위한 한도 부여를 한다. (approve())
    * 한도부여가 완료되면 마스터 지갑에서 사용자의 지갑으로 송금을 한다. 

[추가한 npm 모듈]
==============
    * npm install react-router-dom
    * npm install react-redux redux redux-actions immutable styled-components open-color

[src폴더 구성]
============
    * conmponents : 프리젠테이셔널 컴포넌트
    * containers : 컨테이너 컴포넌트
    * lib : 프로젝트에서 필요한 함수들 
    * pages : 라우트 관련 컴포넌트
    * redux : 리덕스 관련 코드 

[web3]
======
    * Web3.js 를 통해 이더리움RPC 통신을 지원함
    * npm install web3


[React Server 통신]
==================

    * axios

        * REST API 구현을 하기 위해 axios를 사용함 
        * npm install axios

        * CORS 에러가 발생할 경우 해결 방법 
            00. cors middleware 사용
                -> npm install --save cors
                -> Access-Control-Allow-Origin response Header 추가
            01. client proxy 사용
                -> http-proxy-middleware 패키지를 사용
                -> package.json 파일에 "proxy": "http://localhost:8080" 추가
    *[참고] : https://velog.io/@yeogenius/React-%EC%84%9C%EB%B2%84%EC%99%80-%ED%86%B5%EC%8B%A0%ED%95%B4%EB%B3%B4%EC%9E%90-feat.axios
           : https://ji-gwang.tistory.com/76

[truffle/contract 구성을 위한 설치 패키지]
====================================
    * npm install @truffle/contract

[Trouble shooting(web3.js)]
===========================

    * Case 01
    * error msg : metamask rpc error code:4200 
    * 원인 : web3.js를 이용하여 approve 권한을 부여할 때, from 주소를 하드코딩으로 넣으면 이렇게 에러가 발생함. 
    * 해결 : from 지갑의 주소를 하드코딩으로 넣지 않고, window.ethereum.selectedAddress 으로 변경해줌. (사전에 메타마스크에서 연결 활성화 켜야함)
