// import React, { createContext, useContext, useEffect, useState } from 'react';
// // import io from 'socket.io-client';

// const SocketContext = createContext();

// export const useSocket = () => {
//   return useContext(SocketContext);
// };

// export const SocketContextProvider = (props) => {
//   const [socket, setSocket] = useState();
//   useEffect(() => {
//     const newSocket = io('http://localhost:9090');
//     setSocket(newSocket);
//     return () => newSocket.close();
//   }, []);
//   return (
//     <SocketContext.Provider value={{ socket }}>
//       {props.children}
//     </SocketContext.Provider>
//   );
// };
