[개발순서]
=======

    00. 게시판 등록, 삭제, 동의 구현 
    01. BoardService.java : 서비스 인터페이스 구현 
    02. BoardServiceImp.java : 실제 비즈니스 로직 
    03. BoardController.java : 화면에서 호출하는 API 

[게시판설계]
=========

    00. Board Table : 사용자가 게시물을 작성하면 row insert
        * 최초로 게시물을 등록할 때 게시물 id(관리번호) 와 제목(title), 작성자(writer_userid)를 Board Agree Table에 insert
        * client가 agree를 하는 순간 boardservice.agree()실행 : 이때 Board Table의 agree cnt 업데이트 한 후 Board Agree Table 내용도 함께 업데이트
    01. Board Agree Table : 사용자가 해당 게시물에 좋아요를 누르면 Update