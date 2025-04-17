import { Footer } from "../components/footer";
import { Header } from "../components/header";

export function Home() {
  return (
    <>
      <div id="background1">
        <Header />
        <div id="main">
          <section id="section1">
            <article id="section1-position">
              <p>Welcome, we are a cool</p>
              <h1>Game Development Studio</h1>
            </article>
            <article id="section1-container">
              <div class="section1-container-sous">
                <p>_01</p>
                <p>Full Cycle Game Development</p>
              </div>
              <div class="section1-container-sous">
                <p>_02</p>
                <p>NFT Game Development</p>
              </div>
              <div class="section1-container-sous">
                <p>_03</p>
                <p>Game Testing & Porting</p>
              </div>
              <div class="section1-container-sous">
                <p>_04</p>
                <p>Gamification services</p>
              </div>
            </article>
          </section>
        </div>
        <div id="background2">
          <section id="section2">
            <div id="section2-container">
              <article>
                <p>About Us</p>
                <h2>
                  We are a team of super artists ut interdum nunc, vel pretium
                  ligula.
                </h2>
                <p>
                  Vestibulum sapien nisl, auctor vel feugiat et, pellentesque
                  vitae arcu. Phasellus accumsan quis dui non tempus. Aenean
                  venenatis malesuada quam quis posuere.
                </p>
                <a href="#">Read more</a>
              </article>
              <img src="/img/section2-img.jpg" alt="image des avenger" />
            </div>
          </section>
        </div>
        <div id="background3">
          <section id="section3">
            <article id="article1">
              <h2>Popular Platforms</h2>
              <p>
                We develop games for the most phasellus ut interdum nunc, vel
                pretium ligula nam tincidunt enim ut ligula vehicula non.
              </p>
            </article>
            <article id="article2">
              <nav>
                <ul>
                  <li class="jojo">
                    {" "}
                    PC <i class="fa-solid fa-caret-down"></i>
                    <ul class="submain">
                      <li class="jojo-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Debitis molestias ipsam aperiam soluta nostrum quae sint
                        neque dolorem corporis sed?
                      </li>
                    </ul>
                  </li>
                  <li class="jojo">
                    {" "}
                    Console <i class="fa-solid fa-caret-down"></i>
                    <ul class="submain">
                      <li class="jojo-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Debitis molestias ipsam aperiam soluta nostrum quae sint
                        neque dolorem corporis sed?
                      </li>
                    </ul>
                  </li>
                  <li class="jojo">
                    {" "}
                    Mobile <i class="fa-solid fa-caret-down"></i>
                    <ul class="submain">
                      <li class="jojo-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Debitis molestias ipsam aperiam soluta nostrum quae sint
                        neque dolorem corporis sed?
                      </li>
                    </ul>
                  </li>
                  <li class="jojo">
                    {" "}
                    AR/VR <i class="fa-solid fa-caret-down"></i>
                    <ul class="submain">
                      <li class="jojo-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Debitis molestias ipsam aperiam soluta nostrum quae sint
                        neque dolorem corporis sed?
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </article>
          </section>
          <br />
        </div>

        <div id="background-section4">
          <section id="section4">
            <div id="section4-header">
              <h2>Our Game Projects</h2>
              <a href="">
                All Projects <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div id="section4-container">
              <article>
                <div id="background-project">
                  <p>Gaming Company</p>
                  <h3>Worlds of Robots</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis.
                  </p>
                </div>
              </article>

              <article>
                <div id="background-project2">
                  <p>Electronic Games</p>
                  <h3>Beautiful Amalthea</h3>
                  <p>
                    Dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                    luctus nec ullamcorper mattis, pulvinar dapibus.
                  </p>
                </div>
              </article>

              <article>
                <div id="background-project3">
                  <p>Games X</p>
                  <h3>The Warriors Lounge</h3>
                  <p>
                    Amet, consectetur adipiscing elit. Ut elit tellus, luctus
                    nec ullamcorper mattis, pulvinar dapibus leo tellus.
                  </p>
                </div>
              </article>

              <article>
                <div id="background-project4">
                  <p>Super Gamess</p>
                  <h3>Jungle Adventures</h3>
                  <p>
                    Ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                    tellus, luctus nec ullamcorper mattis dapibus.
                  </p>
                </div>
              </article>
            </div>
          </section>

          <section id="section5">
            <p>Why choose us</p>
            <h2>
              We have put together a very talented and highly skilled visual
              artist...
            </h2>
            <article id="section5-container">
              <div>
                <h3>High Standards</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
              <div>
                <h3>Cooperative Spirit</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
              <div>
                <h3>Creative Passion</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </article>
            <hr />
            <p>Popular Clients</p>
            <h2>Trusted by great companies</h2>
            <div id="section5-container2">
              <div class="container-partenaire">
                <div>
                  <img src="/img/partenaire1.png" alt="partenaire" />
                </div>
                <div>
                  <img src="/img/partenaire2.png" alt="partenaire" />
                </div>
                <div>
                  <img src="/img/partenaire3.png" alt="partenaire" />
                </div>
                <div>
                  <img src="/img/partenaire4.png" alt="partenaire" />
                </div>
              </div>
              <div class="container-partenaire">
                <div>
                  <img src="/img/partenaire5.png" alt="partenaire" />
                </div>
                <div>
                  <img src="/img/partenaire6.png" alt="partenaire" />
                </div>
                <div>
                  <img src="/img/partenaire7.png" alt="partenaire" />
                </div>
                <div>
                  <img src="/img/partenaire8.png" alt="partenaire" />
                </div>
              </div>
            </div>
          </section>
        </div>
        <section id="section6">
          <div id="section6-opacity">
            <article>
              <h2>Let’s talk about your project</h2>
              <p>
                Phasellus ut interdum nunc, vel pretium ligula. Nam tincidunt
                enim ut ligula vehicula lorem ipsum dolor sit amet.
              </p>
              <a href="#" id="btn-get">
                Get in Touch
              </a>
            </article>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
