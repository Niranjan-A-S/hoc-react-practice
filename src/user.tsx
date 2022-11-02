export interface IUser {
  name: string;
  username: string;
  gmail: string;
}

export interface IUserProps {
  user: IUser;
}

export const User = (props: IUserProps) => {
  const {
    user: { name, username, gmail }
  } = props;

  return (
    <>
      <p>{name}</p>
      <p>{username}</p>
      <p>{gmail}</p>
    </>
  );
};
