// import { View, Text } from "react-native";
// import React, { useEffect, useState } from "react";
// import { auth } from "./firebase";
// // import { onAuthStateChanged } from "@firebase/auth";
// import { onAuthStateChanged } from "firebase/auth";

// export default function useAuth() {
//   const [user, setUser] = useState(null);
//   useEffect(() => {
//     const addSub = onAuthStateChanged(auth, (user) => {
//       console.log("got user: ", user);
//       if (user) {
//         setUser(user);
//       } else {
//         setUser(null);
//       }
//     });
//     return addSub;
//   }, []);

//   return user;
// }

import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
// import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

export default function useAuth() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const addSub = onAuthStateChanged(auth, (user) => {
      console.log("got user: ", user);
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return addSub;
  }, []);

  // Add a check for null user here
  //   if (user === null) {
  //     return null; // or some other default value
  //   }

  return { user };
}
