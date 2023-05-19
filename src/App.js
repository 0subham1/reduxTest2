import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getUserList } from "./Redux/ActionUser";
import { saveUser } from "./Redux/ActionUser";

const App = () => {
  const result = useSelector((state) => state.ReducerUser);
  console.log(result, "result state.ReducerUser");

  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setName("");
    setUser("");
  };

  const [user, setUser] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    dispatch(getUserList());
    handleClose();
    console.log(result.refresh, "result.refresh");
  }, [result.refresh]);

  const handleClick = (a) => {
    setUser(a);
    setShow(true);
    setName(a.name);
  };

  const handleSave = () => {
    dispatch(saveUser(user, name));
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div>
            <input onChange={(e) => setName(e.target.value)} value={name} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleSave}>save</button>
        </Modal.Footer>
      </Modal>
      <div>
        <button onClick={() => setShow(true)}>add</button>
      </div>
      {result.data &&
        result.data.map((a) => {
          return (
            <table>
              <tr onClick={() => handleClick(a)}>
                <td>{a.id}</td>
                <td>{a.name}</td>
              </tr>
            </table>
          );
        })}
    </>
  );
};

export default App;
