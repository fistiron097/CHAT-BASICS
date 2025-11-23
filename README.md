Basic CHAT application concept - that let you connect into room and send message to other people in the room /* ---------------------- Important Notes ----------------------

Ye code ek real-time chat application implement karta hai. Main points ye hai:

WebSocket Connection:
Local server se WebSocket connection create karta hai port 8080 pe
Connection establish hote hi automatically "red" room mei join ho jata hai
Har new message ko messages array mei add karta hai
State aur Refs:
messages state mei saare chat messages store hote hai
wsRef WebSocket connection ko store karta hai taki baad mei use kar sake
inputRef input field ko reference karta hai
UI Components:
Black background ke saath full screen chat interface
Upar messages display hote hai white bubbles mei
Bottom mei ek input field hai message type karne ke liye
Purple send button message bhejne ke liye
Message Handling:
Send button click hone pe current input value ko WebSocket ke through server ko bhej deta hai
Server se aane wale messages automatically display ho jaate hai
Messages JSON format mei send hote hai with type aur payload
Cleanup:
Component unmount hone pe WebSocket connection automatically close ho jata hai
Is code ka basic flow ye hai:

Page load -> WebSocket connection -> Room join
User message type karta hai -> Send click -> Server ko message jaata hai
Server message process karta hai -> Same room ke sabhi users ko message bhejta hai
Receiving clients pe message display ho jaata hai
