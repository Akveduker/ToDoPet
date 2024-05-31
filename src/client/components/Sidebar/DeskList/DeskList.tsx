import useGetUser from '@hooks/useGetUser';
import DeskLink from '@ui/links/DeskLink/DeskLink';

const DeskList = () => {
  const { data } = useGetUser();
  if (!data) return null;
  return (
    <div>
      {data.desks.map(({ _id, name }) => {
        return (
          <DeskLink key={_id.toString()} to={`${_id}`}>
            {name}
          </DeskLink>
        );
      })}
    </div>
  );
};

export default DeskList;
