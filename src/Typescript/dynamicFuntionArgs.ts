export type Event =
  | {
      type: "LOG_IN";
      payload: {
        userId: string;
      };
    }
  | {
      type: "SIGN_OUT";
    };

// Here the payload is imporant with Log IN and not with Sign Out

// const sendEvent = (eventType: Event['type'], payload?: any) => {
//     console.log(eventType, payload)
// };

const sendEvent = <Type extends Event["type"]>(
  ...args: Extract<Event, { type: Type }> extends { payload: infer TPayload }
    ? [type: Type, payload: TPayload]
    : [type: Type]
) => {
  console.log(args);
};

sendEvent("LOG_IN", { userId: "ayush.ranghar" });

sendEvent("SIGN_OUT");

sendEvent("LOG_IN", { userId: "ayush" });
