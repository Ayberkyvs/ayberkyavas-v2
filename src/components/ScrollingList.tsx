export default function ScrollingList({data}: {data: []}){
  return (
    <div>
      <div className="scroller w-screen max-w-[768px]" data-speed="fast" data-animated="true">
        <ul className="tag-list scroller__inner">
          {generateSkillSpans(data)}
          {generateSkillSpans(data)}
        </ul>
      </div>
        <div className="scroller w-screen max-w-[768px]" data-speed="fast" data-animated="true" data-direction="right">
        <ul className="tag-list scroller__inner">
          {generateSkillSpans(data)}
          {generateSkillSpans(data)}
        </ul>
      </div>
      <div className="scroller w-screen max-w-[768px]" data-speed="fast" data-animated="true" data-direction="left">
        <ul className="tag-list scroller__inner">
          {generateSkillSpans(data)}
          {generateSkillSpans(data)}
        </ul>
      </div>
    </div>
  );
};


const generateSkillSpans = (data: []) => {
  return data.map((skill, index) => (
    <li key={index}>{skill}</li>
));
};

