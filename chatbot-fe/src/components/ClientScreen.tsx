import { Input } from "./Input";
import { Button } from "./ui/Button";
import { useState, useEffect, useRef } from "react";

export function ClientScreen() {
  const [message, setMessage] = useState(["Hi there "]);

  const inpRef = useRef();
  //@ts-ignore
  const wsRef = useRef();

  useEffect(() => {
    const ws = new WebSocket("http://localhost:8080");
    ws.onmessage = (event) => {
      setMessage((m) => [...m, event.data]);
    };
    wsRef.current = ws;
    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          type: "join",
          payload: {
            roomId: "red",
          },
        })
      );
    };
  }, []);

  return (
    <div className="relative top-50 left-50 bg-white h-100 w-100 ">
      {message.map((message) => (
        <div className="">
          <span className="bg-black text-white rounded p-4 mt-3">
            {message}
          </span>
        </div>
      ))}
      <div className="flex absolute bottom-0 h-10 w-full ">
        <Input ref={inpRef} type="text" placeholder="Send Message" />
        <Button
          onClick={() => {
            const message = inpRef.current.value;
            wsRef.current.send(
              JSON.stringify({
                type: "chat",
                payload: {
                  message: message,
                },
              })
            );
          }}
          text="Send"
          size="sm"
        />
      </div>
    </div>
  );
}
