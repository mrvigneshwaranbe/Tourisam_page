import React from "react";
import Carousel from "react-bootstrap/Carousel";
import fbanner from "./img/banner.1.jpg";
import pic1 from "./img/pic1.jpeg";
import pic2 from "./img/pic2.jpeg";
import pic3 from "./img/pic3.jpeg";
import pic4 from "./img/pic4.jpeg";
import { HashLink as Link } from "react-router-hash-link";
export default function CarouselComponent() {
  return (
    <>
      <div className="carousel-container d-flex justify-content-center ">
        <Carousel className="carousel">
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-container__img"
              src={fbanner}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-container__img"
              src={pic1}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-container__img"
              src={pic2}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-container__img"
              src={pic3}
              alt="Fourth slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-container__img"
              src={pic4}
              alt="Fifth slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      {/*Tourist Text  */}
      <div>
        <div className="text-center mt-5">
          <h4>Tourist Place To Tamil Nadu</h4>
          <h4>Here Are The Top Places To Visit In Tamil Nadu In 2023</h4>
        </div>

        <div className="container mt-5 district">
          <ul className=" row row-cols-5 text-center  list-unstyled  ">
            <li>
              <Link className=" text-decoration-none  fw-medium" to="#chennai">
                Chennai
              </Link>
            </li>
            <li>
              <Link
                className=" text-decoration-none fw-medium "
                to="#kodaikanal"
              >
                Kodaikanal
              </Link>
            </li>
            <li>
              <Link className=" text-decoration-none fw-medium " to="#madurai">
                Madurai
              </Link>
            </li>
            <li>
              <Link
                className=" text-decoration-none fw-medium "
                to="#kumbakonam"
              >
                Kumbakonam
              </Link>
            </li>
            <li>
              <Link className=" text-decoration-none fw-medium " to="#theni">
                Theni
              </Link>
            </li>
            <li>
              <Link
                className=" text-decoration-none fw-medium "
                to="#rameshwaram"
              >
                Rameshwaram
              </Link>
            </li>
            <li>
              <Link className=" text-decoration-none fw-medium " to="#ooty">
                Ooty
              </Link>
            </li>
            <li>
              <Link
                className=" text-decoration-none fw-medium "
                to="#kaniyakumari"
              >
                Kanyakumari
              </Link>
            </li>
            <li>
              <Link className=" text-decoration-none fw-medium " to="#yercaud">
                Yarcaud
              </Link>
            </li>
            <li>
              <Link
                className=" text-decoration-none fw-medium "
                to="#hogenakkal"
              >
                Hogenakkal
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}