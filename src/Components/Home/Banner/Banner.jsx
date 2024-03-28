import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse bg-base-200 p-12 rounded-xl">
        <img
          src="https://i.ibb.co/kmpQPQV/pride-and-prejudice.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold my-4 w-full lg:w-2/3 ">Books to freshen up your bookself</h1>
          <Link to='/listedBooks'><button className="btn bg-[#23BE0A] text-white hover:bg-[#59C6D2] my-4">View the list</button>
          </Link>
        </div>
      </div>
    </div>
    );
};

export default Banner;