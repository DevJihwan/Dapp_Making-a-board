[smartcontract 개발 순서]
======================

    00. /contracts/ 폴더에서 스마트컨트랙트 내용 작성
    01. /migrations/ 에서 배포 준비 
    01. truffle compile
    02. (배포) truffle migrate --network ropsten


[개발Tips]
=========
    * 스마트컨트랙트 작성 후 소스코드 자체에 이상이 없는지 확인하기 위해 리믹스(툴)를 통해 먼저 배포해보고 소스 컴파일 할 것 


[Truble shooting Case]
======================
    * Case01
    * error msg : throw new error("could not find artifacts for " + import_path + " from any sources");
    * when : truffle compile -> truffle migrate --reset 
    * 원인 : contract에서 작성한 contract이름과 배포된 .json 파일의 이름이 달라서 발생하는 문제
    * 해결 : contract에서 작성한 contract의 이름과 migration 파일에서 작성한 변수명을 일치시켜준다. .json 으로 생성된 파일명 일치여부 확인  

    * Case02
    * error msg : MetaMask - RPC Error: execution reverted {code: -32603, message: 'execution reverted',
    * when : transferFrom() 함수 실행하여 송금할 때 
    * 원인 & 해결 : 송금 전 각 주소에 따른 approve 필요 
