# git push 명령어
 -> git push -u origin main
 -> push 할 때 충돌할 경우 : git pull --rebase 
 # git 명령어
 -> git config --list
 -> git config --global user.name
 -> git config --global user.email


#################httpie install################
# OS : mac m1 

# 명령어
# pip install httpie 

# 맥북 Python 기본 버전은 Python2 이기 때문에 기본 설정을 최신으로 변경

# 만약 pip 없을경우 & Phthon 없을 경우 
# 01. Python 설치 : brew install python3 
# 02. pip 설치 : sudo easy_install pip  
              -> 에러 발생시 (def read(rel_path: str) -> str:) : python 버전이 낮아서 pip 기능이 없음. 
# 03 pip 다운로드 : wget https://bootstrap.pypa.io/pip/3.5/get-pip.py
              -> wget 없을 경우 : brew install wget
# [에러] pip3는 되는데 pip은 안됨
# 04 pip 업그레이드 : pip3 install --upgrade pip

              
