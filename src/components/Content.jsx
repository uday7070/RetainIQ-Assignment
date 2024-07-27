import React, { useCallback, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { toast } from "react-toastify";
import AddIcon from "@mui/icons-material/Add";
import "./Content.css";

import "react-toastify/dist/ReactToastify.css";

import Variant from "./Variant";

const Content = () => {
  const [rows, setRows] = useState([{ id: 1, name: 1, variants: {} }]);
  const [variantCount, setVariantCount] = useState(2);

  const handleAddState = () => {
    const newState = {
      id: rows.length + 1,
      name: `${rows.length + 1}`,
      variants: {},
    };
    toast.success("State Added");
    setRows([...rows, newState]);
  };

  const handleRemoveState = (id) => {
    const updatedStates = rows
      .filter((state) => state.id !== id)
      .map((state, index) => ({
        ...state,
        name: `${index + 1}`,
      }));
    toast.success("State Removed");
    setRows(updatedStates);
  };

  const handleAddVariant = () => {
    toast.success("Variant Added");
    setVariantCount(variantCount + 1);
  };

  const handleRemoveVariant = (index) => {
    if (variantCount < 2) {
      return;
    }
    setVariantCount(variantCount - 1);
    toast.success("Variant Removed");

    setRows(
      rows.map((state) => {
        const updatedVariants = { ...state.variants };
        delete updatedVariants[`variant${index}`];
        return { ...state, variants: updatedVariants };
      })
    );
  };

  const moveRow = useCallback(
    (dragIndex, hoverIndex) => {
      const dragRow = rows[dragIndex];
      const updatedStates = update(rows, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragRow],
        ],
      }).map((state, index) => ({ ...state, name: `${index + 1}` }));
      setRows(updatedStates);
    },
    [rows]
  );

  return (
    <div className="content_container">
      <DndProvider backend={HTML5Backend}>
        <div className="outer">
          <div className="inner">
            <table>
              <tr>
                <th className="fixed-column"></th>
                <th className="content_heading product_heading fixed-column2">
                  Product Filter
                </th>

                {[...Array(variantCount)].map((_, index) => (
                  <th className="content_heading" key={index}>
                    {index === 0 ? `Primary Variant` : `Variant ${index + 1}`}
                    <MoreVertIcon className="move_icon" />
                  </th>
                ))}
              </tr>

              <>
                {rows.map((state, index) => (
                  <Variant
                    key={state.id}
                    index={index}
                    state={state}
                    moveRow={moveRow}
                    variantCount={variantCount}
                    handleAddVariant={handleAddVariant}
                    handleRemoveState={handleRemoveState}
                    handleRemoveVariant={handleRemoveVariant}
                  />
                ))}
              </>
            </table>
          </div>

          <button className="addState_btn" onClick={handleAddState}>
            <AddIcon style={{ padding: "3px", background: "white" }} />
          </button>
        </div>
      </DndProvider>
    </div>
  );
};

export default Content;
