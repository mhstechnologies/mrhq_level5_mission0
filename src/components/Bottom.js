import './Bottom.css';

function Bottom() {
  return (
    <div className="Bottom_Body">
      <div className="Bottom_Figure_Generic">
        <img className="Bottom_Figure_1" src="/forbes_technology.jpg" alt="technology_photo_1"/>
        <div className="Bottom_Figure_Description">
          <p>The 7 Biggest Technology Trends In 2020</p>
          {/* Source: https://www.forbes.com/sites/bernardmarr/2019/09/30/the-7-biggest-technology-trends-in-2020-everyone-must-get-ready-for-now/*/}
          <p>Source: https://www.forbes.com/</p>
        </div>
      </div>
      <div className="Bottom_Figure_Generic">
        <img className="Bottom_Figure_2" src="/index.jpeg" alt="technology_photo_2"/>
        <div className="Bottom_Figure_Description">
          <p>Technology Essay</p>
          {/* Source: https://www.process.st/checklist/technology-essay/*/}
          <p>Source: https://www.process.st</p>
        </div>
      </div>
      <div className="Bottom_Figure_Generic">
        <img className="Bottom_Figure_3" src="/depositphotos_111794520-stock-illustration-vector-illustration-abstract-futuristic-eyeball.jpg" alt="technology_photo_3"/>
        <div className="Bottom_Figure_Description">
          <p>The 7 Biggest Technology Trends In 2020</p>
          {/* Source: https://st2.depositphotos.com/3576919/11179/v/950/depositphotos_111794520-stock-illustration-vector-illustration-abstract-futuristic-eyeball.jpg*/}
          <p>Source: https://st2.depositphotos.com</p>
        </div>
      </div>
    </div>
  );
};

export default Bottom;