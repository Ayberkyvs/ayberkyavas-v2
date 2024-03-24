import "./ScrollingList.css"
export default function ScrollingList(){
  return (
    <div>
      <div className="scroller" data-speed="fast" data-animated="true">
        <ul className="tag-list scroller__inner">
          {generateSkillSpans()}
          {generateSkillSpans()}
        </ul>
      </div>
        <div className="scroller" data-speed="fast" data-animated="true" data-direction="right">
        <ul className="tag-list scroller__inner">
          {generateSkillSpans()}
          {generateSkillSpans()}
        </ul>
      </div>
    </div>
  );
};


const generateSkillSpans = () => {
  const skills = [
    'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'SCSS',
    'TailwindCSS', 'ReactJS', 'SQL', 'Router V6', 'API\'S', "C#"
  ];
  return skills.map((skill, index) => (
    <li key={index}>{skill}</li>
));
};

