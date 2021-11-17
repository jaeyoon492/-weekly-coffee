- 프론트 pkill
sudo ssh -i "/Users/myeongjaeyun/Documents/weekly-coffee/myworkspace.pem" ubuntu@ec2-54-180-141-62.ap-northeast-2.compute.amazonaws.com "pkill -f node"
- 프론트 빌드, 엔피엠 인스톨, 엔피엠 스타트
sudo ssh -i "/Users/myeongjaeyun/Documents/weekly-coffee/myworkspace.pem" ubuntu@ec2-54-180-141-62.ap-northeast-2.compute.amazonaws.com "cd /home/ubuntu/-weekly-coffee/Partner/partnerclient; git pull; npm install; npm run build; nohup npm start 1>/dev/null 2>&1 &"

- 백엔드 ec2 접속
sudo ssh -i "/Users/myeongjaeyun/Documents/weekly-coffee/partner.pem"  ubuntu@ec2-15-164-230-72.ap-northeast-2.compute.amazonaws.com

@rem 백엔드 
@rem ===== 1. 빌드된 jar파일을 서버에 전송
sudo scp -i "/Users/myeongjaeyun/Documents/weekly-coffee/partner.pem" -r ./build/libs/partner*.jar ubuntu@ec2-15-164-230-72.ap-northeast-2.compute.amazonaws.com:/home/ubuntu/app/partnerserver
@rem ===== 2. 기존 프로세스 종료
sudo ssh -i "/Users/myeongjaeyun/Documents/weekly-coffee/partner.pem" ubuntu@ec2-15-164-230-72.ap-northeast-2.compute.amazonaws.com "pkill -9 -f java"
@rem ===== 3. dev프로필로 jar 파일 실행
sudo ssh -i "/Users/myeongjaeyun/Documents/weekly-coffee/partner.pem" ubuntu@ec2-15-164-230-72.ap-northeast-2.compute.amazonaws.com "cd /home/ubuntu/app/partnerserver; nohup java -Dspring.profiles.active=dev -jar partner*.jar 1>partner.log 2>&1 &"



