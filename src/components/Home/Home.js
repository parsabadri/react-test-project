import React from "react";
import Map from "../Map/Map";
import SearchIcon from "../../Assets/img/search.jpeg";
import CompanyLogo from "../../Assets/img/apple logo.jpg";
import Axios from "axios";
import Avatar from "../../Assets/img/agent.jpeg";
import Navbar from "../Navbar/Navbar";
import { lang } from "../../lang";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      engIsChosen: true,
      resultData: [],
      agents: [],
      job_title: "Director Of Product Design",
      company_category: "Technology Company",
      location: "Menlo Park, California",
      salary: "$ 280K - $ 330K",
      jobs_available: "254",
      agent_rate: 4.8,
    };
    this.handleLocationInfo = this.handleLocationInfo.bind(this);
    this.handleLangChange = this.handleLangChange.bind(this);
  }
  handleLocationInfo() {
    let request = {
      method: "GET",
      url: "https://run.mocky.io/v3/b1f53cec-54eb-4524-8038-437e869ac639",
    };
    Axios(request)
      .then((response) => {
        console.log(response);
        this.setState({
          resultData: response.data,
          agents: response.data.agents,
        });
        if (window.screen.width < 750) {
          document.getElementById("map").style.display = "none";
        }
      })
      .catch((error) => {
        console.log(error);
      });
    if (window.screen.width > 750) {
      document.getElementById("content-no-result").style.width = "65%";
    }
    document.getElementById("result").className = "result-open";
  }
  closeResults() {
    document.getElementById("result").className = "result-close";
    document.getElementById("content-no-result").style.width = "98%";
    if (window.screen.width < 750) {
      document.getElementById("map").style.display = "block";
    }
  }
  handleLangChange() {
    this.setState({ engIsChosen: !this.state.engIsChosen });
  }
  render() {
    return (
      <div className="home-wrapper">
        <Navbar
          engIsChosen={this.state.engIsChosen}
          handleLangChange={this.handleLangChange}
          switchLanguage={this.switchLanguage}
        />
        <div id="page-content">
          <div id="content-no-result">
            <div className="page-header">
              <section className="home-header">
                {this.state.engIsChosen === true ? (
                  <h4> {lang.Home.EN.job_seeker} </h4>
                ) : (
                  <h4> {lang.Home.FR.job_seeker} </h4>
                )}
                <p> {this.state.jobs_available} </p>
                {this.state.engIsChosen === true ? (
                  <p> {lang.Home.EN.available_jobs} </p>
                ) : (
                  <p> {lang.Home.FR.available_jobs} </p>
                )}
              </section>
              <div className="search">
                <img alt="search" src={SearchIcon} />
                {this.state.engIsChosen === true ? (
                  <input
                    className="searc-input"
                    type="text"
                    placeholder={lang.Home.EN.searchbar_placeholder}
                  />
                ) : (
                  <input
                    className="searc-input"
                    type="text"
                    placeholder={lang.Home.FR.searchbar_placeholder}
                  />
                )}
              </div>
            </div>
            <Map handleLocationInfo={this.handleLocationInfo} />
          </div>
          <div id="result" className="result-close">
            <div className="result-header">
              <section>
                <img alt="company name" src={CompanyLogo} />
                <button onClick={() => this.closeResults()}>
                  {this.state.engIsChosen === true ? (
                    <label> {lang.Home.EN.close} </label>
                  ) : (
                    <label> {lang.Home.FR.close} </label>
                  )}
                  <i className="fas fa-chevron-right"></i>
                </button>
                <h5> {this.state.resultData.name} </h5>
                <p> {this.state.company_category} </p>
              </section>
            </div>
            <div className="result-body">
              <section>
                {this.state.engIsChosen === true ? (
                  <p>{lang.Home.EN.job_title}</p>
                ) : (
                  <p>{lang.Home.FR.job_title}</p>
                )}
                <h5>{this.state.job_title}</h5>
              </section>
              <span>
                {this.state.engIsChosen === true ? (
                  <p> {lang.Home.EN.location} </p>
                ) : (
                  <p> {lang.Home.FR.location} </p>
                )}
                <h5> {this.state.location} </h5>
              </span>
              <span>
                {this.state.engIsChosen === true ? (
                  <p> {lang.Home.EN.salary} </p>
                ) : (
                  <p> {lang.Home.FR.salary} </p>
                )}
                <h5> {this.state.salary} </h5>
              </span>
              <div>
                {this.state.engIsChosen === true ? (
                  <p> {lang.Home.EN.description} </p>
                ) : (
                  <p> {lang.Home.FR.description} </p>
                )}
                <h5> {this.state.resultData.about} </h5>
              </div>
              <div className="available-experts">
                {this.state.engIsChosen === true ? (
                  <p> {lang.Home.EN.available_experts} </p>
                ) : (
                  <p> {lang.Home.FR.available_experts} </p>
                )}
                {this.state.agents.map((agent) => (
                  <div key={agent.name} className="agent">
                    <img alt="agent" src={Avatar} />
                    <div>
                      <h5 className="agent-name"> {agent.name} </h5>
                      <p className="agent-title"> {agent.title} </p>
                    </div>
                    <div className="rate-wrapper">
                      <p className="agent-rate">
                        {this.state.agent_rate > 3 ? (
                          <span className="rate-high" id="rate-color">
                            {this.state.agent_rate}
                          </span>
                        ) : (
                          <span className="rate-low" id="rate-color">
                            {this.state.agent_rate}
                          </span>
                        )}
                        /5
                      </p>
                      {this.state.engIsChosen === true ? (
                        <p className="rate-static-text">
                          {" "}
                          {lang.Home.EN.rate}{" "}
                        </p>
                      ) : (
                        <p className="rate-static-text">
                          {" "}
                          {lang.Home.FR.rate}{" "}
                        </p>
                      )}
                    </div>
                    {agent.status === "free" ? (
                      <button>
                        <i className="fas fa-video"></i>
                        {this.state.engIsChosen === true ? (
                          <p className="video-chat-title">
                            {" "}
                            {lang.Home.EN.video_chat}{" "}
                          </p>
                        ) : (
                          <p className="video-chat-title">
                            {" "}
                            {lang.Home.FR.video_chat}{" "}
                          </p>
                        )}
                      </button>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
