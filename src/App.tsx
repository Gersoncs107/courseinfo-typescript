const App = () => {
  const courseName = "Half Stack application development";
  const courseParts = [
    {
      name: "Fundamentals",
      exerciseCount: 10
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14
    }
  ];

  const totalExercises = courseParts.reduce((sum, part) => sum + part.exerciseCount, 0);

  interface HeaderProps {
    name: string;
  }

  const Header = (props: HeaderProps) => {
    return <h1>{props.name}</h1>;
  }

  interface CoursePart {
    name: string;
    exerciseCount: number;
  }

  interface ContentProps {
    parts: CoursePart[];
  }

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

  return (
    <div>
      <Header name={courseName} />
      <Content parts={courseParts} />
      <p>
        Number of exercises {totalExercises}
      </p>
    </div>
  );
};

export default App;