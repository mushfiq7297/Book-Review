import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div id="error-page" >
          <div className="flex-col justify-center items-center text-center lg:my-60">
        <h1 className="text-9xl font-extrabold">404</h1>
        <p className="text-xl font-bold">Page not found</p>
        <Link to='/'>Go back to home</Link>
        </div>
      </div>
    );
};

export default ErrorPage;