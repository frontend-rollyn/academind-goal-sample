import { FC } from "react";
import CourseGoal from "./CourseGoal";
import { CourseGoal as CGoal } from "./App";

type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

const CourseGoalList: FC<CourseGoalListProps> = ({ goals, onDeleteGoal }) => {
  return (
    <ul>
      {goals.map((c) => (
        <li key={c.id}>
          <CourseGoal id={c.id} title={c.title} onDelete={onDeleteGoal}>
            <p>{c.description}</p>
          </CourseGoal>
        </li>
      ))}
      ;
    </ul>
  );
};
export default CourseGoalList;

//export default function CourseGoalList({ goals }: CourseGoalListProps) {
//  return (
//    <ul>
//      {goals.map((c) => (
//        <li key={c.id}>
//          <CourseGoal title={c.title}>
//            <p>{c.description}</p>
//          </CourseGoal>
//        </li>
//      ))}
//      ;
//    </ul>
//  );
//}
