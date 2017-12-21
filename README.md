# for_startup_ionic_self




# 환경설정 

 _jasmine, karma로 unit test & e2e

  *.spec.ts가 각 unit test코드




 _gitlab 이용 하여 CI 서버 구축 
  
  yaml로 lint 추가 






# update 
2017-12-18

** spec.ts
jasmine 문법 못알아먹어서 뜨는데 import에 명시적으로 추가해서 고쳐짐 

** tsconfig.js
node_module 주소 수정 새로 버전 업 하면서생긴 주소가 잘못 가르키고 있다.('.'하나)

2017-12-20

코드는 이제 더이상 올리면 안될거 같고, read me만 달아야겠다.

** life cycle hook 

angular life cycle hook 을 ionic에서는 다른 함수명으로 제공해준다. 
그대로 angular life cycle hook을 사용해도 괜찮지만 ionic 에서 제공해주는게 더 stable 할 것같아서 ionic 쓸거다 
ionViewCanEnter()
ionViewDidLoad()
ionViewWillEnter()
ionViewDidEnter()
Exit from page view: 메모리 정리용으로 사용 
ionViewWillLeave()
ionViewDidLeave

** scss

아이오닉에서 기본 제공하는 sass를 필요에 따라 변경 해야함 

** ws  3.3.2  추가  
개발 시 refresh 할 때 연결이 끊기는 문제로 ws 설치

