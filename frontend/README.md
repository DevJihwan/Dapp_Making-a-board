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
