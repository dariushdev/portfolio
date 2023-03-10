export default function CustomError({ statusCode, err }) {
  return (
    <div>
      <h1>{statusCode}</h1>
      <p>Oops! Something went wrong.</p>
      {err && <p>{err.message}</p>}
    </div>
  );
}

CustomError.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode, err };
};
