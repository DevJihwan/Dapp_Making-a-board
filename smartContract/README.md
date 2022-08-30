[smartcontract 개발 순서]
======================

    00. /contracts/ 폴더에서 스마트컨트랙트 내용 작성
    01. /migrations/ 에서 배포 준비 
    01. truffle compile
    02. (배포) truffle migrate --network ropsten


[Truble shooting Case]
======================
    * Case01
    * when : truffle compile -> truffle migrate --reset 
    * error msg : throw new error("could not find artifacts for " + import_path + " from any sources");
    * why : contract에서 작성한 contract이름과 배포된 .json 파일의 이름이 달라서 발생하는 문제
    * 해결 : contract에서 작성한 contract의 이름과 migration 파일에서 작성한 변수명을 일치시켜준다. .json 으로 생성된 파일명 일치여부 확인  