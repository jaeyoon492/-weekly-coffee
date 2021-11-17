sudo ssh -i "/Users/myeongjaeyun/Documents/git2021-working/myworkspace.pem" ubuntu@ec2-54-180-141-62.ap-northeast-2.compute.amazonaws.com "pkill -f node"
sudo ssh -i "/Users/myeongjaeyun/Documents/git2021-working/myworkspace.pem" ubuntu@ec2-54-180-141-62.ap-northeast-2.compute.amazonaws.com "cd /home/ubuntu/-weekly-coffee/Partner/partnerclient; git pull; npm install; npm run build; nohup npm start 1>/dev/null 2>&1 &"

sudo ssh -i "/Users/myeongjaeyun/Documents/weekly-coffee/partner.pem"  ubuntu@ec2-15-164-230-72.ap-northeast-2.compute.amazonaws.com

@rem 백엔드 
@rem ===== 1. 다른 프로젝트에서 할 때는 사전에 mkdir /home/ubuntu/app/프로젝트명 디렉터리를 만들어야함
@rem ===== 2. 키파일명을 맞추고 "myworkspace" 이것을 프로젝트명으로 바꿈

@rem ===== 1. 빌드된 jar파일을 서버에 전송
sudo scp -i "/Users/myeongjaeyun/Documents/weekly-coffee/partner.pem" -r ./build/libs/partner*.jar ubuntu@ec2-15-164-230-72.ap-northeast-2.compute.amazonaws.com:/home/ubuntu/app/partnerserver
@rem ===== 2. 기존 프로세스 종료
sudo ssh -i "/Users/myeongjaeyun/Documents/weekly-coffee/partner.pem" ubuntu@ec2-15-164-230-72.ap-northeast-2.compute.amazonaws.com "pkill -9 -f java"
@rem ===== 3. dev프로필로 jar 파일 실행
sudo ssh -i "/Users/myeongjaeyun/Documents/weekly-coffee/partner.pem" ubuntu@ec2-15-164-230-72.ap-northeast-2.compute.amazonaws.com "cd /home/ubuntu/app/partnerserver; nohup java -Dspring.profiles.active=dev -jar partner*.jar 1>partner.log 2>&1 &"



