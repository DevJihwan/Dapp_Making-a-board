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
    * npm install @reduxjs/toolkit
    * npm install styled-components open-color
    * npm install lottie-web (animation 관련)
    * npm install @material-ui/core (facebook 화면 관련)
        -> react version 18일 경우 버전 문제로 충돌이 발생할 수 있음
        -> npm i @material-ui/core --legacy-peer-deps
        -> npm i @material-ui/icons --legacy-peer-deps
    * npm install --legacy-peer-deps --save firebase@^7.24.0 (firbase 설치)

[micro interaction 넣는 방법]
===========================
    * https://lottiefiles.com/ 에서 json 형태로 원하는 animation 다운로드
    * /lib/animation 폴더에 해당 json 파일 저장 
    * /components/에서 가져온 애니메이션을 호출하는 컴포넌트 작성 
    * 작성된 컴포넌트를 컨테이너에 담으면 끝.
    * 색상 참조 : https://yeun.github.io/open-color/     

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
