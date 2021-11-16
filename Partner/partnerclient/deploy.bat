sudo ssh -i "/Users/myeongjaeyun/Documents/git2021-working/myworkspace.pem" ubuntu@ec2-54-180-141-62.ap-northeast-2.compute.amazonaws.com "pkill -f node"
sudo ssh -i "/Users/myeongjaeyun/Documents/git2021-working/myworkspace.pem" ubuntu@ec2-54-180-141-62.ap-northeast-2.compute.amazonaws.com "cd /home/ubuntu/-weekly-coffee/Partner/partnerclient; git pull; npm install; npm run build; nohup npm start 1>/dev/null 2>&1 &"

