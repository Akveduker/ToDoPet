import useGetUser from '@hooks/useGetUser';

const User = () => {
  const { data } = useGetUser();
  if (!data) return null;
  const { name, email } = data.user;
  return (
    <div>
      <div className="rounded-full bg-secondary w-12 h-12 relative">
        <span className="absolute flex justify-center items-center inset-0 text-fontSecondary">
          {name[0].toUpperCase()}
        </span>
      </div>
      <p>{name}</p>
      <p>{email}</p>
    </div>
  );
};

export default User;
