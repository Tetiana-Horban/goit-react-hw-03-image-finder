import { BallTriangle } from 'react-loader-spinner';

const Loader = () => {
  return (
    <BallTriangle
      color="#3f51b5"
      height={200}
      width={200}
      wrapperStyle={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    />
  );
};
export default Loader;
