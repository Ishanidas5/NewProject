import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import onlineEducationImage from "./online-education.jpeg";
import data from "./data-structures-in-java.png";
import BestBooksonAlgorithms from "./best-books-on-algorithms.png";
import aptitute from "./Aptitute.png";
import tips from "./tips & tricks.jpg";
import softskill from "./soft-skills-training-mini-icons.jpg";
import "../../App.css";

const sliderImages = [
  { url: data, caption: "Online Education" },
  { url: BestBooksonAlgorithms, caption: "Best Books on Algorithms" },
  { url: aptitute, caption: "Aptitude" },
  { url: tips, caption: "Tips & Tricks" },
  { url: softskill, caption: "Soft Skills Training" }
];

export default function Home() {
  return (
    <div>
      <ol>
        <table>
          <tbody>
            <tr>
              <td>
                Learn with an innovative, comprehensive approach with us "E -
                OCEAN". Here we have brought to you some of the best courses
                available in online e-learning platforms where you get to solve
                questions on aptitude and coding. You can solve complex problems
                and correct yourself by visiting our solution page. You can also
                find sample question sets and prepare yourself for competitive
                exams with multiple online competitions available on our
                platform. Our website is not only limited to problems and
                solutions; we also provide some of the best tricks and tips
                exclusively for our learners to make their preparation a
                success. Also, there are English comprehension papers for those
                who want to improve their knowledge in the English language and
                soft-skill courses, which are very important for interview
                preparation. So why wait, friends? Come together, we learn and
                build a better future.{"\n"}
                {"\n"}
                <p>
                  <b>LEARN | EXPLORE | WIN</b>
                </p>
              </td>
              <td>
                <div className="image-container">
                  <img
                    style={{
                      resizeMode: "center",
                      borderWidth: 20,
                      height: 200,
                      width: 400
                    }}
                    src={onlineEducationImage}
                    alt="Online Education"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </ol>
      <div>
        <SimpleImageSlider
          width={896}
          height={504}
          images={sliderImages}
          showBullets={true}
          showNavs={true}
        />
      </div>
    </div>
  );
}
