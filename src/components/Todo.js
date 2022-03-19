import React, {useState} from "react";

const Todo = (props) => {
  const [Open,setOpen] = useState(false)
  const [Delete,setDelete] = useState(false)

  // this.handleEnter = this.handleEnter.bind(this);

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      props.toggleComplete(e.target.value);
      setOpen(!Open)
    }
  };

  
    return (
      <li
        onMouseEnter={() => {
          setDelete(true);
        }}
        onMouseLeave={() => {
          setOpen(false);
          setDelete(false);
        }}
      >
        <div
          className="first"
          style={{
            textDecoration: props.todo.complete ? "line-through" : "",
          }}
        >
          <div>
            <input
              type="checkbox"
              checked={props.todo.complete === true ? true : false}
              onClick={() => props.toggleCompleteChecked()}
              onChange={() => {}}
            />
          </div>
          <div
            style={{ width: "100%", display: "flex", marginLeft: "20px" }}
            onDoubleClick={() => {
              setOpen(!Open);
            }}
          >
            {Open? (
              <input
                className="input-edit"
                defaultValue={props.todo.text}
                onKeyDown={handleEnter}
                autoFocus
                onChange={() => {
                  console.log("bacs");
                }}
              />
            ) : (
              props.todo.text
            )}
          </div>

          {/* <div style={{justifyContent: "end"}}>
                <button className="btn-close" onClick={this.props.onDelete}>x</button>
              </div> */}
        </div>
        {Delete ? (
          <button className="btn-close" onClick={props.onDelete}>
            x
          </button>
        ) : null}
      </li>
    );
  }


export default Todo;