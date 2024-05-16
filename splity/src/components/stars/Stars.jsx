import "./Stars.css";

const Stars = () => {
  return (
    <>
      <div className="stars" style={{ left: "0%", top: "0%" }}></div>
      <div
        className="stars"
        style={{ right: "30%", top: "5%", animationDelay: "-0.4s" }}
      ></div>
      <div
        className="stars"
        style={{ left: "5%", top: "7%", animationDelay: "-1.7s" }}
      ></div>
      <div
        className="stars"
        style={{ right: "25%", top: "3%", animationDelay: "-3.1s" }}
      ></div>
    </>
  );
};

export default Stars;
