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