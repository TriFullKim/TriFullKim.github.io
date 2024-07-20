# How to Connect SSH without Password

1. ssh-keygen을 이용하면 id_rsa, id_rsa.pub 이라는 두가지 파일을 만들 수 있다.
2. id_rsa는 사용자만이 가져야하며, 절대로 외부로 유출하면 안된다.
3. id_rsa.pub의 내용이 SSH 서버 측이 알아야하는 내용이다.

# id_rsa.pub 전송하기
scp 라는 명령어를 이용해 remote server에 전송가능하다.
```shell
scp {TARGET_FILE} {DESTINATIO_PATH}
``` 
여기서 TARGET_FILE이 id_rsa.pub이 되고 {DESTINATION_PATH}가 서버의 위치가 되는 것을 알 수 있다.
서버(컴퓨터)는 IP로써 나타내므로
{Destination_PATH} = USER_ID@REMOTE_SERVER_IP:INNER_SERVER_PATH
와 같은 형태를 갖는다.

이를 이용해 보내는 방법의 예시는 아래와 같다.
...

# 전공한 id_rsa.pub을 인식시키게 하기

전송하였다고 무조건 인식되는 것은 아니다. ssh가 ~한 키를 갖는 유저는 우리가 알고 있는 친구라서 들어올 수 있어라고 쓰여있는 명부가 있다. 이를
.ssh/known_hosts에 저장하며 여기에 명부를 추가하면 된다.

text editor를 이용해 수정할 수도 있으며, linux의 명령줄 하나면 쓸대 없이 마우스를 움직이지 않고 수정이 가능하다.

그 기능 linux의 pipeline 이라는 기능이고, 그중에서 
~한 텍스트가 중복되는 것이 해당 파일에 없으면 append 한다. 라는 뜻을 가지는 것이 있다. 

```shell
cat {id_rsa.pub_PATH} >> known_hosts
```