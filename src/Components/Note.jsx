import "./note.css";

import {
  changeNoteText,
  changePosition,
  deleteNote,
  pinValue,
} from "../Redux/action";
import { cross, pin } from "../assets";
import { useEffect, useRef, useState } from "react";

import { useDispatch } from "react-redux";

export const Note = ({ data }) => {
  const dispatch = useDispatch();
  const container = useRef(null);
  const childRef = useRef(null);
  const [isHovered, setIsHovered] = useState(data.pin);

  const handleMouseEnter = () => {
    !data.pin && setIsHovered(true);
  };

  const handleMouseLeave = () => {
    !data.pin && setIsHovered(false);
  };

  const style = {
    visibility: isHovered ? "visible" : "hidden",
  };

  const handlePin = () => dispatch(pinValue(data.id, !data.pin));

  const handleDelete = () => dispatch(deleteNote(data.id));

  useEffect(() => {
    const elmnt = container.current;

    if (elmnt) {
      if (!data.pin) {
        // If note is not pinned, attach drag events
        dragElement(elmnt);
      } else {
        // If note is pinned, remove drag events
        elmnt.onmousedown = null;
        childRef.current.onmousedown = null;
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }
  }, [data.pin]);

  function dragElement(elmnt) {
    elmnt.style.top = data.pos.a;
    elmnt.style.left = data.pos.b;
    var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    if (childRef.current) {
      /* if present, the header is where you move the DIV from:*/
      childRef.current.onmousedown = dragMouseDown;
    } else {
      /* otherwise, move the DIV from anywhere inside the DIV:*/
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;

      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = elmnt.offsetTop - pos2 + "px";
        elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
        dispatch(
          changePosition(data.id, { a: elmnt.style.top, b: elmnt.style.left })
        );
      }

      function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }
  }

  return (
    <div
      className="noteContainer"
      ref={container}
      style={{ zIndex: data.pin ? 100 : 1, position: "relative" }}
    >
      <div
        id="test"
        ref={childRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div onClick={handlePin} style={style}>
          <img src={pin} alt="" />
        </div>
        <div onClick={handleDelete}>
          <img src={cross} alt="" />
        </div>
      </div>
      <div>
        <textarea
          className="textArea"
          value={data.text}
          onChange={(e) => dispatch(changeNoteText(data.id, e.target.value))}
        />
      </div>
    </div>
  );
};
