import { ReactElement, useState } from "react"
import { AiFillFolder, AiFillFolderOpen } from 'react-icons/ai';
import "src/styles/Tabs.css"

type TabProps = {
  tabContentArray?: {
    key: string;
    content?: ReactElement;
  }[];
}

//free icons from react-icons, I am using ant-design here.
const exampleTabContent = [
  {
    key: 'content-1',
    content: (<button>yo</button>)
  },
  {
    key: 'content-2',
    content: (<div><div><span>span it up up on, span it</span></div></div>)
  },
  {
    key: 'content-3',
    content: (<h1 style={{ color: '#21ff90' }}>Third Eye Blind, great band, great album</h1>)
  },
  {
    key: 'content-4',
    content: (
      <form style={{ display: "flex", flexFlow: "column", width: "192px" }}>
        <input placeholder="I'm an input!" />
        <input placeholder="So am I!" />
      </form>)
  },
]

export function Tabs(props: TabProps): ReactElement {
  const [tabNumber, setTabNumber] = useState<number>(0);
  const { tabContentArray = exampleTabContent } = props;

  return (
    <div className="tabs-wrapper">
      <div className="tab-bar">
        {tabContentArray.map((contentObj, index) => {
          return (
            <div
              key={contentObj.key}
              className={`single-tab-wrapper ${index === tabNumber ? "tab-active" : ""}`}
              onClick={() => setTabNumber(index)}
            >
              <div className="icon-container">
                {index === tabNumber
                  ? (<AiFillFolderOpen className="tab-icons" />)
                  : (<AiFillFolder className="tab-icons" />)
                }
              </div>
              <span> &nbsp; Tab {index + 1}</span>
            </div>
          )
        })
        }
      </div>
      {tabContentArray[tabNumber].content}
    </div >
  )
}
