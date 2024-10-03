import Poems from "./Poems";
import poemsData from "../content/poem1.json";
import styles from "./PoemList.module.css";
export default function PoemList() {
  return (
    <div>
      {poemsData.map((poem, index) => (
        <Poems key={index} poem={poem} />
      ))}
    </div>
  );
}
