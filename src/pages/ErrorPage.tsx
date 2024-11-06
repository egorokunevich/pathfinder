import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';

const ErrorPage = () => {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <NotFoundPage />;
    }
  }
  return <div>unhandled error code</div>;
};

export default ErrorPage;
