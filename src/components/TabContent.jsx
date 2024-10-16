
export default function TabContent(props) {
    if (props.tab === 0) {
      return <div>내용0</div>;
    }
    else if (props.tab === 1) {
      return <div>내용1</div>;
    }
    else if (props.tab === 2) {
      return <div>내용2</div>;
    }
  }