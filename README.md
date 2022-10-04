[작업순서]
=======
    * 회원가입 및 토큰지급
        00. [BE]userRegister Service 작성 (Spring-boot maven)
        01. [DB]Docker Mysql image 
        02. [DB]DB 생성 및 Service 연결
        03. [FE]화면에서 사용자의 click - event에 따라 메타마스트 주소 연결
        04. [FE-BE-DB]axios를 통하여 BE연결 및 DB 저장
        05. [smartcontract] 스마트컨트랙트 작성 및 배포
        06. [FE]화면에서 스마트컨트랙트 불러오기 
    
    * 게시물등록 및 공감 
        00. [BE]Board Service 작성 (spring-boot maven)
        01. [BE]게시물등록(register), 게시물삭제(delete), 공감하기(agree) 서비스
        02. [FE]게시물등록 화면 작성 (BoardContent)
        03. [FE]게시물목록 보여주는 화면 

[Git Command]
============= 

    <h2># git push 명령어
        * git push -u origin main
        * push 할 때 충돌할 경우 : git pull --rebase 
    # git 명령어
        * git config --list
        * git config --global user.name
        * git config --global user.email
    
    * Git Commit Msg : Template를 활용한 Commit msg 기록 남기기
        01. 프로젝트 폴더에서 .git 이 위치한 곳에 템플릿을 작성
        02. .git을 확인하려면 숨겨진 폴더까지 조회하는 명령어가 필요 
            -> ls -la
        03. 템플릿 파일 생성 
            -> touch .gitmessage.txt
        04. 템플릿 작성 
        05. git config 적용
            -> git config commit.template .gitmessage.txt
        06. 템플릿을 사용하여 git push 날리기
            * git add "파일명"
                -> 파일이 위치한 곳에서 add 해야함. 
            * git commit 
                -> 터미널에서 템플릿이 보일것임. 
                -> i 누르고 내용 작성 후 :wq!
            * git push 
            * git repo에 반영 여부 확인 


[httpie install]
================
    * pip install httpie 

    * 맥북 Python 기본 버전은 Python2 이기 때문에 기본 설정을 최신으로 변경
        -> 만약 pip 없을경우 & Phthon 없을 경우 
            01. Python 설치 : brew install python3 
            02. pip 설치 : sudo easy_install pip  
                -> 에러 발생시 (def read(rel_path: str) -> str:) : python 버전이 낮아서 pip 기능이 없음. 
            03 pip 다운로드 : wget https://bootstrap.pypa.io/pip/3.5/get-pip.py
                -> wget 없을 경우 : brew install wget

    * pip3는 되는데 pip는 안될 때
            04 pip 업그레이드 : pip3 install --upgrade pip

[Docker]
========

    * mysql images download (os: mac m1)
        00. docker pull --platform linux/amd64 mysql:8

    * docker image - mysql 실행
        01. 맥 m1 일경우 docker pull mysql 사용 불가능, (arm64 다운로드 안됨)
            * docker pull --platform linux/amd64 mysql (이미지 다운로드))
            * docker images (이미지 확인)
            * docker run --platform linux/amd64 --name mysql -e MYSQL_ROOT_PASSWORD=1234 -d -p 3306:3306 mysql:latest (컨테이너 실행)
            * docker ps -a (컨테이너 실행 확인)
            * docker exec -it mysql bash (mysql 접속)
        02. m1 아닐 경우
            * docker pull mysqlmy 
            * docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=1234 -d -p 3306:3306 mysql:latest


[vs code extensions]
====================              
    * gitlens  : version check
    * prettier : code formatter
    * docker