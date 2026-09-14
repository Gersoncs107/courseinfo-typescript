const App = () => {
  const courseName = "Half Stack application development";
  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is an awesome course part",
      kind: "basic"
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3,
      kind: "group"
    },
    {
      name: "Basics of type Narrowing",
      exerciseCount: 7,
      description: "How to go from unknown to string",
      kind: "basic"
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      backgroundMaterial: "https://type-level-typescript.com/template-literal-types",
      kind: "background"
    },
    // {
    //   name: "TypeScript in frontend",
    //   exerciseCount: 10,
    //   kind: "basic",
    // },
  ]
  const totalExercises = courseParts.reduce((sum, part) => sum + part.exerciseCount, 0);

  interface HeaderProps {
    name: string;
  }

  const Header = (props: HeaderProps) => {
    return <h1>{props.name}</h1>;
  }

  interface ContentProps {
    parts: CoursePart[];
  }
interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

interface CoursePartBasic extends CoursePartBase {
  description: string;
  kind: "basic"
}

interface CoursePartGroup extends CoursePartBase {
  groupProjectCount: number;
  kind: "group"
}

interface CoursePartBackground extends CoursePartBase {
  description: string;
  backgroundMaterial: string;
  kind: "background"
}

type CoursePart = CoursePartBasic | CoursePartGroup | CoursePartBackground;

  const Content = (props: ContentProps) => {
    return (
      <div>
        {props.parts.map((part, index) => (
          <p key={index}>
            {part.name} {part.exerciseCount}
          </p>
        ))}
      </div>
    );
  }

  interface TotalProps {
    total: number;
  }

  const Total = (props: TotalProps) => {
    return <p>Number of exercises {props.total}</p>;
  }

  return (
    <div>
      <Header name={courseName} />
      <Content parts={courseParts} />
      <Total total={totalExercises} />
    </div>
  );
};

export default App;