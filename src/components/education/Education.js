import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoSchool } from "react-icons/io5";
import { education } from '../../data/constants';

export const Education = () => {
  return (
    <div id="education">
      <h1 className="text-center pt-5 pb-3">Education</h1>
      <VerticalTimeline lineColor={'#ad88e9'}>
        {education.map((item, index) => {
          return <VerticalTimelineElement
            className="vertical-timeline-element--education"
            key={index}
            date={item.date}
            icon={<IoSchool />}
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            contentStyle={{ border: "0.1px solid #854ce6", borderRadius: "16px", boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px" }}
            contentArrowStyle={{ borderRight: '10px solid #854ce6' }}
          >
            <h4 className="vertical-timeline-element-title pb-2"> {item.degree}</h4>
            <h5 className="vertical-timeline-element-subtitle text">{item.school}</h5>
            <p className='highlight'>{item.grade}</p>
          </VerticalTimelineElement>
        })
        }
      </VerticalTimeline>
    </div>
  )
}



