import { GenreResponseProps } from "../App";
import { Button } from "./Button";

interface DataProps {
  data: GenreResponseProps[];
  selectId: number;
  clickEvent: (id: number) => void;
}

export function SideBar({ data, selectId, clickEvent }: DataProps) {
  return (
    <>
      <nav className="sidebar">
        <span>
          Watch<p>Me</p>
        </span>

        <div className="buttons-container">
          {data.map((d) => (
            <Button
              key={String(d.id)}
              title={d.title}
              iconName={d.name}
              onClick={() => clickEvent(d.id)}
              selected={selectId === d.id}
            />
          ))}
        </div>
      </nav>
    </>
  );
}
