class BlogCreate {
  constructor(id) {
    this.id = id;
    this.PC_versionDOM = null;
    this.PC_versionStyle = null;
    this.M_versionDOM = null;
    this.M_versionStyle = null;
    this.currentIndex = 0;
    this.pofol = [
      { "domClass": "#first" },
      { "domClass": "#second" },
      { "domClass": "#third" },
      { "domClass": "#fourth" },
      { "domClass": "#fifth" }
      // { "domClass": "#sixth" }
    ];
    this.autoSlideTimer = null;  // 타이머 ID를 저장할 변수
  }
  initDom() {
    this.PC_versionDOM = `
            <section class="section1 page">
              <div class="nameContainerGradient"></div>
              <div class="nameContainer">
                <h1>Chan Ryong</h1>
              </div>
              <div class="textContainer">
                <p>Scroll</p>
                <div class="scrollIcon" id="scroll"></div>
              </div>
            </section>
            <section class="section2 page">
              <div class="contentContainer">
                <div class="imageContainer"><img src="../images/myImage.jpeg" alt="myImage"></div>
              </div>
              <div class="infoContainer">
                <div class="container1 myInfoContainer">
                  <p> <span class="addressText">안산시 단원구</span></p>
                </div>
                <div class="container2 myInfoContainer">
                  <p> <span class="birthText">1999. 08. 07.</span></p>
                </div>
                <div class="container3 myInfoContainer">
                  <p><span class="myText">배움에 대한 열정이 있는 개발자</span></p>
                </div>
                <div class="nameContainer myInfoContainer">
                  <p>박찬룡</p>
                </div>
              </div>
            </section>
            <section class="section3 page">
              <div class="frontContainer">
                <p class="frontTitle">FRONT-END</p>
                <ul>
                  <li><img src="../icons/html_icon.png" alt="HTML">
                    <p>HTML</p>
                  </li>
                  <li><img src="../icons/css_icon.png" alt="CSS">
                    <p>CSS</p>
                  </li>
                  <li><img src="../icons/pug_icon.png" alt="pug">
                    <p>Pug</p>
                  </li>
                  <li><img src="../icons/sass_icon.png" alt="Sass">
                    <p>Sass</p>
                  </li>
                  <li><img src="../icons/js_icon.png" alt="Javascript">
                    <p>Javascript</p>
                  </li>
                  <li><img src="../icons/typescript_icon.png" alt="typescript">
                    <p>Typescript</p>
                  </li>
                  <li><img src="../icons/json_icon.png" alt="JSON">
                    <p>JSON</p>
                  </li>
                </ul>
              </div>
              <div class="backContainer">
                <p class="backTitle">BACK-END</p>
                <ul>
                  <li><img src="../icons/node_icon.png" alt="Node.js">
                    <p>Node.js</p>
                  </li>
                  <li><img src="../icons/python_icon.png" alt="Python">
                    <p>Python</p>
                  </li>
                  <li><img src="../icons/django.png" alt="Django">
                    <p>Django</p>
                  </li>
                  <li><img src="../icons/sql_icon.png" alt="MySQL">
                    <p>MySQL</p>
                  </li>
                  <li><img src="../icons/ajax_icon.png" alt="AJAX">
                    <p>AJAX</p>
                  </li>
                  <li><img src="../icons/linux_icon.png" alt="Linux">
                    <p>Linux</p>
                  </li>
                  <li><img src="../icons/vim_icon.png" alt="vim">
                    <p>VIM</p>
                  </li>
                </ul>
              </div>
            </section>
            <div class="innerBox"></div>
            <section class="section4 page">
              <div class="titleContainer">
                <h2>포트폴리오.<br> <span>단조로움을 거부한다.</span></h2>
              </div>
              <div class="matrixCalculator portContentBox">
                <div class="portfolioContainer">
                  <div class="imageContainer"><img src="../images/matrix_port_img.png" alt="matrixCalculator"></div>
                  <div class="infoContainer">
                    <div class="pofolContainer">
                      <div class="titleAndSkillContainer">
                        <h3>Matrix Calculator</h3>
                        <ul class="skillContainer">
                          <li>
                            <p>#HTML</p>
                          </li>
                          <li>
                            <p>#CSS</p>
                          </li>
                          <li>
                            <p>#Javascript</p>
                          </li>
                        </ul>
                      </div>
                      <div class="textConatiner">
                        <p>행렬 연산과 함께 시각화 기능을 제공하여,</p>
                        <p>결과를 직관적으로 표시</p>
                      </div>
                      <div class="btnContainer">
                        <div class="pptMove"><a href="http://kkms4001.iptime.org/~c19st05/portfolio/matrixcalculator/%ed%96%89%eb%a0%ac%ea%b3%84%ec%82%b0%ea%b8%b0.pdf" target="_blank">PPT</a></div>
                        <div class="pptMove"><a href="https://chan3623.github.io/matrix_calculator/" target="_blank">SITE</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="lineGraph portContentBox">
                <div class="portfolioContainer">
                  <div class="infoContainer">
                    <div class="pofolContainer">
                      <div class="titleAndSkillContainer">
                        <h3>Line Graph</h3>
                        <ul class="skillContainer">
                          <li>
                            <p>#HTML</p>
                          </li>
                          <li>
                            <p>#CSS</p>
                          </li>
                          <li>
                            <p>#Javascript</p>
                          </li>
                        </ul>
                      </div>
                      <div class="textConatiner">
                        <p>AJAX를 통해 JSON 서버와 연동하여</p>
                        <p>JSON의 값을 추출 후 해당 값을 통해</p>
                        <p>직선 그래프로 출력</p>
                      </div>
                      <div class="btnContainer">
                        <div class="pptMove"><a href="http://kkms4001.iptime.org/~c19st05/portfolio/graph/graph-ppt/LineGraph.pdf" target="_blank">PPT</a></div>
                        <div class="pptMove">   <a href="http://kkms4001.iptime.org/~c19st05/portfolio/graph/graph.html" target="_blank">SITE</a></div>
                      </div>
                    </div>
                  </div>
                  <div class="imageContainer"><img src="../images/line_port_img.png" alt="matrixCalculator"></div>
                </div>
              </div>
              <div class="homeDashBoard portContentBox">
                <div class="portfolioContainer">
                  <div class="imageContainer"><img src="../images/dashboard_port_img.png" alt="matrixCalculator"></div>
                  <div class="infoContainer">
                    <div class="pofolContainer">
                      <div class="titleAndSkillContainer">
                        <h3>Home DashBoard</h3>
                        <ul class="skillContainer">
                          <li>
                            <p>#Pug</p>
                          </li>
                          <li>
                            <p>#Sass</p>
                          </li>
                          <li>
                            <p>#Javascript</p>
                          </li>
                          <li>
                            <p>#Node.js</p>
                          </li>
                        </ul>
                      </div>
                      <div class="textConatiner">
                        <p>전기, 수도, 가스 사용량의 데이터를</p>
                        <p>실시간으로 받아와 사용기간에 따라</p>
                        <p>적합한 형태로 시각화</p>
                      </div>
                      <div class="btnContainer">
                        <div class="pptMove"><a href="http://kkms4001.iptime.org/~c19st05/portfolio/dashboard/PPT/%ec%8b%a4%ec%8b%9c%ea%b0%84%20%ec%8a%a4%eb%a7%88%ed%8a%b8%20%ed%99%88%20%eb%8c%80%ec%8b%9c%eb%b3%b4%eb%93%9c.pdf" target="_blank">PPT</a></div>
                        <div class="pptMove">   <a href="http://kkms4001.iptime.org:33201/home" target="_blank">SITE</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="musicPlayer portContentBox">
                <div class="portfolioContainer">
                  <div class="infoContainer">
                    <div class="pofolContainer">
                      <div class="titleAndSkillContainer">
                        <h3>Music Player</h3>
                        <ul class="skillContainer">
                          <li>
                            <p>#HTML</p>
                          </li>
                          <li>
                            <p>#CSS</p>
                          </li>
                          <li>
                            <p>#Javascript</p>
                          </li>
                          <li>
                            <p>#Node.js</p>
                          </li>
                          <li>
                            <p>#MySQL</p>
                          </li>
                        </ul>
                      </div>
                      <div class="textConatiner">
                        <p>DataBase와 Node.js를 이용하여</p>
                        <p>다시듣기, 빠른선곡, 좋아요기능을</p>
                        <p>구현한 뮤직플레이어 제작</p>
                      </div>
                      <div class="btnContainer">
                        <div class="pptMove"><a href="http://kkms4001.iptime.org/~c19st05/portfolio/MusicPlayer/PPT/music_player.pdf" target="_blank">PPT</a></div>
                        <div class="pptMove">   <a href="http://kkms4001.iptime.org:33040/login" target="_blank">SITE</a></div>
                      </div>
                    </div>
                  </div>
                  <div class="imageContainer"><img src="../images/music_port_img.png" alt="musicPlayer"></div>
                </div>
              </div>
              <div class="graphCalculator portContentBox">
                <div class="portfolioContainer">
                  <div class="imageContainer"><img src="../images/graph_calculator_port_img.png" alt="graphCalculator"></div>
                  <div class="infoContainer">
                    <div class="pofolContainer">
                      <div class="titleAndSkillContainer">
                        <h3>Graph Calculator</h3>
                        <ul class="skillContainer">
                          <li>
                            <p>#Pug</p>
                          </li>
                          <li>
                            <p>#Sass</p>
                          </li>
                          <li>
                            <p>#Javascript</p>
                          </li>
                        </ul>
                      </div>
                      <div class="textConatiner">
                        <p>이산수학을 바탕으로 수식을 입력하면</p>
                        <p>해당 수식을 시각화하여 그래프로 출력</p>
                      </div>
                      <div class="btnContainer">
                        <div class="pptMove"><a href="http://kkms4001.iptime.org/~c19st05/portfolio/Graph_Calculator/GrapicCalculator.pdf" target="_blank">PPT</a></div>
                        <div class="pptMove"><a href="http://kkms4001.iptime.org/~c19st05/portfolio/Graph_Calculator/views/" target="_blank">SITE</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="findHospital portContentBox">
                <div class="portfolioContainer">
                  <div class="infoContainer">
                    <div class="pofolContainer">
                      <div class="titleAndSkillContainer">
                        <h3>Find Hospital</h3>
                        <ul class="skillContainer">
                          <li>
                            <p>#Pug</p>
                          </li>
                          <li>
                            <p>#Sass</p>
                          </li>
                          <li>
                            <p>#Javascript</p>
                          </li>
                          <li>
                            <p>#Node.js</p>
                          </li>
                          <li>
                            <p>#MySQL</p>
                          </li>
                        </ul>
                      </div>
                      <div class="textConatiner">
                        <p>공공 API를 활용하여 병원 데이터를 불러와</p>
                        <p>사용자가 찾고자 하는 지역과 진료과목을 선택하면</p>
                        <p>정보와 일치하는 병원정보를 출력</p>
                      </div>
                      <div class="btnContainer">
                        <div class="pptMove"><a href="http://kkms4001.iptime.org/~c19st05/portfolio/findHospital/PublicAPI.pdf" target="_blank">PPT</a></div>
                        <div class="pptMove"><a href="http://kkms4001.iptime.org:33011/" target="_blank">SITE</a></div>
                      </div>
                    </div>
                  </div>
                  <div class="imageContainer"><img src="../images/findHospital_port_img.png" alt="findHospital"></div>
                </div>
              </div>
              <div class="todoList portContentBox">
                <div class="portfolioContainer">
                  <div class="imageContainer"><img src="../images/todoList_port_img.png" alt="todoList"></div>
                  <div class="infoContainer">
                    <div class="pofolContainer">
                      <div class="titleAndSkillContainer">
                        <h3>To Do List</h3>
                        <ul class="skillContainer">
                          <li>
                            <p>#React</p>
                          </li>
                          <li>
                            <p>#Node.js</p>
                          </li>
                          <li>
                            <p>#MySQL</p>
                          </li>
                        </ul>
                      </div>
                      <div class="textConatiner">
                        <p>날짜 별 할 일을 등록하고 해당 할 일을</p>
                        <p>수행하였는지 체크 여부를 통해 확인 가능한</p>
                        <p>To Do List</p>
                      </div>
                      <div class="btnContainer">
                        <div class="pptMove"><a href="http://kkms4001.iptime.org/~c19st17/portfolio/ToDoList.pdf" target="_blank">PPT</a></div>
                        <div class="pptMove"><a href="http://kkms4001.iptime.org:33169/login" target="_blank">SITE</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="section5 page">
              <div class="connectContainer">
                <div class="titleContainer">
                  <h2>당신과 나의 연결고리는 ?</h2>
                </div>
                <div class="contentsContainer">
                  <div class="iconContainer"><span class="phoneIcon"></span>
                    <div class="myInfo">
                      <p>010-8011-4841</p>
                      <div><a href="tel:01080114841">전화하기</a></div>
                    </div>
                  </div>
                  <div class="iconContainer"><span class="kakaoIcon"></span>
                    <div class="myInfo">
                      <p>ID : chn3623</p>
                      <div><a href="https://open.kakao.com/o/sPsrltig" target="_blank">카톡하기</a></div>
                    </div>
                  </div>
                  <div class="iconContainer"><span class="mailIcon"></span>
                    <div class="myInfo">
                      <p>pcr0807@naver.com</p>
                      <div><a href="mailto:pcr0807@naver.com">메일쓰기</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>`;
    this.PC_versionStyle = `<style>
                            main {
                              width: 100vw;
                              height: auto;
                              font-family: "IBM Plex Sans", sans-serif;
                              font-weight: 600;
                              font-style: normal;
                            }
                            main canvas {
                              position: fixed;
                              overflow-x: hidden;
                            }
                            main .page {
                              width: 100%;
                              height: 100vh;
                              position: relative;
                            }
                            main .section1 .nameContainerGradient {
                              width: 100%;
                              height: 80%;
                              position: absolute;
                              top: 0;
                              left: 0;
                            }
                            main .section1 .nameContainer {
                              width: 100%;
                              height: 80%;
                              display: flex;
                              justify-content: center;
                              align-items: center;
                              position: absolute;
                              top: 0;
                              left: 0;
                            }
                            main .section1 .nameContainer h1 {
                              font-size: 180px;
                              padding-bottom : 30px;
                              text-align: center;
                              background: linear-gradient(to right, #ff5f6d, #ffc371, #fffc00, #a1ffce, #69eacb, #62b4f9, #6a85b6, #a1c4);
                              -webkit-background-clip: text;
                              -webkit-text-fill-color: transparent;
                            }
                            main .section1 .textContainer {
                              width: 100%;
                              height: 130px;
                              display: flex;
                              flex-direction: column;
                              justify-content: space-between;
                              align-items: center;
                              position: absolute;
                              bottom: 2%;
                            }
                            main .section1 .textContainer p {
                              font-size: 30px;
                              font-weight: bold;
                              color: #313131;
                              text-align: center;
                            }
                            main .section1 .textContainer .scrollIcon {
                              width: 38px;
                              height: 50px;
                              background-image: url("../icons/scroll_icon.svg");
                              background-size: cover;
                              background-position: center center;
                              cursor: pointer;
                              transition: all 0.3s;
                              animation: dung 1.7s linear infinite;
                            }
                            main .section1 .textContainer .scrollIcon:hover {
                              opacity: 0.5;
                              animation: none;
                            }
                            @keyframes dung {
                              0% {
                                transform: translateY(5px);
                              }
                              50% {
                                transform: translateY(-5px);
                              }
                              100% {
                                transform: translateY(5px);
                              }
                            }
                            main .section2 {
                              display: flex;
                              flex-direction: row;
                              justify-content: center;
                              align-items: center;
                              gap : 100px;
                            }
                            main .section2 .contentContainer {
                              width: 40%;
                              display: flex;
                              flex-direction: row;
                              justify-content: space-around;
                              align-items: center;
                            }
                            main .section2 .contentContainer .imageContainer {
                              width: 550px;
                              display: flex;
                              flex-direction: row;
                              justify-content: center;
                              align-items: center;
                            }
                            main .section2 .contentContainer .imageContainer img {
                              width: 550px;
                              height: auto;
                              background-size: contain;
                              background-position: center center;
                              border-radius : 5px;
                            }
                            main .section2 .infoContainer {
                              width: 45%;
                              height: 800px;
                              display: flex;
                              flex-direction: column;
                              justify-content: space-between;
                              align-items: flex-start;
                              position: relative;
                            }
                            main .section2 .infoContainer .myInfoContainer p {
                              color: #212121;
                              font-size: 40px;
                            }
                            main .section2 .infoContainer .myInfoContainer p .addressText {
                              color: #A1C4FD;
                            }
                            main .section2 .infoContainer .myInfoContainer p .birthText {
                              color: #A1C4FD;
                            }
                            main .section2 .infoContainer .myInfoContainer p .myText {
                              color: #A1C4FD;
                            }
                            main .section2 .infoContainer .container1 {
                              position: absolute;
                              top: 10%;
                              left: 0%;
                            }
                            main .section2 .infoContainer .container2 {
                              position: absolute;
                              top: 20%;
                              left: 0%;
                              width: 410px;
                            }
                            main .section2 .infoContainer .container3 {
                              position: absolute;
                              top: 30%;
                              left: 0%;
                            }
                            main .section2 .infoContainer .container4 {
                              position: absolute;
                              top: 40%;
                              left: 0%;
                            }
                            main .section2 .infoContainer .nameContainer {
                              position: absolute;
                              bottom: 0%;
                              left: 0%;
                            }
                            main .section2 .infoContainer .nameContainer p {
                              width: 100%;
                              text-align: center;
                              font-family: "IBM Plex Sans KR", sans-serif;
                              font-weight: 600;
                              font-style: normal;
                              font-size: 220px;
                            }
                            main .section3 {
                              display: flex;
                              flex-direction: column;
                              justify-content: space-around;
                              align-items: center;
                            }
                            main .section3 .frontContainer {
                              width: 100%;
                              height: 40%;
                              padding-top : 50px;
                              display: flex;
                              flex-direction: row;
                              justify-content: space-start;
                              align-items: center;
                              position: relative;
                            }
                            main .section3 .frontContainer .frontTitle {
                              font-size: 60px;
                              color: #313131;
                              position: absolute;
                              top: 78%;
                              right: 4%;
                            }
                            main .section3 .frontContainer ul {
                              width: 80%;
                              display: flex;
                              flex-direction: row;
                              justify-content: space-around;
                              align-items: center;
                              padding: 20px;
                              border-bottom: 3px solid #d0d0d0;
                            }
                            main .section3 .frontContainer ul li {
                              width: 130px;
                              height: 130px;
                              display: flex;
                              flex-direction: column;
                              justify-content: space-between;
                              align-items: center;
                            }
                            main .section3 .frontContainer ul li img {
                              width: 60%;
                              height: auto;
                            }
                            main .section3 .frontContainer ul li p {
                              color: #212121;
                              font-size: 20px;
                              padding: 5px;
                            }
                            main .section3 .skillContainer {
                              width: 100%;
                              height: 10%;
                              display: flex;
                              justify-content: center;
                              align-items: center;
                            }
                            main .section3 .skillContainer p {
                              color: #313131;
                              font-size: 100px;
                            }
                            main .section3 .backContainer {
                              width: 100%;
                              height: 40%;
                              display: flex;
                              flex-direction: row;
                              justify-content: flex-end;
                              align-items: center;
                              position: relative;
                              padding-bottom : 50px;
                            }
                            main .section3 .backContainer .backTitle {
                              font-size: 60px;
                              color: #313131;
                              position: absolute;
                              top: 64%;
                              left: 7%;
                            }
                            main .section3 .backContainer ul {
                              width: 80%;
                              display: flex;
                              flex-direction: row;
                              justify-content: space-around;
                              align-items: center;
                              padding: 20px;
                              border-bottom: 3px solid #d0d0d0;
                            }
                            main .section3 .backContainer ul li {
                              width: 130px;
                              height: 130px;
                              display: flex;
                              flex-direction: column;
                              justify-content: space-between;
                              align-items: center;
                            }
                            main .section3 .backContainer ul li img {
                              width: 60%;
                              height: auto;
                            }
                            main .section3 .backContainer ul li p {
                              padding: 5px;
                              color: #212121;
                              font-size: 20px;
                            }
                            main .innerBox{
                              height : 100px;
                            }
                            main .section4{
                              height : auto;
                            }
                            main .section4 .titleContainer {
                              padding: 5%;
                            }
                            main .section4 .titleContainer h2 {
                              color: #212121;
                              font-size: 60px;
                            }
                              main .section4 .titleContainer h2 span{
                              color: #212121;
                              font-size: 36px;
                            }
                            main .section4 .portContentBox .portfolioContainer {
                              width: 80%;
                              height: 450px;
                              margin: 160px auto;
                              display: flex;
                              flex-direction: row;
                              justify-content: center;
                              align-items: center;
                              gap : 100px;
                            }
                            main .section4 .portContentBox .portfolioContainer .imageContainer {
                              width: 700px;
                              height: 400px;
                              display: flex;
                              justify-content: center;
                              align-items: center;
                            }
                            main .section4 .portContentBox .portfolioContainer .imageContainer img {
                              width: 700px;
                              height: 400px;
                              border-radius : 5px;
                              border : 1px solid #333;
                            }
                            main .section4 .portContentBox .portfolioContainer .infoContainer {
                              width: 35%;
                              height: 400px;
                            }
                            main .section4 .portContentBox .portfolioContainer .infoContainer .pofolContainer {
                              width: 400px;
                              height: 100%;
                              display: flex;
                              flex-direction: column;
                              justify-content: center;
                              align-items: flex-start;
                            }
                            main .section4 .portContentBox .portfolioContainer .infoContainer .pofolContainer .titleAndSkillContainer {
                              width: 100%;
                              display: flex;
                              flex-direction: column;
                              justify-content: center;
                              align-items: flex-start;
                            }
                            main .section4 .portContentBox .portfolioContainer .infoContainer .pofolContainer .titleAndSkillContainer h3 {
                              color: #212121;
                              font-size: 44px;
                            }
                            main .section4 .portContentBox .portfolioContainer .infoContainer .pofolContainer .titleAndSkillContainer .skillContainer {
                              width: 90%;
                              display: flex;
                              flex-direction: row;
                              justify-content: flex-start;
                              align-items: center;
                              gap: 10px;
                            }
                            main .section4 .portContentBox .portfolioContainer .infoContainer .pofolContainer .titleAndSkillContainer .skillContainer li {
                              display: flex;
                              flex-direction : row;
                              justify-content: center;
                              align-items: flex-start;
                            }
                            main .section4 .portContentBox .portfolioContainer .infoContainer .pofolContainer .titleAndSkillContainer .skillContainer li p {
                              color: #313131;
                              font-size: 22px;
                            }
                            main .section4 .portContentBox .portfolioContainer .infoContainer .pofolContainer .textConatiner {
                              width: 80%;
                              margin-top: 50px;
                              display: flex;
                              flex-direction : column;
                              justify-content: center;
                              align-items: flex-start;
                            }
                            main .section4 .portContentBox .portfolioContainer .infoContainer .pofolContainer .textConatiner p {
                              color: #313131;
                              font-size: 22px;
                              white-space: nowrap;
                            }
                            main .section4 .portContentBox .portfolioContainer .infoContainer .pofolContainer .btnContainer {
                              width: 100%;
                              margin-top: auto;
                              display: flex;
                              flex-direction: row;
                              justify-content: flex-start;
                              align-items: center;
                              gap: 20px;

                            }
                            main .section4 .portContentBox .portfolioContainer .infoContainer .pofolContainer .btnContainer .pptMove {
                              width: 150px;
                              height: 50px;
                              border-radius: 25px;
                              border: 1.5px solid #313131;
                              transition: all 0.3s;
                              display: flex;
                              justify-content: center;
                              align-items: center;
                            }
                            main .section4 .portContentBox .portfolioContainer .infoContainer .pofolContainer .btnContainer .pptMove:hover {
                              background-color: #313131;
                              color: #fefefe;
                            }
                            main .section4 .portContentBox .portfolioContainer .infoContainer .pofolContainer .btnContainer .pptMove:hover a {
                              color: #fefefe;
                            }
                            main .section4 .portContentBox .portfolioContainer .infoContainer .pofolContainer .btnContainer .pptMove a {
                              padding: 50px;
                              text-decoration: none;
                              color: #313131;
                            }
                            main .section5 {
                              display: flex;
                              justify-content: center;
                              align-items: center;
                            }
                            main .section5 .connectContainer {
                              width: 60%;
                              height: 70%;
                              display: flex;
                              flex-direction: column;
                              justify-content: space-around;
                              align-items: center;
                            }
                            main .section5 .connectContainer .titleContainer {
                              width: 100%;
                              height: 20%;
                              display: flex;
                              justify-content: center;
                              align-items: center;
                            }
                            main .section5 .connectContainer .titleContainer h2 {
                              color: #313131;
                              font-size: 56px;
                            }
                            main .section5 .connectContainer .contentsContainer {
                              width: 100%;
                              height: 70%;
                              display: flex;
                              flex-direction: row;
                              justify-content: space-between;
                              align-items: center;
                            }
                            main .section5 .connectContainer .contentsContainer .iconContainer {
                              width: 100%;
                              height: 70%;
                              display: flex;
                              flex-direction: column;
                              justify-content: space-between;
                              align-items: center;
                            }
                            main .section5 .connectContainer .contentsContainer .iconContainer .phoneIcon {
                              display: block;
                              width: 150px;
                              height: 150px;
                              background-image: url("../icons/phone_icon.svg");
                              background-size: contain;
                              background-position: center center;
                              background-repeat: no-repeat;
                            }
                            main .section5 .connectContainer .contentsContainer .iconContainer .kakaoIcon {
                              display: block;
                              width: 150px;
                              height: 150px;
                              background-image: url("../icons/kakao_icon.svg");
                              background-size: contain;
                              background-position: center center;
                              background-repeat: no-repeat;
                            }
                            main .section5 .connectContainer .contentsContainer .iconContainer .mailIcon {
                              display: block;
                              width: 150px;
                              height: 150px;
                              background-image: url("../icons/mail_icon.svg");
                              background-size: contain;
                              background-position: center center;
                              background-repeat: no-repeat;
                            }
                            main .section5 .connectContainer .contentsContainer .iconContainer .myInfo {
                              height: 100px;
                              padding-bottom: 20px;
                              display: flex;
                              flex-direction: column;
                              justify-content: space-between;
                              align-items: center;
                            }
                            main .section5 .connectContainer .contentsContainer .iconContainer .myInfo p {
                              font-size: 20px;
                            }
                            main .section5 .connectContainer .contentsContainer .iconContainer .myInfo div {
                              width: 150px;
                              height: 50px;
                              border: 1px solid #313131;
                              border-radius: 25px;
                              display: flex;
                              justify-content: center;
                              align-items: center;
                              transition: all 0.3s;
                              cursor: pointer;
                            }
                            main .section5 .connectContainer .contentsContainer .iconContainer .myInfo div:hover {
                              background-color: #212121;
                            }
                            main .section5 .connectContainer .contentsContainer .iconContainer .myInfo div:hover a {
                              color: #fefefe;
                              text-decoration : none;
                            }
                            main .section5 .connectContainer .contentsContainer .iconContainer .myInfo div a {
                              outline: 0;
                              font-size: 14px;
                              text-decoration: none;
                              transition: all 0.3s;
                              padding : 30px;
                            }
                        </style>`;
    this.M_versionDOM = `<section class="section1 page">
                              <div class="nameContainerGradient"></div>
                              <div class="nameContainer">
                                <h1>Chan Ryong</h1>
                              </div>
                              <div class="textContainer">
                                <p>
                                  Scroll</p>
                                <div class="scrollIcon" id="scroll"></div>
                              </div>
                            </section>
                            <section class="section2 page">
                              <div class="infoContainer">
                              <div class="container1 myInfoContainer">
                                <p> <span class="addressText">안산시 단원구</span></p>
                              </div>
                              <div class="container2 myInfoContainer">
                                <p> <span class="birthText">1999. 08. 07.</span></p>
                              </div>
                              <div class="container3 myInfoContainer">
                                <p><span class="myText">배움에 대한 열정이 있는 개발자</span></p>
                              </div>
                              </div>
                              <div class="contentContainer">
                                <div class="imageContainer"><img src="../images/myImage.jpeg" alt="myImage"></div>
                              </div>
                              <div class="nameContentContainer">
                                <div class="nameContainer myInfoContainer">
                                  <p>박찬룡입니다.</p>
                                </div>
                              </div>
                            </section>
                            <section class="section3 page">
                              <div class="frontContainer">
                                <p class="frontTitle">FRONT-END</p>
                                <ul>
                                  <li><img src="../icons/html_icon.png" alt="HTML">
                                    <p>HTML</p>
                                  </li>
                                  <li><img src="../icons/css_icon.png" alt="CSS">
                                    <p>CSS</p>
                                  </li>
                                  <li><img src="../icons/pug_icon.png" alt="pug">
                                    <p>Pug</p>
                                  </li>
                                  <li><img src="../icons/sass_icon.png" alt="Sass">
                                    <p>Sass</p>
                                  </li>
                                  <li><img src="../icons/js_icon.png" alt="Javascript">
                                    <p>Javascript</p>
                                  </li>
                                  <li><img src="../icons/typescript_icon.png" alt="typescript">
                                    <p>Typescript</p>
                                  </li>
                                  <li><img src="../icons/json_icon.png" alt="JSON">
                                    <p>JSON</p>
                                  </li>
                                </ul>
                              </div>
                              <div class="backContainer">
                                <p class="backTitle">BACK-END</p>
                                <ul>
                                  <li><img src="../icons/node_icon.png" alt="Node.js">
                                    <p>Node.js</p>
                                  </li>
                                  <li><img src="../icons/python_icon.png" alt="Python">
                                    <p>Python</p>
                                  </li>
                                  <li><img src="../icons/django.png" alt="Django">
                                    <p>Django</p>
                                  </li>
                                  <li><img src="../icons/sql_icon.png" alt="MySQL">
                                    <p>MySQL</p>
                                  </li>
                                  <li><img src="../icons/ajax_icon.png" alt="AJAX">
                                    <p>AJAX</p>
                                  </li>
                                  <li><img src="../icons/linux_icon.png" alt="Linux">
                                    <p>Linux</p>
                                  </li>
                                  <li><img src="../icons/vim_icon.png" alt="vim">
                                    <p>VIM</p>
                                  </li>
                                </ul>
                              </div>
                            </section>
                            <section class="section4 page">
                              <div class="titleContainer">
                                <h2>포트폴리오.<br> <span>단조로움을 거부한다.</span></h2>
                              </div>
                              <div class="matrixCalculator portContentBox">
                                <div class="portfolioContainer">
                                  <div class="imageContainer"><img src="../images/matrix_port_img.png" alt="matrixCalculator"></div>
                                  <div class="infoContainer">
                                    <div class="pofolContainer">
                                      <div class="titleAndSkillContainer">
                                        <h3>Matrix Calculator</h3>
                                        <ul class="skillContainer">
                                          <li>
                                            <p>#HTML</p>
                                          </li>
                                          <li>
                                            <p>#CSS</p>
                                          </li>
                                          <li>
                                            <p>#Javascript</p>
                                          </li>
                                        </ul>
                                      </div>
                                      <div class="textConatiner">
                                        <p>행렬 연산과 함께 시각화 기능을 제공하여 결과를 직관적으로 표시</p>
                                      </div>
                                      <div class="btnContainer">
                                        <div class="pptMove"><a href="http://kkms4001.iptime.org/~c19st05/portfolio/matrixcalculator/%ed%96%89%eb%a0%ac%ea%b3%84%ec%82%b0%ea%b8%b0.pdf" target="_blank">PPT</a></div>
                                        <div class="pptMove">   <a href="http://kkms4001.iptime.org/~c19st05/portfolio/matrixcalculator/matrixCalculator.html" target="_blank">SITE</a></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="lineGraph portContentBox">
                                <div class="portfolioContainer">
                                  <div class="imageContainer"><img src="../images/line_port_img.png" alt="matrixCalculator"></div>
                                  <div class="infoContainer">
                                    <div class="pofolContainer">
                                      <div class="titleAndSkillContainer">
                                        <h3>Line Graph</h3>
                                        <ul class="skillContainer">
                                          <li>
                                            <p>#HTML</p>
                                          </li>
                                          <li>
                                            <p>#CSS</p>
                                          </li>
                                          <li>
                                            <p>#Javascript</p>
                                          </li>
                                        </ul>
                                      </div>
                                      <div class="textConatiner">
                                        <p>AJAX를 통해 JSON 서버와 연동하여 JSON의 값을 추출 후 해당 값을 통해 직선그래프로 출력</p>
                                      </div>
                                      <div class="btnContainer">
                                        <div class="pptMove"><a href="http://kkms4001.iptime.org/~c19st05/portfolio/graph/graph-ppt/LineGraph.pdf" target="_blank">PPT</a></div>
                                        <div class="pptMove">   <a href="http://kkms4001.iptime.org/~c19st05/portfolio/graph/graph.html" target="_blank">SITE</a></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="homeDashBoard portContentBox">
                                <div class="portfolioContainer">
                                  <div class="imageContainer"><img src="../images/dashboard_port_img.png" alt="matrixCalculator"></div>
                                  <div class="infoContainer">
                                    <div class="pofolContainer">
                                      <div class="titleAndSkillContainer">
                                        <h3>Home DashBoard</h3>
                                        <ul class="skillContainer">
                                          <li>
                                            <p>#Pug</p>
                                          </li>
                                          <li>
                                            <p>#Sass</p>
                                          </li>
                                          <li>
                                            <p>#Javascript</p>
                                          </li>
                                          <li>
                                            <p>#Node.js</p>
                                          </li>
                                        </ul>
                                      </div>
                                      <div class="textConatiner">
                                        <p>전기, 수도, 가스 사용량의 데이터를 실시간으로 받아와 사용기간에 따라 적합한 형태로 시각화</p>
                                      </div>
                                      <div class="btnContainer">
                                        <div class="pptMove"><a href="http://kkms4001.iptime.org/~c19st05/portfolio/dashboard/PPT/%ec%8b%a4%ec%8b%9c%ea%b0%84%20%ec%8a%a4%eb%a7%88%ed%8a%b8%20%ed%99%88%20%eb%8c%80%ec%8b%9c%eb%b3%b4%eb%93%9c.pdf" target="_blank">PPT</a></div>
                                        <div class="pptMove">   <a href="http://kkms4001.iptime.org:33201/home" target="_blank">SITE</a></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="musicPlayer portContentBox">
                                <div class="portfolioContainer">
                                  <div class="imageContainer"><img src="../images/music_port_img.png" alt="musicPlayer"></div>
                                  <div class="infoContainer">
                                    <div class="pofolContainer">
                                      <div class="titleAndSkillContainer">
                                        <h3>Music Player</h3>
                                        <ul class="skillContainer">
                                          <li>
                                            <p>#HTML</p>
                                          </li>
                                          <li>
                                            <p>#CSS</p>
                                          </li>
                                          <li>
                                            <p>#Javascript</p>
                                          </li>
                                          <li>
                                            <p>#Node.js</p>
                                          </li>
                                          <li>
                                            <p>#MySQL</p>
                                          </li>
                                        </ul>
                                      </div>
                                      <div class="textConatiner">
                                        <p>DataBase와 Node.js를 이용하여 다시듣기, 빠른선곡, 좋아요 기능을 구현한 뮤직 플레이어 제작</p>
                                      </div>
                                      <div class="btnContainer">
                                        <div class="pptMove"><a href="http://kkms4001.iptime.org/~c19st05/portfolio/MusicPlayer/PPT/music_player.pdf" target="_blank">PPT</a></div>
                                        <div class="pptMove">   <a href="http://kkms4001.iptime.org:33040/login" target="_blank">SITE</a></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="graphCalculator portContentBox">
                                <div class="portfolioContainer">
                                  <div class="imageContainer"><img src="../images/graph_calculator_port_img.png" alt="graphCalculator"></div>
                                  <div class="infoContainer">
                                    <div class="pofolContainer">
                                      <div class="titleAndSkillContainer">
                                        <h3>Graph Calculator</h3>
                                        <ul class="skillContainer">
                                          <li>
                                            <p>#Pug</p>
                                          </li>
                                          <li>
                                            <p>#Sass</p>
                                          </li>
                                          <li>
                                            <p>#Javascript</p>
                                          </li>
                                        </ul>
                                      </div>
                                      <div class="textConatiner">
                                        <p>이산수학을 바탕으로 수식을 입력하면 해당 수식을 시각화하여 그래프로 출력</p>
                                      </div>
                                      <div class="btnContainer">
                                        <div class="pptMove"><a href="http://kkms4001.iptime.org/~c19st05/portfolio/Graph_Calculator/GrapicCalculator.pdf" target="_blank">PPT</a></div>
                                        <div class="pptMove">   <a href="http://kkms4001.iptime.org/~c19st05/portfolio/Graph_Calculator/views/" target="_blank">SITE</a></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="findHospital portContentBox">
                                <div class="portfolioContainer">
                                  <div class="imageContainer"><img src="../images/findHospital_port_img.png" alt="graphCalculator"></div>
                                  <div class="infoContainer">
                                    <div class="pofolContainer">
                                      <div class="titleAndSkillContainer">
                                        <h3>Find Hospital</h3>
                                        <ul class="skillContainer">
                                          <li>
                                            <p>#Pug</p>
                                          </li>
                                          <li>
                                            <p>#Sass</p>
                                          </li>
                                          <li>
                                            <p>#Javascript</p>
                                          </li>
                                          <li>
                                            <p>#Node.js</p>
                                          </li>
                                          <li>
                                            <p>#MySQL</p>
                                          </li>
                                        </ul>
                                      </div>
                                      <div class="textConatiner">
                                        <p>공공 API를 활용하여 병원 데이터를 불러와 사용자가 찾고자 하는 지역과 진료과목을 선택하면 정보와 일치하는 병원정보를 출력</p>
                                      </div>
                                      <div class="btnContainer">
                                        <div class="pptMove"><a href="http://kkms4001.iptime.org/~c19st05/portfolio/findHospital/PublicAPI.pdf" target="_blank">PPT</a></div>
                                        <div class="pptMove"><a href="http://kkms4001.iptime.org:33011/" target="_blank">SITE</a></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="todoList portContentBox">
                                <div class="portfolioContainer">
                                  <div class="imageContainer"><img src="../images/todoList_port_img.png" alt="graphCalculator"></div>
                                  <div class="infoContainer">
                                    <div class="pofolContainer">
                                      <div class="titleAndSkillContainer">
                                        <h3>ToDoList</h3>
                                        <ul class="skillContainer">
                                          <li>
                                            <p>#React</p>
                                          </li>
                                          <li>
                                            <p>#Node.js</p>
                                          </li>
                                          <li>
                                            <p>#MySQL</p>
                                          </li>
                                        </ul>
                                      </div>
                                      <div class="textConatiner">
                                        <p>날짜 별 할 일을 등록하고 해당 할 일을 수행하였는지 체크 여부를 통해 확인 가능한 To Do List</p>
                                      </div>
                                      <div class="btnContainer">
                                        <div class="pptMove"><a href="http://kkms4001.iptime.org/~c19st17/portfolio/ToDoList.pdf" target="_blank">PPT</a></div>
                                        <div class="pptMove"><a href="http://kkms4001.iptime.org:33169/login" target="_blank">SITE</a></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section>
                            <section class="section5 page">
                              <div class="connectContainer">
                                <div class="titleContainer">
                                  <h2>당신과 나의 연결고리는 ?</h2>
                                </div>
                                <div class="contentsContainer">
                                  <div class="iconContainer"><span class="phoneIcon"></span>
                                    <div class="myInfo">
                                      <p>010-8011-4841</p>
                                      <div><a href="tel:01080114841">전화하기</a></div>
                                    </div>
                                  </div>
                                  <div class="iconContainer"><span class="kakaoIcon"></span>
                                    <div class="myInfo">
                                      <p>ID : chn3623</p>
                                      <div><a href="https://open.kakao.com/o/sPsrltig" target="_blank">카톡하기</a></div>
                                    </div>
                                  </div>
                                  <div class="iconContainer"><span class="mailIcon"></span>
                                    <div class="myInfo">
                                      <p>pcr0807@naver.com</p>
                                      <div><a href="mailto:pcr0807@naver.com">메일쓰기</a></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section>`;
    this.M_versionStyle = `<style>
                            main {
                              width: 100vw;
                              height: auto;
                              font-family: "IBM Plex Sans", sans-serif;
                              font-weight: 600;
                              font-style: normal;
                            }
                            main canvas {
                              position: fixed;
                              overflow-x: hidden;
                            }
                            main .page {
                              width: 100%;
                              height: 100vh;
                              position: relative;
                            }
                            main .section1 .nameContainerGradient {
                              width: 100%;
                              height: 80%;
                              position: absolute;
                              top: 0;
                              left: 0;
                            }
                            main .section1 .nameContainer {
                              width: 100%;
                              height: 80%;
                              display: flex;
                              justify-content: center;
                              align-items: center;
                              position: absolute;
                              top: 0;
                              left: 0;
                            }
                            main .section1 .nameContainer h1 {
                              font-size: 60px;
                              padding-bottom : 30px;
                              text-align: center;
                              background: linear-gradient(to right, #ff5f6d, #ffc371, #fffc00, #a1ffce, #69eacb, #62b4f9, #6a85b6, #a1c4);
                              -webkit-background-clip: text;
                              -webkit-text-fill-color: transparent;
                            }
                            main .section1 .textContainer {
                              width: 100%;
                              height: 130px;
                              display: flex;
                              flex-direction: column;
                              justify-content: space-between;
                              align-items: center;
                              position: absolute;
                              bottom: 2%;
                            }
                            main .section1 .textContainer p {
                              font-size: 30px;
                              font-weight: bold;
                              color: #313131;
                              text-align: center;
                            }
                            main .section1 .textContainer .scrollIcon {
                              width: 38px;
                              height: 50px;
                              background-image: url("../icons/scroll_icon.svg");
                              background-size: cover;
                              background-position: center center;
                              cursor: pointer;
                              transition: all 0.3s;
                              animation: dung 1.7s linear infinite;
                            }
                            main .section1 .textContainer .scrollIcon:hover {
                              opacity: 0.5;
                              animation: none;
                            }
                            @keyframes dung {
                              0% {
                                transform: translateY(5px);
                              }
                              50% {
                                transform: translateY(-5px);
                              }
                              100% {
                                transform: translateY(5px);
                              }
                            }
                            main .section2 {
                              height: auto;
                              display: flex;
                              flex-direction: column;
                              justify-content: space-around;
                              align-items: center;
                            }
                            main .section2 .contentContainer {
                              width: 100%;
                              display: flex;
                              flex-direction: row;
                              justify-content: space-around;
                              align-items: center;
                            }
                            main .section2 .contentContainer .imageContainer {
                              width: 40%;
                              display: flex;
                              flex-direction: row;
                              justify-content: center;
                              align-items: center;
                              padding: 10px;
                            }
                            main .section2 .contentContainer .imageContainer img {
                              width: 350px;
                              height: auto;
                              background-size: contain;
                              background-position: center center;
                            }
                            main .section2 .nameContentContainer {
                              width: 100%;
                            }
                            main .section2 .nameContentContainer .nameContainer {
                              width: 100%;
                              padding: 10px;
                            }
                            main .section2 .nameContentContainer .nameContainer p {
                              text-align: center;
                              color: #212121;
                              font-size: 45px;
                            }
                            main .section2 .nameContentContainer .nameContainer p span {
                              color: #387ADF;
                            }
                            main .section2 .infoContainer {
                              width: 100%;
                              height: 250px;
                              display: flex;
                              flex-direction: column;
                              justify-content: space-between;
                              align-items: flex-start;
                              position: relative;
                              margin-top : 50px;
                            }
                            main .section2 .infoContainer .myInfoContainer p {
                              color: #212121;
                              font-size: 28px;
                            }
                            main .section2 .infoContainer .myInfoContainer p span {
                              color: #387ADF;
                            }
                            main .section2 .infoContainer .container1 {
                              position: absolute;
                              top: 10%;
                              left: 10%;
                            }
                            main .section2 .infoContainer .container2 {
                              position: absolute;
                              top: 30%;
                              left: 10%;
                              width: 410px;
                            }
                            main .section2 .infoContainer .container3 {
                              position: absolute;
                              top: 50%;
                              left: 10%;
                            }
                            main .section3 {
                              display: flex;
                              flex-direction: column;
                              justify-content: space-evenly;
                              align-items: center;
                            }
                            main .section3 .frontContainer {
                              width: 100%;
                              height: 40%;
                              display: flex;
                              flex-direction: row;
                              justify-content: space-start;
                              align-items: center;
                              position: relative;
                            }
                            main .section3 .frontContainer .frontTitle {
                              font-size: 50px;
                              color: #313131;
                              position: absolute;
                              top: 67%;
                              right: 4%;
                            }
                            main .section3 .frontContainer ul {
                              width: 85%;
                              display: flex;
                              flex-direction: row;
                              justify-content: space-around;
                              align-items: center;
                              padding: 20px;
                              border-bottom: 3px solid #d0d0d0;
                            }
                            main .section3 .frontContainer ul li {
                              width: 60px;
                              height: 60px;
                              display: flex;
                              flex-direction: column;
                              justify-content: space-between;
                              align-items: center;
                            }
                            main .section3 .frontContainer ul li img {
                              width: 50%;
                              height: auto;
                            }
                            main .section3 .frontContainer ul li p {
                              color: #212121;
                              font-size: 12px;
                              padding: 5px;
                            }
                            main .section3 .backContainer {
                              width: 100%;
                              height: 40%;
                              display: flex;
                              flex-direction: row;
                              justify-content: flex-end;
                              align-items: center;
                              position: relative;
                            }
                            main .section3 .backContainer .backTitle {
                              font-size: 50px;
                              color: #313131;
                              position: absolute;
                              top: 67%;
                              left: 7%;
                            }
                            main .section3 .backContainer ul {
                              width: 85%;
                              display: flex;
                              flex-direction: row;
                              justify-content: space-around;
                              align-items: center;
                              padding: 20px;
                              border-bottom: 3px solid #d0d0d0;
                            }
                            main .section3 .backContainer ul li {
                              width: 60px;
                              height: 60px;
                              display: flex;
                              flex-direction: column;
                              justify-content: space-between;
                              align-items: center;
                            }
                            main .section3 .backContainer ul li img {
                              width: 50%;
                              height: auto;
                            }
                            main .section3 .backContainer ul li p {
                              padding: 5px;
                              color: #212121;
                              font-size: 12px;
                            }
                            main .section4{
                              height : auto;
                            }
                            main .section4 .titleContainer {
                              padding: 10% 0 0 10%;
                            }
                            main .section4 .titleContainer h2 {
                              color: #212121;
                              font-size: 30px;
                            }
                            main .section4 .portContentBox .portfolioContainer {
                              width: 100%;
                              height: 550px;
                              margin: 0 auto;
                              display: flex;
                              flex-direction: column;
                              justify-content: space-between;
                              align-items: center;
                              margin-top : 50px;
                            }
                            main .section4 .portContentBox .portfolioContainer .imageContainer {
                              width: 50%;
                              height: 40%;
                              display: flex;
                              justify-content: center;
                              align-items: center;
                            }
                            main .section4 .portContentBox .portfolioContainer .imageContainer img {
                              width: 350px;
                              height: auto;
                              border : 1px solid #333;
                              border-radius : 5px;
                            }
                            main .section4 .portContentBox .portfolioContainer .infoContainer {
                              width: 100%;
                              height: 300px;
                            }
                            main .section4 .portContentBox .portfolioContainer .infoContainer .pofolContainer {
                              width: 100%;
                              height: 90%;
                              display: flex;
                              flex-direction: column;
                              justify-content: center;
                              align-items: center;
                            }
                            main .section4 .portContentBox .portfolioContainer .infoContainer .pofolContainer .titleAndSkillContainer {
                              width: 80%;
                              display: flex;
                              flex-direction: column;
                              justify-content: center;
                              align-items: flex-start;
                            }
                            main .section4 .portContentBox .portfolioContainer .infoContainer .pofolContainer .titleAndSkillContainer h3 {
                              color: #212121;
                              font-size: 30px;
                            }
                            main .section4 .portContentBox .portfolioContainer .infoContainer .pofolContainer .titleAndSkillContainer .skillContainer {
                              width: 90%;
                              display: flex;
                              flex-direction: row;
                              justify-content: flex-start;
                              align-items: center;
                              gap: 10px;
                            }
                            main .section4 .portContentBox .portfolioContainer .infoContainer .pofolContainer .titleAndSkillContainer .skillContainer li {
                              display: flex;
                              justify-content: center;
                              align-items: center;
                            }
                            main .section4 .portContentBox .portfolioContainer .infoContainer .pofolContainer .titleAndSkillContainer .skillContainer li p {
                              color: #313131;
                              font-size: 16px;
                            }
                            main .section4 .portContentBox .portfolioContainer .infoContainer .pofolContainer .textConatiner {
                              width: 80%;
                              margin-top: 50px;
                              display: flex;
                              flex-direction: column;
                              justify-content: center;
                              align-items: flex-start;
                            }
                            main .section4 .portContentBox .portfolioContainer .infoContainer .pofolContainer .textConatiner p {
                              color: #313131;
                              font-size: 16px;
                            }
                            main .section4 .portContentBox .portfolioContainer .infoContainer .pofolContainer .btnContainer {
                              width: 100%;
                              margin: 0 auto;
                              display: flex;
                              flex-direction: row;
                              justify-content: center;
                              align-items: center;
                              gap: 20px;
                              margin-top: auto;
                            }
                            main .section4 .portContentBox .portfolioContainer .infoContainer .pofolContainer .btnContainer .pptMove {
                              width: 150px;
                              height: 50px;
                              border-radius: 25px;
                              border: 1.5px solid #313131;
                              transition: all 0.3s;
                              display: flex;
                              justify-content: center;
                              align-items: center;
                            }
                            main .section4 .portContentBox .portfolioContainer .infoContainer .pofolContainer .btnContainer .pptMove:hover {
                              background-color: #313131;
                              color: #fefefe;
                            }
                            main .section4 .portContentBox .portfolioContainer .infoContainer .pofolContainer .btnContainer .pptMove:hover a {
                              color: #fefefe;
                            }
                            main .section4 .portContentBox .portfolioContainer .infoContainer .pofolContainer .btnContainer .pptMove a {
                              padding: 50px;
                              text-decoration: none;
                              color: #313131;
                            }
                            main .section5 {
                              display: flex;
                              justify-content: center;
                              align-items: center;
                            }
                            main .section5 .connectContainer {
                              width: 100%;
                              height: 70%;
                              display: flex;
                              flex-direction: column;
                              justify-content: space-around;
                              align-items: center;
                            }
                            main .section5 .connectContainer .titleContainer {
                              width: 100%;
                              height: 20%;
                              display: flex;
                              justify-content: center;
                              align-items: center;
                            }
                            main .section5 .connectContainer .titleContainer h2 {
                              color: #313131;
                              font-size: 36px;
                            }
                            main .section5 .connectContainer .contentsContainer {
                              width: 100%;
                              height: 70%;
                              display: flex;
                              flex-direction: row;
                              justify-content: space-between;
                              align-items: center;
                            }
                            main .section5 .connectContainer .contentsContainer .iconContainer {
                              width: 33.3333333333%;
                              height: 70%;
                              display: flex;
                              flex-direction: column;
                              justify-content: space-between;
                              align-items: center;
                            }
                            main .section5 .connectContainer .contentsContainer .iconContainer .phoneIcon {
                              display: block;
                              width: 100px;
                              height: 100px;
                              background-image: url("../icons/phone_icon.svg");
                              background-size: contain;
                              background-position: center center;
                              background-repeat: no-repeat;
                            }
                            main .section5 .connectContainer .contentsContainer .iconContainer .kakaoIcon {
                              display: block;
                              width: 100px;
                              height: 100px;
                              background-image: url("../icons/kakao_icon.svg");
                              background-size: contain;
                              background-position: center center;
                              background-repeat: no-repeat;
                            }
                            main .section5 .connectContainer .contentsContainer .iconContainer .mailIcon {
                              display: block;
                              width: 100px;
                              height: 100px;
                              background-image: url("../icons/mail_icon.svg");
                              background-size: contain;
                              background-position: center center;
                              background-repeat: no-repeat;
                            }
                            main .section5 .connectContainer .contentsContainer .iconContainer .myInfo {
                              height: 70px;
                              padding-bottom: 20px;
                              display: flex;
                              flex-direction: column;
                              justify-content: space-between;
                              align-items: center;
                            }
                            main .section5 .connectContainer .contentsContainer .iconContainer .myInfo p {
                              font-size: 14px;
                            }
                            main .section5 .connectContainer .contentsContainer .iconContainer .myInfo div {
                              width: 100px;
                              height: 40px;
                              border: 1px solid #313131;
                              border-radius: 20px;
                              display: flex;
                              justify-content: center;
                              align-items: center;
                              transition: all 0.3s;
                              cursor: pointer;
                            }
                            main .section5 .connectContainer .contentsContainer .iconContainer .myInfo div:hover {
                              background-color: #212121;
                            }
                            main .section5 .connectContainer .contentsContainer .iconContainer .myInfo div:hover a {
                              color: #fefefe;
                            }
                            main .section5 .connectContainer .contentsContainer .iconContainer .myInfo div a {
                              outline: 0;
                              font-size: 14px;
                              text-decoration: none;
                              transition: all 0.3s;
                              padding : 20px;
                            }
                        </style>`;
  }
  browserSizeCheck() {
    if (window.innerWidth > 480) {
      document.getElementById("blogDOM").innerHTML += this.PC_versionDOM + this.PC_versionStyle;
    } else {
      document.getElementById("blogDOM").innerHTML += this.M_versionDOM + this.M_versionStyle;
    }
  }
  scrollMove(clickId, moveId) {
    document.getElementById(clickId).addEventListener("click", () => {
      document.querySelector(moveId).scrollIntoView({
        behavior: 'smooth'
      });
    })
  }
  resultMovePrint() {
    const clickToMove = [{ clickId: "scroll", moveId: ".section2" }];
    clickToMove.forEach(({ clickId, moveId }) => {
      this.scrollMove(clickId, moveId);
    });
  }
  start() {
    this.initDom();
    this.browserSizeCheck();
    this.resultMovePrint();
  }
}
const myBlog = new BlogCreate("myBlog");
myBlog.start();