import HomeLayout from "../Layouts/HomeLayout";
import aboutMainImage from "../Assets/Images/aboutMainImage.jpg";
import AkshaySaini from "../Assets/Images/AkshaySaini.jpg";
import harkirat from "../Assets/Images/harkirat.jpg";
import harnoor from "../Assets/Images/harnoor.jpg";
import sanketSingh from "../Assets/Images/sanketSingh.jpg";

function AboutUs() {
  return (
    <HomeLayout>
      <div className="pl-20 pt-20 flex flex-col text-white">
        <div className="flex items-center gap-5 mx-10">
          <section className="w-1/2 space-y-10">
            <h1 className="text-5xl text-yellow-500 font-semibold">
              Affordable and quality education
            </h1>
            <p className="text-xl text-gray-200">
              Our goal is to provide the affordable and quality education to the
              world. We are providing the platform for the aspiring teachers and
              students to share their skills,creativity and knowledge to each
              other ,to empower in the growth and wellness of mankind.
            </p>
          </section>

          <div className="w-1/2 my-16 m-auto">
            <img
              id="test1"
              style={{
                filter: "drop-shadow(opx 10px 10px rgb(0,0,0));",
              }}
              alt="about main image"
              // className="drop-shadow-2xl"
              src={aboutMainImage}
            />
          </div>
        </div>

        <div className="carousel w-1/2 my-16 m-auto">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              <img
                src={AkshaySaini}
                className="w-40 rounded-full border-2 border-gray-400"
              />
              <p className="text-xl text-gray-200">
                {
                  "Education is the most powerful tool you can use to change the world."
                }
              </p>
              <h3 className="text-2xl font-semibold">AKSHAY SAINI</h3>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              <img
                src={harkirat}
                className="w-40 rounded-full border-2 border-gray-400"
              />
              <p className="text-xl text-gray-200">
                {
                  "Man needs his difficulties because they are necessary to enjoy success."
                }
              </p>
              <h3 className="text-2xl font-semibold">HARKIRAT SINGH</h3>
              <div className="absolute left-5 right-5 top-1/2  flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              <img
                src={harnoor}
                className="w-40 rounded-full border-2 border-gray-400"
              />
              <p className="text-xl text-gray-200">
                {
                  "Let us sacrifice our today so that our children can have a better tomorrow."
                }
              </p>
              <h3 className="text-2xl font-semibold">HARNOOR SINGH</h3>
              <div className="absolute left-5 right-5 top-1/2  flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              <img
                src={sanketSingh}
                className="w-40 rounded-full border-2 border-gray-400"
              />
              <p className="text-xl text-gray-200">
                {
                  "If you fail, never give up because F.A.I.L. means “First Attempt In Learning“"
                }
              </p>
              <h3 className="text-2xl font-semibold">SANKET SINGH</h3>
              <div className="absolute left-5 right-5 top-1/2  flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default AboutUs;
