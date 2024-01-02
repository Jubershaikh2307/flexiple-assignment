import "./footer.css";

import { plus, setting } from "../assets";
import { useDispatch, useSelector } from "react-redux";

import { AddNote } from "../Redux/action";

export const Footer = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Reducer.data);

  return (
    <div className="footer">
      <div
        onClick={() =>
          dispatch(
            AddNote({
              id: data.length + 1,
              text: "",
              pin: false,
              pos: {
                a: "0px",
                b: "0px",
              },
            })
          )
        }
      >
        <img src={plus} alt="" />
      </div>
      <div>
        <img src={setting} alt="" style={{ visibility: "hidden" }} />
      </div>
    </div>
  );
};
