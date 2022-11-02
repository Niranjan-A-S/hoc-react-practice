import axios from "axios";
import { FC, useEffect, useState } from "react";
import { IUser, IUserProps, User } from "./user";

const WithUser = (Component: FC<IUserProps>) => {
  const NewComponent = (props) => {
    const [user, setuser] = useState<IUser>(null);

    useEffect(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/users/1")
        .then((res) => setuser(res.data));
    }, []);

    return <Component {...props} user={user} />;
  };
  return <NewComponent />;
};
